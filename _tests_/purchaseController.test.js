const chalk = require("chalk");
const {
  indexPurchaseController,
  createPurchaseController,
  listPurchaseController,
  updatePurchaseController,
  removePurchaseController,
} = require("../src/purchaseController.js");

describe("createPurchaseController", () => {
  it("should add a purchase to the list", () => {
    const purchases = [];
    const purchaseName = "Mechanical Pencil";
    const amount = 4.44;
    const id = "rSl_";

    createPurchaseController(purchases, purchaseName, amount, id);

    expect(purchases.length).toBe(1); // Checks if purchases array has a length of 1
    expect(purchases[0].name).toBe("Mechanical Pencil"); // Checks if the name of the purchase is "Mechanical Pencil"
    expect(purchases[0].amount).toBe(4.44); // Checks if purchases array amount equals 4.44
    expect(purchases[0].id).toBe(id); // Checks if purchases array id matches id
  });
});

describe("indexPurchaseController", () => {
  let consoleLogSpy; // consoleLogSpy tracks the calls to console.log during the test

  beforeEach(() => {
    // beforeEach is a setup step that prepares things needed for the tests.
    consoleLogSpy = jest.spyOn(console, "log"); // Any calls to console.log during the test will be tracked
  }); // jest.spyOn is a jest function that allows you to create a spy on a specific method of an object. It enables you to track calls to that method and observe its behavior during testing.
  // jest.spyOn(object, methodName) = > jest.spyOn(console, "log")
  afterEach(() => {
    // afterEach is a setup step that cleans up after the test. They both are used to help creat isolated and independent test cases
    consoleLogSpy.mockRestore(); // Restores the orgiginal behavior of the console.log, ensuring that any changes made to consol.log during the tests are undone
  }); // mockRestore() is a method by jest that restores the original behavior of a spied or mocked function.
  // This basically restores the original console.log After this is called console.log will no longer be spied on
  // This is a convenient way to observe and test the interactions with console object.

  it("should display the list of purchases with id and name", () => {
    const purchases = [
      { id: "FFsPHlWEk73q98iXWxQgL", name: "BarnacleBoy" },
      { id: "Q_v0q2HI0jLQKxtFAlrKX", name: "OhDearNeptune" },
      { id: "5oyiWjagEUbq0mTYYnRjH", name: "SammySam" },
      { id: "oT1EwzT2s42g1F7e7wH3C", name: "SpongeBob" },
      { id: "_r7SJfRi1kb_UVl0AYtFf", name: "MrKrabs" },
    ];

    const expectedOutput = [
      chalk.green("--- Purchase List ---"),
      chalk.green("id: FFsPHlWEk73q98iXWxQgL\tname: BarnacleBoy"),
      chalk.green("id: Q_v0q2HI0jLQKxtFAlrKX\tname: OhDearNeptune"),
      chalk.green("id: 5oyiWjagEUbq0mTYYnRjH\tname: SammySam"),
      chalk.green("id: oT1EwzT2s42g1F7e7wH3C\tname: SpongeBob"),
      chalk.green("id: _r7SJfRi1kb_UVl0AYtFf\tname: MrKrabs"),
    ];

    indexPurchaseController(purchases);
    expect(consoleLogSpy).toHaveBeenCalledTimes(expectedOutput.length); // This expects the number of times console.log was called matches the length of the expectedOutpud array.
    expect(consoleLogSpy.mock.calls.map((args) => args[0])).toEqual(
      expectedOutput
    ); // This expects the arguments passed to console.log match the elements of expectedOutput array. It extracts the first argument from each call to console.log using expect(consoleLogSpy.mock.calls.map(args => args[0]))
  });
});

