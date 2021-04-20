class Runner {
  constructor(runner, num) {
    this.name = runner;
    this.age = num;
    this.milesRun = 0;
    this.fitness = 25;
    this.completedRaces = [];
  }

  runSomeMiles(miles) {
    this.fitness += miles;
    this.milesRun += miles;
  }

  stretch() {
    this.fitness += 0.5;
  }

  runRace(raceName, miles) {
    this.completedRaces.push(raceName);
    this.runSomeMiles(miles);

  }

};

module.exports = Runner;
