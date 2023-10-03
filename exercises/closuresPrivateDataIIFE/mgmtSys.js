"use strict"
// ItemCreator is a constructor that instantiates new items
// uses an IIFE so that all the code for properly creating an item
// is 'hidden' and users can only invoke the constructor with correct
// arguments to instatiate an object. 
const ItemCreator = (function() {
  function createSKU(name, category) {
      return name.split(' ').join('').slice(0, 3).toUpperCase()
      + category.slice(0, 2).toUpperCase();
  }
    
  function validateItemName(name) {
    return name.split(' ').join('').length >= 5;
  }
  
  function validateCategory(category) {
    return (category.split(' ').length === 1) && (category.length >= 5);
  }
  
  function validateQuantity(quantity) {
    return quantity !== undefined;
  }
  
  // function Item Creator is initialized to that uses closure to access
  // validation code for the class
  // why do we need to leverage closure at all here? Does it have something
  // to do with functions being object so if the functions for validating
  // arguments are within the return function can they be accessed directly?
  return function(name, category, quantity) {
    if ( !validateItemName(name) || !validateCategory(category) || !validateQuantity(quantity)) {
        return { notValid : true };
      }
      
    return { 
      'sku'  : createSKU(name, category), 
      name,
      category,
      quantity,
    };
  }
})(); // item creator is a constructor with access to private functions

const ItemManager = {
  
  items : [], // list of all items
  
  create(name, category, quantity) { 
    let item = ItemCreator(name, category, quantity);
    if ( item.hasOwnProperty('notValid') ) return false;
    
    this.items.push(item);
    return true;
  },
  
  update(sku, obj) {
    let item = this.getItem(sku);
    Object.assign(item, obj);
  },
  
  delete(sku) {
    let item = this.getItem(sku);
    let idx = this.items.indexOf(item);
    if (idx !== -1) this.items.splice(idx, 1);
  },
  
  inStock() {
    return this.items.filter(item => item['quantity'] > 0);
  },
  
  itemsInCategory(category) {
    return this.items.filter(item => item['category'] === category);
  },
  
  getItem(sku) {
    for (let idx = 0; idx < this.items.length; idx++) {
      let item = this.items[idx];
      if (item['sku'] === sku) return item;
    }
  }
};

const ReportManager = {
  init(itemMgr) {
    this.items = itemMgr;
  },
  
  createReporter(sku) {
    const item = this.items.getItem(sku);
    return {
      itemInfo() {
        for (let prop in item) {
          console.log(`${prop}: ${item[prop]}`);
        }
      }
    };
  },
  
  reportInStock() {
    return this.items.inStock()
    .reduce( (arr, item) => { 
      arr.push(item['name']);
      return arr;
    }, [])
    .join();
  }
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
//console.log(ItemManager.items);

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
// console.log(ReportManager.reportInStock());

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
console.log(ItemManager.inStock());
// football,kitchen pot
console.log(ReportManager.reportInStock());

// returns list with the item objects for basket ball, soccer ball, and football
console.log(ItemManager.itemsInCategory('sports'));

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
console.log(ItemManager.items);

let kitchenPotReporter = ReportManager.createReporter('KITCO');
console.log(kitchenPotReporter.itemInfo());
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
console.log(kitchenPotReporter.itemInfo());
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10