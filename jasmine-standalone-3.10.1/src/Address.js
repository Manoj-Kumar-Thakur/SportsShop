class Address {
  constructor(doorNo, street, area, city, state, pincode) {
    this.doorNo = doorNo;
    this.street = street;
    this.area = area;
    this.city = city;
    this.state = state;
    this.pincode = pincode;
  }
  setDoorNo(doorNo) {
    this.doorNo = doorNo;
  }
  setStreet(street) {
    this.street = street;
  }
  setArea(area) {
    this.area = area;
  }
  setCity(city) {
    this.city = city;
  }
  setState(state) {
    this.state = state;
  }
  setPincode(pincode) {
    this.pincode = pincode;
  }
  getDoorNo() {
    return this.doorNo;
  }
  getStreet() {
    return this.street;
  }
  getArea() {
    return this.area;
  }
  getCity() {
    return this.city;
  }
  getState() {
    return this.state;
  }
  getPincode() {
    return this.pincode;
  }
}
