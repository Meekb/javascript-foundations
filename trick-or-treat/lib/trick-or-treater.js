class TrickOrTreater {
  constructor(costumeObj, bagObj) {
    this.dressedUpAs = costumeObj.style;
    this.bag = bagObj;
    this.hasCandy = false;
    this.countCandies = 0;
  }

  putCandyInBag(candyObj) {
    this.hasCandy = !this.hasCandy;
    this.bag.fill();
    this.countCandies++;
  }

  eat() {
    this.countCandies--;
    this.bag.candies.pop();
  }


};



module.exports = TrickOrTreater;
