class Wand {
  constructor(madeOf, length, center) {
    this.type = madeOf;
    this.size = length;
    this.core = center;
  }

  cast(spell) {
    return `Casting ${spell}!`;
  }

};




module.exports = Wand;
