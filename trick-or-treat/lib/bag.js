class Bag {
  constructor() {
    this.empty = true;
    this.count = 0;
    this.candies = [];
  }

  fill(candy) {
    this.candies.push(candy);
    this.count++;
  }

  contains(candyName) {
    for (var i = 0; i < this.candies.length; i++) {
      if (this.candies[i].type === candyName) {
        return true;
      } else {
        return false;
      }
    }
  }

};





module.exports = Bag;
