function Car() {
     
        this.name = "Car";
        this.wheels = 4;
    
     this.turnOn = () => console.log("Chacabúm!!");
}

function Truck() {
        this.name = "Truck";
        this.wheels = 8;
    
    this.turnOn = () => console.log("RRRRRRRRUUUUUUUUUMMMMMMMMMM!!");
}

 function Motorcycle() {
    
        this.name = "Motorcycle";
        this.wheels = 2;
    
    this.turnOn = () => console.log("sssssssssssssssssssssssssssssshhhhhhhhhhham!!");
}

function createstore(items) {
    return {
      items, 
     
      add() {
        console.log("New item Added");
      }
    }
  }
// And and abstract factory that works as a single point of interaction for our clients
// Given the type parameter it receives, it will call the corresponding concrete factory
const vehicleFactory = {
    createVehicle: function (type) {
        switch (type) {
            case "car":
                return new Car()
            case "truck":
                return new Truck()
            case "motorcycle":
                return new Motorcycle()

            case "store":
                return createstore("notebook");    
            default:
                return null
        }
    }
}

const car = vehicleFactory.createVehicle("car") // Car { turnOn: [Function: turnOn], name: 'Car', wheels: 4 }
const truck = vehicleFactory.createVehicle("truck") // Truck { turnOn: [Function: turnOn], name: 'Truck', wheels: 8 }
const motorcycle = vehicleFactory.createVehicle("motorcycle") // Motorcycle { turnOn: [Function: turnOn], name: 'Motorcycle', wheels: 2 }
const store2 = createstore("notebook")

//console.log(car);
//console.log(truck);
//console.log(motorcycle);
//console.log(store2);


