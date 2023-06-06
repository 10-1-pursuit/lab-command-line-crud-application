const { createPurchase, updatePurchase, deletePurchase, getPurchase, getAllPurchases, } = require('../src/purchase');
const { showPurchase, showAllPurchases } = require("../src/views")

describe("deletePurchase()", () => {
  test("deletes correct purchase object from array", () => {
    const purchase = createPurchase("Hot Chocolate", 4.67);
    deletePurchase(purchase.id);
    const purchases = getPurchase(purchase.id);
    expect(purchases.length).toBe(0);
  });
});

describe("updatePurchase()", () => {
  test("updates the correct purchase object with correct info", () => {
    const purchase = createPurchase("Coffee", 2.04);
    updatePurchase(purchase.id, "Tea", 3.87);
    const updatedPurchase = getAllPurchases().find((p) => p.id === purchase.id);
    expect(updatedPurchase.name).toBe("Tea");
    expect(updatedPurchase.amount).toBe(3.87);
  });
});

describe("showPurchase()", () => {
  test("returns expected output for show view", () => {
    const purchase = createPurchase("Chai Tea", 6.45);
    const expectedOutput = showPurchase(purchase.id);
    const output = showPurchase(purchase.id);
    expect(output).toBe(expectedOutput);
  });
});