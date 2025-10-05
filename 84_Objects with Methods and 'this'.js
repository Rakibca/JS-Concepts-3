const gamer = {
  name: 'Dave',
  score: 0,
  // 'incrementScore' is a method of 'gamer' object
  incrementScore: function () {
    gamer.score++;
  },
};

console.log(gamer); // {name: 'Dave', score: 0, incrementScore: ƒ()}
gamer.incrementScore();
console.log(gamer); // {name: 'Dave', score: 1, incrementScore: ƒ()}
