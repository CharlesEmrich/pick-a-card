var ranks = ["2","3","4","5","6","7","8","9","10","jack","queen","king","ace"];
var suits = ["clubs","spades","diamonds","hearts"];

function makeDeck() {
  var deck = [];
  ranks.forEach(function(rank) {
    suits.forEach(function(suit) {
      deck.push(rank + " of " + suit);
    });
  });
  return deck;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

$(function() {
  $("button").click(function() {
    var hand = [];

    while (hand.length < 5) {
      cardIdx = getRandomInt(0, 52);
      if (hand.indexOf(cardIdx) === -1) {
        hand.push(cardIdx);
      }
    }

    hand.forEach(function(idx) {
        $(".output").append("<li>" + makeDeck()[idx] + "</li>");
    });
    // makeDeck().forEach(function(card) {
    //   $(".output").append("<li>" + card + "</li>");
    // });
  });
});
