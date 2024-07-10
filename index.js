// Code your solutions in this file
function writeCards(names, event) {
    let thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessages;
  }
  
    function countDown(n) {
    while (n >= 0) {
      console.log(n);
      n--;
    }
  }
  
  
 