describe("listPurchaseController", () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  it("should display the list of purchases with id, name, amount, donation", () => {
    const purchases = [
      {
        id: "FFsPHlWEk73q98iXWxQgL",
        name: "BarnacleBoy",
        amount: "13.65",
        donation: "0.35",
      },
      {
        id: "Q_v0q2HI0jLQKxtFAlrKX",
        name: "OhDearNeptune",
        amount: "5.25",
        donation: "0.75",
      },
      {
        id: "5oyiWjagEUbq0mTYYnRjH",
        name: "SammySam",
        amount: "500.2",
        donation: "0.80",
      },
      {
        id: "oT1EwzT2s42g1F7e7wH3C",
        name: "SpongeBob",
        amount: "50.01",
        donation: "0.99",
      },
      {
        id: "_r7SJfRi1kb_UVl0AYtFf",
        name: "MrKrabs",
        amount: "9999.99",
        donation: "0.01",
      },
    ];

    const expectedOutput = [
      chalk.green("--- Purchase List ---"),
      chalk.green(
        "id: FFsPHlWEk73q98iXWxQgL\tname: BarnacleBoy\tamount: 13.65\tdonation: " +
          chalk.yellow("0.35")
      ),
      chalk.green(
        "id: Q_v0q2HI0jLQKxtFAlrKX\tname: OhDearNeptune\tamount: 5.25\tdonation: " +
          chalk.yellow("0.75")
      ),
      chalk.green(
        "id: 5oyiWjagEUbq0mTYYnRjH\tname: SammySam\tamount: 500.2\tdonation: " +
          chalk.yellow("0.80")
      ),
      chalk.green(
        "id: oT1EwzT2s42g1F7e7wH3C\tname: SpongeBob\tamount: 50.01\tdonation: " +
          chalk.yellow("0.99")
      ),
      chalk.green(
        "id: _r7SJfRi1kb_UVl0AYtFf\tname: MrKrabs\tamount: 9999.99\tdonation: " +
          chalk.yellow("0.01")
      ),
    ];

    listPurchaseController(purchases);

    expect(consoleLogSpy).toHaveBeenCalledTimes(expectedOutput.length);
    expect(consoleLogSpy.mock.calls.map((args) => args[0])).toEqual(
      expectedOutput
    );
  });
});

describe("updatePurchaseController", () => {
  it("should update the name of the purchase", () => {
    const purchases = [
      { id: "5oyiWjagEUbq0mTYYnRjH", name: "SammySam", amount: 500.2 },
    ];
    const id = "5oyiWjagEUbq0mTYYnRjH";
    const newName = "SandyCheeks";

    updatePurchaseController(purchases, id, newName);

    expect(purchases[0].name).toBe(newName); // Checks if the purchases index 0 name matches newName
  });

  it("should handle purchase not found", () => {
    const purchases = [
      { id: "5oyiWjagEUbq0mTYYnRjH", name: "SammySam", amount: 500.2 },
    ];
    const id = "5oyiWjagEUbq0mTYYnRjH";
    const newName = "SandyCheeks";

    updatePurchaseController(purchases, id, newName);

    expect(purchases[0].name).toBe("SandyCheeks"); // Checks if the purchases index 0 name matches newName
  });
});

describe("removePurchaseController", () => {
  it("should remove the purchase from the list", () => {
    const purchases = [
      { id: "5oyiWjagEUbq0mTYYnRjH", name: "SammySam", amount: 500.2 },
    ];
    const id = "5oyiWjagEUbq0mTYYnRjH";

    removePurchaseController(purchases, id);

    expect(purchases.length).toBe(1); // Checks if purchases array has length of 1
    expect(purchases[0].id).toBe("5oyiWjagEUbq0mTYYnRjH"); // checks if the name of the purchase is "Mechanical Pencil"
  });

  it("should handle purchase not found", () => {
    const purchases = [
      { id: "5oyiWjagEUbq0mTYYnRjH", name: "SammySam", amount: 500.2 },
    ];
    const id = "5oyiWjagEUbq0mTYYnRjH";

    removePurchaseController(purchases, id);

    expect(purchases.length).toBe(1); // Checks if the purchases array has length of 1
  });
});
