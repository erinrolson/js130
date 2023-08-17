function startCounting() {
  let count = 0;
  let interval = setInterval(function() {
    count += 1;
    console.log(count);
  }, 1000);
  
  return interval
}

function stopCounting(intervalObj) {
  clearInterval(intervalObj);
}

let currentInterval = startCounting();

stopCounting(currentInterval);

