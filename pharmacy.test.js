import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy - Generic Drug", () => {
  it("should decrease its benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Generic Drug", 10, 7)]).updateBenefitValue()
    ).toEqual([new Drug("Generic Drug", 9, 6)]);
  });

  it("once the expiration date has passed, Benefit degrades twice as fast", () => {
    expect(
      new Pharmacy([new Drug("Generic Drug", 0, 7)]).updateBenefitValue()
    ).toEqual([new Drug("Generic Drug", -1, 5)]);
    expect(
      new Pharmacy([new Drug("Generic Drug", -2, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Generic Drug", -3, 0)]);
  });

  it("the Benefit of an item is never negative", () => {
    expect(
      new Pharmacy([new Drug("Generic Drug", 10, 0)]).updateBenefitValue()
    ).toEqual([new Drug("Generic Drug", 9, 0)]);
    expect(
      new Pharmacy([new Drug("Generic Drug", 0, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Generic Drug", -1, 0)]);
  });
});

describe("Pharmacy - Herbal Tea", () => {
  it("'Herbal Tea' actually increases in Benefit the older it gets", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 10, 7)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 9, 8)]);
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 4)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 6)]);
  });

  it("the Benefit of an item is never more than 50", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 10, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 9, 50)]);
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 50)]);
  });
});

describe("Pharmacy - Magic Pill", () => {
  it("'Magic Pill' never expires nor decreases in Benefit", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 10, 7)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 10, 7)]);
    expect(
      new Pharmacy([new Drug("Magic Pill", -1, 4)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", -1, 4)]);
  });
});

describe("Pharmacy - Fervex", () => {
  it("'Fervex' actually increases in Benefit the older it gets", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 20, 7)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 19, 8)]);
  });

  it("the Benefit increases by 2 when there are 10 days or less", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 10, 13)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 9, 15)]);
  });

  it("the Benefit increases by 3 when there are 5 days or less", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 3, 5)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 2, 8)]);
  });

  it("the Benefit drops to 0 after the expiration date", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });

  it("the Benefit of an item is never more than 50", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 20, 49)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 19, 50)]);
    expect(
      new Pharmacy([new Drug("Fervex", 9, 49)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 8, 50)]);
    expect(
      new Pharmacy([new Drug("Fervex", 3, 49)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 2, 50)]);
  });
});

describe("Pharmacy - Dafalgan", () => {
  it("degrades in Benefit twice as fast as normal drugs", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 10, 7)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 9, 5)]);
  });

  it("once the expiration date has passed, Benefit degrades twice as fast", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 0, 7)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -1, 3)]);
    expect(
      new Pharmacy([new Drug("Dafalgan", -2, 12)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -3, 8)]);
  });

  it("the Benefit of an item is never negative", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 10, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 9, 0)]);
    expect(
      new Pharmacy([new Drug("Dafalgan", 0, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -1, 0)]);
  });
});
