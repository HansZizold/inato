export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      switch (this.drugs[i].name) {
        case "Herbal Tea":
          // At the end of each day our system lowers both values for every drug
          // "Herbal Tea" actually increases in Benefit the older it gets
          this.drugs[i].benefit = this.drugs[i].benefit + 1;
          this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
          // Benefit increases twice as fast after the expiration date
          if (this.drugs[i].expiresIn < 0) {
            this.drugs[i].benefit = this.drugs[i].benefit + 1;
          }
          // The Benefit of an item is never more than 50
          if (this.drugs[i].benefit > 50) {
            this.drugs[i].benefit = 50;
          }
          break;
        case "Magic Pill":
          break;
        case "Fervex":
          // At the end of each day our system lowers both values for every drug
          // "Fervex" increases in Benefit as its expiration date approaches
          this.drugs[i].benefit = this.drugs[i].benefit + 1;
          this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
          // Benefit increases by 2 when there are 10 days or less
          if (this.drugs[i].expiresIn < 10) {
            this.drugs[i].benefit = this.drugs[i].benefit + 1;
          }
          // Benefit increases by 3 when there are 5 days or less
          if (this.drugs[i].expiresIn < 5) {
            this.drugs[i].benefit = this.drugs[i].benefit + 1;
          }
          // Benefit drops to 0 after the expiration date
          if (this.drugs[i].expiresIn < 0) {
            this.drugs[i].benefit = 0;
          }
          // The Benefit of an item is never more than 50
          if (this.drugs[i].benefit > 50) {
            this.drugs[i].benefit = 50;
          }
          break;
        case "Dafalgan":
          // At the end of each day our system lowers both values for every drug
          this.drugs[i].benefit = this.drugs[i].benefit - 2;
          this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
          // Once the expiration date has passed, Benefit degrades twice as fast
          if (this.drugs[i].expiresIn < 0) {
            this.drugs[i].benefit = this.drugs[i].benefit - 2;
          }
          // The Benefit of an item is never negative.
          if (this.drugs[i].benefit < 0) {
            this.drugs[i].benefit = 0;
          }
          break;
        default:
          // At the end of each day our system lowers both values for every drug
          this.drugs[i].benefit = this.drugs[i].benefit - 1;
          this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
          // Once the expiration date has passed, Benefit degrades twice as fast
          if (this.drugs[i].expiresIn < 0) {
            this.drugs[i].benefit = this.drugs[i].benefit - 1;
          }
          // The Benefit of an item is never negative.
          if (this.drugs[i].benefit < 0) {
            this.drugs[i].benefit = 0;
          }
          break;
      }
    }
    return this.drugs;
  }
}
