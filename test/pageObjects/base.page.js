export default class BasePage {
  constructor() {
    this.listOfProducts = {
      backPack: "Sauce Labs Backpack",
      bikeLight: "Sauce Labs Bike Light",
      boltTShirt: "Sauce Labs Bolt T-Shirt",
      fleece: "Sauce Labs Fleece Jacket",
      onesie: "Sauce Labs Onesie",
      redTShirt: "Test.allTheThings() T-Shirt (Red)",
    };
  }
  getDummy() {
    return "dummy";
  }
}
