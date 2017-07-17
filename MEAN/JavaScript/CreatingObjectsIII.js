/* Vehicle Constructor declares an initial variable, vehicle, as an object.
private properties that cannot be changed outside of the Constructor:
distance_travelled
public properties that can be set:
name, wheels, num_passengers
public method:
makeNoise
returns vehicle.
*/
class Vehicle {
  VehicleConstructor(name, wheels, num_passengers, speed) {
    if (!(this instanceof VehicleConstructor)){
    return new VehicleConstructor(name,wheels,passengerNumber, speed);
  }
      /*
      Private Properties
      */
      var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      /*
      Public Properties
      */
      this.distance_travelled = 0;
      this.name = name;
      this.wheels = wheels;
      this.passengers = num_passengers;
      this.speed = speed;
      this.vin = createVIN();

      function createVIN() {
        var vin = '';
        for (var i = 0; i < 17; i++) {
          vin += chars[Math.floor(Math.random()*35)]
        }
      }
    /*
    return
    */
  }
}
//instance method
Vehicle.prototype.updateDistanceTravelled = function () {
  this.distance_travelled += this.speed;
  console.log(this.distanceTraveled);
  return this;
}
//instance method
Vehicle.prototype.move = function () {
  updateDistanceTravelled();
  this.makeNoise();
  return this;
}
//instance method
Vehicle.prototype.makeNoise = function (noise) {
  var noise = noise || 'Honk Honk';
  console.log(noise);
  return this;
};

//instance method
Vehicle.prototype.checkMiles = function () {
  console.log(distance_travelled);
  return this;
}

var bike = new VehicleConstructor('schwinn', 2, 1)
bike.makeNoise = function () {
  console.log('ring ring');
  return this;
}

var sedan = new VehicleConstructor('sedan', 4, 4)
sedan.makeNoise = function () {
  console.log("Honk Honk");
  return this;
}

var bus = new VehicleConstructor('magic school bus', 4, 18)
bus.pickupPassenger = function (newPassengers) {
  this.passengers += newPassengers;
  return this;
}
