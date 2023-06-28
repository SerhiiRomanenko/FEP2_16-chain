let ladder = {
  step: 0,
  up: function () {
    this.step++;
    return this;
  },
  down: function () {
    this.step--;
    return this;
  },
  showStep: function () { // показує теперішню сходинку
    console.log(this.step);
  },
};


ladder.up();
ladder.showStep(); // 1
ladder.up();
ladder.showStep(); // 2
ladder.down();
ladder.showStep(); // 1


ladder.up().up().down().showStep(); // 2