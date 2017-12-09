var fortunes = [
  // add more array items here if you want, make sure you put a comma between each one. You can use HTML here! Just remember that if it contains quotes, they need to be escaped, like this: \"
  "You will win a <em>million</em> dollars! Yay!",
  "You will step on a piece of gum.",
  "You will be attacked by a fluffy bunny.",
  "You will make an award-winning movie!",
  "You will be buried alive.",
  "You will step on TWO pieces of gum!",
  "You will become a snake tamer.",
  "You will find treasure!",
  "You will make one fine pizza delivery man.",
  "You will become popular.",
  "You will be knocked out at a concert.",
  "You will become great at whatever job you have!",
  "You will step on THREE pieces of gum!",
  "You will experience your worst nightmare! <em>Spoopy!</em>",
  "You will become famous!",
  "You will get superpowers! But then, you realize it's the lamest superpower ever.",
  "You will get superpowers! And they're great!",
  "You will finally become funny.",
  "You will become president of the U.S.A!",
  "You will be betrayed by someone you thought was a friend...",
  "You will find a $100 bill on your shoe! Three days in a ROW!",
  "You will take a surprise trip to somewhere. I can't tell you where!",
  "You will become.... Superman! I mean, Superman's <em>evil twin..</em>",
  "You will become an astronaut. If you already are one, then you'll become the <em>first</em> astroanut to reach Pluto alive!",
  "You will become a meme.",
  "You will cringe at The <em>Emoji Movie</em>.",
  "You will become a famous actor! Now act!"
];

function tellFortune() {
  
  // generate a random number between 0 and the number of the array items
  var randomNumber = Math.floor(Math.random() * fortunes.length);

  // print the random number to the console log to make sure it's working
  console.log("random number: " + randomNumber);

  // take the fortune at the random spot in the array and insert it into the "fortune" div
 document.getElementById("fortune").innerHTML = fortunes[randomNumber];
}

function reset() {
  // what goes here? (hint: make the fortune div contain an empty string)
  
}
