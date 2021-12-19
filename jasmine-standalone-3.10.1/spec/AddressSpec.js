describe("Address test suite", () => {
  it("verify getDoorNo() method", () => {
    const address = new Address(
      "121",
      "nehru",
      "nehru chowk",
      "Pune",
      "Maharastra",
      767001
    );
    expect(address.getDoorNo()).toBe("121");
  });
  it("verify getStreet() method", () => {
    const address = new Address(
      "121",
      "nehru",
      "nehru chowk",
      "Pune",
      "Maharastra",
      767001
    );
    expect(address.getStreet()).toBe("nehru");
  });
  it("verify getArea() method", () => {
    const address = new Address(
      "121",
      "nehru",
      "nehru chowk",
      "Pune",
      "Maharastra",
      767001
    );
    expect(address.getArea()).toBe("nehru chowk");
  });
  it("verify getCity() method", () => {
    const address = new Address(
      "121",
      "nehru",
      "nehru chowk",
      "Pune",
      "Maharastra",
      767001
    );
    expect(address.getCity()).toBe("Pune");
  });
  it("verify getState() method", () => {
    const address = new Address(
      "121",
      "nehru",
      "nehru chowk",
      "Pune",
      "Maharastra",
      767001
    );
    expect(address.getState()).toBe("Maharastra");
  });
  it("verify getPincode() method", () => {
    const address = new Address(
      "121",
      "nehru",
      "nehru chowk",
      "Pune",
      "Maharastra",
      767001
    );
    expect(address.getPincode()).toBe(767001);
  });
});
