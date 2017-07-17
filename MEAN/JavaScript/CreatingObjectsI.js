/* Vehicle Constructor declares an initial variable, vehicle, as an object.
public properties that can be set:
name, wheels, num_passengers
public method:
makeNoise
returns vehicle.
*/

function VehicleConstructor(name, wheels, num_passengers) {
  var vehicle = {
    /*
    Properties
    */
    name,
    vehicle.wheels: wheels,
    vehicle.passengers: num_passengers,
    /*
    Methods
    */
    vehicle.makeNoise: function (noise) {
      var noise = noise || 'Honk Honk';
      console.log(noise);
      return this;
    },
  };
  /*
  return
  */
  return vehicle;
}

var bike = new VehicleConstructor('schwinn', 2, 1)
bike.makeNoise = function () {
  console.log('ring ring');
  return bike;
}

var sedan = new VehicleConstructor('sedan', 4, 4)
sedan.makeNoise = function () {
  console.log("Honk Honk");
  return sedan;
}

var bus = new VehicleConstructor('magic school bus', 4, 18)
bus.pickupPassenger = function (newPassengers) {
  this.passengers += newPassengers;
  return bus;
}
