class Wizard {
  constructor(wizObj) {
    this.name = wizObj.name;
    this.petsCount = 0;
    this.pets = [];
  }

  adoptPet(pet) {
    this.pets.push(pet);
    this.petsCount++
  }

  petList() {
    var list = '';
    for (var i = 0; i < this.pets.length; i++) {
      if ([i] = this.pets[0]) {
        list += `A ${this.pets[i].type} named ${this.pets[i].name}; `;
      } else {
        list += `An ${this.pets[i].type} named ${this.pets[i].name}.`
      }
    }
    return list;
  }

};






module.exports = Wizard;
