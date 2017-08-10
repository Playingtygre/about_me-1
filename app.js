'use strict';
var name = prompt('What\'s your name?');
console.log(name);
alert('Respond to answers unless specified with y\/yes or n\/no.');
var crAns = 0;
var quiz = prompt('Would you like to take a quiz about me?');
quiz = quiz.toUpperCase();
console.log(quiz);
if((quiz === 'YES') || (quiz === 'Y')) {
  alert('I\'m glad you are interested.');
  crAns++;
} else{
  alert('TO FUCKIN BAD\!');
}
var victory = prompt('Was I the 2013 IT Skills U.S.A state champion for Arizona?');
victory = victory.toUpperCase();
console.log(victory);
if((victory === 'YES') || (victory === 'Y')) {
  alert('Indeed I was.');
  crAns++;
} else{
  alert('Sadly you are wrong.');
}
var blind = prompt('Am I color blind?');
blind = blind.toUpperCase();
console.log(blind);
if((blind === 'YES') || (blind === 'Y')) {
  alert('INDEED, red green at that.');
  crAns++;
} else{
  alert('Sadly I\'m red green color blind.');
}
var birth = prompt('Was I born in Arizona?');
birth = birth.toUpperCase();
console.log(birth);
if((birth === 'YES') || (birth === 'Y')) {
  alert('No, I was actualy born in Italy.');
} else{
  alert('Correct, I was actualy born in Italy.');
  crAns++;
}
var favGame = prompt('Jak \& Daxter is one of my all time favorite games?');
favGame = favGame.toUpperCase();
console.log(favGame);
if((favGame === 'YES') || (favGame === 'Y')) {
  alert('Indeed it is.');
  crAns++;
} else{
  alert('It is, matter of fact it was better than Uncharted.');
}
for(var i = 0; i < 4; i++) {
  var numGuess = prompt('Guess a number between 1-20.');
  console.log(numGuess);
  if(numGuess === '8') {
    alert('You guessed right');
    crAns++;
    break;
  } else if(numGuess < '8') {
    alert('That\'s too low.');
  } else if(numGuess > '8') {
    alert('That\'s too high.');
  }
  alert('Try again');
}
var hob = ['blacksmithing', 'gaming', 'photography'];
for(var j = 0; j < 6; j++) {
  var possibilities = prompt('What is one of my hobbies?');
  console.log(possibilities);
  if(hob.includes(possibilities)) {
    alert('That\'s one of my hobbies. My current hobbies are blacksmithing, gaming, and photography.');
    crAns++;
    break;
  } else {
    alert('That\'s not a hobby of mine. Feel free to guess again.');
  }
}
alert('Thank you for participating ' + name + '.' + ' Score:' + crAns + '\/7');
