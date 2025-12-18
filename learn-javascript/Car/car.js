class NewVehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    console.log("Beep");
  }
  toString() {
    return `The vehicle is a ${this.make}, ${this.model} from ${this.year}.`;
  }
}
const car = new NewVehicle("Chevy", "Tahoe", 2025);
console.log(car.toString());

class Car extends NewVehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}
const myNewCar = new Car("Cadillac", "Escalade", 2026);
console.log(myNewCar.toString());
console.log(myNewCar.honk());
console.log(myNewCar.numWheels);

class Motorcycle extends NewVehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    return "VROOOM!!!";
  }
}

const myFirstMotorcycle = new Motorcycle("Suzuki", "GSXR-600", 2012);
console.log(myFirstMotorcycle.toString());
myFirstMotorcycle.honk();
console.log(myFirstMotorcycle.revEngine());
console.log(myFirstMotorcycle.numWheels);

class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }
  add(vehicle) {
    if (!(vehicle instanceof NewVehicle)) {
      return "Only vehicles are allowed in here!";
    }
    if (this.vehicles.length >= this.capacity) {
      return "Sorry, we're full.";
    }
    this.vehicles.push(vehicle);
    return "Vehicle added!";
  }
}

const garage = new Garage(2);

const ride = new Car("Cadillac", "Escalade", 2026);
const bike = new Motorcycle("Suzuki", "GSXR-600", 2026);

console.log(garage.add(ride));
console.log(garage.add(bike));
console.log(garage.add(myFirstMotorcycle));
console.log(garage.add("boat"));
console.log(garage);
