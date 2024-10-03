// async function promiseDemo() {
//     let myPromise = new Promise(function (myResolve, myReject) {
//         let x = 2;

//         if (x == 0) {
//           myResolve("Okay");
//         } else {
//           myReject("Something went wrong");
//         }
//       });

//      let result = await myPromise
//         .then((data) => {
//           return data
//         })
//         .catch((err) => {
//           return err
//         });

//     console.log(result);
// }

// // Axios

// promiseDemo()

// Javascript ----> class

class Car {
  constructor(name, model, fuel, color) {
      (this.name = name),
      (this.model = model),
      (this.fuel = fuel),
      (this.color = color);
  }
}

const myCar = new Car("Volvo", 2015, "petrol", "red");

const sivaCar = new Car("BMW", 2021, "Disel", "Black");

const raviCar = new Car("Hyndai", 2024, "petrol", "white");

console.log(Car);

console.log(raviCar);
console.log(myCar);
console.log(sivaCar);