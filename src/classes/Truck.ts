// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle {
  // TODO: Declare properties of the Truck class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)

  // TODO: Create a constructor that accepts the properties of the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number,
  ) {
    super();

    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;
//use json stringify
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels=wheels;
    }
  }
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Truck class
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not

  // TODO: Implement the tow method from the AbleToTow interface
  
  tow(vehicle: Truck | Motorbike | Car): void {
    if (this.make === null || this.model === null) {
      return;
    } else if (vehicle.weight <= this.towingCapacity) {
      console.log('The vehicle is being towed')
    } else {
      console.log('The vehicle is too heavy to be towed')
    }
  }
    // TODO: Get the make an model of the vehicle if it exists
    // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
    // TODO: If it is, log that the vehicle is being towed
    // TODO: If it is not, log that the vehicle is too heavy to be towed
  

  // TODO: Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails();
    console.log(`The VIN of the truck is ${this.vin}`)
    console.log(`The make of the truck is ${this.make}`)
    console.log(`The model of the truck is ${this.model}`)
    console.log(`The year of the truck is ${this.year}`)
    console.log(`The weight of the truck is ${this.weight} pounds`)
    console.log(`The top speed of the truck is ${this.topSpeed}`)
    console.log(`The color of the truck is ${this.color}`)
    console.log(`The towing capacity of the truck is ${this.towingCapacity}`)
    console.log(`The wheels of the truck `,this.wheels)
  }
    // TODO: The method should call the printDetails method of the parent class
    // TODO: The method should log the details of the Truck
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
}

// Export the Truck class as the default export
export default Truck;
