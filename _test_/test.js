const {
    index,
    create,
  } = require("../src/appController");
  
const products = [
    { id: 1, name: hdTv, amount: 500, donation: 20 },
    { id: 2, name: playstation5, amount: 1000, donation: 100 },
    { id: 3, name: LogitechG5RacingWheel, amount: 699, donation: 70 }]

  describe("index()", () => {
    test("should retrun product.id and product.name", () => {
      const actual = index(products);
      const expected = products.map((eachProduct)=> eachProduct.id+" "+ eachProduct.name).join("/n");
      expect(actual).toEqual(expected);
    });
  
    test("should throw an error if the cart is empty", () => {
      expect(() =>index()([])).toThrow();
    });
  });

  describe("create()", () => {
    test("should create a new product with process.argv", () => {
      const actual = create(products);
      const expected = Object.keys(products)=== "id"&& "name" &&"amount"&& "donation";
      expect(actual).toEqual(expected);
    });
  
    test("should throw an error if the cart is empty", () => {
      expect(() =>create()([])).toThrow();
    });
  });

  