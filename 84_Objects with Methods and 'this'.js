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

// NOTE: if the name of the above object changed, we have to update the code in 2 places.
// This is where the 'this' keyword comes in.
const gamerNew = {
  name: 'Dave',
  score: 0,
  incrementScore: function () {
    // The 'this' keyword used below
    //console.log(this);  // {name: 'Dave', score: 0, incrementScore: ƒ()}
    this.score++;
  },
};

console.log(gamerNew); // {name: 'Dave', score: 0, incrementScore: ƒ()}
gamerNew.incrementScore();
console.log(gamerNew); // {name: 'Dave', score: 1, incrementScore: ƒ()}

// NOTE: now lets create a new object called 'gamer1'.
const gamer1 = {
  name: 'Sarah',
  score: 0,
  incrementScore: function () {
    this.score++;
  },
};

gamer.incrementScore();
gamer1.incrementScore();
console.log(gamer); // {name: 'Dave', score: 1, incrementScore: ƒ()}
console.log(gamer1); // {name: 'Sarah', score: 1, incrementScore: ƒ()}

// NOTE: if we change this method 'incrementScore' to an arrow function, 'this' will no longer refer to this object, but will refer to the 'window' object.
// So we usually use the 'function' keyword for methods in objects, so that the 'this' behaves predictably.
const gamerArrow = {
  name: 'Dave',
  score: 0,
  incrementScore: () => {
    console.log(this); // Window
    this.score++;
  },
};

gamerArrow.incrementScore();
