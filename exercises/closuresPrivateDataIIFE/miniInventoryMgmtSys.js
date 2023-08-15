// item creator (perhaps just 'hidden' functions that validate items???)
//  - ensures necessary data are present and valid

// items manager
//  - no init method
//  - creates items
//    - sku code: first 3 letters of an item and first 2 letters of category
//      - if item name x2 words and the first word two letters only, next letter
//        taken from other word.
//    - item name: min 5 characters. Spaces do not count as character
//    - category: consists of min 5 characters and may only be one word
//    - quantity: stock quantity of a given item. Cannot be blank. valid num provided. 

//  - updates information about items
//  - deletes items
//  - queries information about items


// reports manager
//  - creates report objects for specific items
//  - generates reports for a specific item or all items
//  - responsible for all reports for all items

// Why should this be an IIFE?? Well it makes it so those functions aren't 
// accessible to the program-at-large and that users cannot become dependent
// on their implementations. 

let ItemManager = (function() {
  
  function validName(itemName) {
      return itemName.split(' ').join('').length >= 5;
  }
    
  function makeSku(itemName, category) {
    itemName = itemName.split(' ').join();
    return (itemName.slice(0, 3) + category.slice(0, 2)).toUpperCase();
  }
  
  function validCategory(category) {
    return (category.split(' ').length === 1) && (category.length >= 5);
  }
  
  function validQuantity(num) {
    return num !== undefined;
  }
  
  return {
    items : [],
    
    create(itemName, category, quantity) {
      if (!validName(itemName) || !validCategory(category) || !validQuantity(quantity)) {
        return false;
      }
      // create the item and add to items array 
      let newItem = 
        { // all of these are properties of the item and can be accessed... problem?
          skuCode : makeSku(itemName, category), 
          itemName,
          category,
          quantity,
        };
      
      this.items.push(newItem);
    },
    
    update(skuCode, obj) {
      // updates ANY of the information on an item 
      this.items.forEach( item => {
        if (item.skuCode === skuCode) {
          Object.assign(item, obj);
        }
      });
    },
    
    delete(skuCode) {
      let index = this.items.findIndex( item => item.skuCode === skuCode);
      this.items.splice(index, 1);
    },
    
    inStock() {
      return this.items.filter( item => item.quantity > 0);
    },
    
    itemsInCategory(category) {
      return this.items.filter( item => item.category === category );
    }, 
    
  }

})();

let ReportManager = (function() {
  
  
  return {
    init(itemManagerObj) {
      // what exactly happens here?
      this.items = itemManagerObj;
    },
    
    reportInStock() {
      let inStock = this.items.inStock().map( item => item.itemName);
      console.log(inStock.join(', '));
    },
    
    createReporter(skuCode) {
      let obj = this.items.items.filter( item => item.skuCode === skuCode).pop(); // accessing object
      console.log({obj});
      return {
        itemInfo() {
          
          // using the skuCode I can get the correct object... 
          console.log(`skuCode: ${obj.skuCode}`); // should these be function calls instead???
          console.log(`itemName: ${obj.itemName}`); // should these be function calls instead???
          console.log(`category: ${obj.category}`); // should these be function calls instead???
          console.log(`quantity: ${obj.quantity}`); // should these be function calls instead???
        }
      }
    },
    
    
  }
})();

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
ItemManager.items; // good!

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
ItemManager.items;

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10

