const { createPurchase, updatePurchase, deletePurchase, getPurchase, getAllPurchases, } = require('../src/purchase');

describe("getPurchase()", () => {
    test("Return a purchase by ID", () => {
      const actual = getPurchase();
      const expected = purchase.id;
      expect(actual).toStrictEqual(expected);
    });
  });