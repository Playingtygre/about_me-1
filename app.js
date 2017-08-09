'use strict';
var quiz = prompt('Would you like to take a quiz about me?');
quiz = quiz.toUpperCase();
console.log(quiz);
if((quiz === 'YES') || (quiz === 'Y')) {
  alert('I\'m glad you are interested.');
} else{
  alert('TO FUCKIN BAD\!');
}
var victory = prompt('Was I the 2013 IT Skills U.S.A state champion for Arizona?');
victory = victory.toUpperCase();
console.log(victory);
if((victory === 'YES') || (victory === 'Y')) {
  alert('Indeed I was.');
} else{
  alert('Sadly you are wrong.');
}
var blind = prompt('Am I color blind?');
blind = blind.toUpperCase();
console.log(blind);
if((blind === 'YES') || (blind === 'Y')) {
  alert('INDEED, red green at that.');
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
}
var favGame = prompt('Jak \& Daxter is one of my all time favorite games?');
favGame = favGame.toUpperCase();
console.log(favGame);
if((favGame === 'YES') || (favGame === 'Y')) {
  alert('Indeed it is.');
} else{
  alert('It is, matter of fact it was better than Uncharted.');
}
