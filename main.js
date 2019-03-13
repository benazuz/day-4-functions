// const tellAJoke = function(){
//     console.log("a man walked and fell")
// }
// tellAJoke()

// const greet = function(name){
//     console.log("Hello " + name)
// }
// greet("Ben")
// let myName = "Ben10"
// greet(myName)

// workers = ["John", "Marta", "Samuel", "Don", "Rachel", "Bruce"]
// for(name of workers){
//     greet(name)
// }

// const greet = function(name, timeInDay){
//     if(timeInDay == 1){
//         console.log("Good morning " + name + "!")
//     }
//     else if(timeInDay == 2){
//         console.log("Good afternoon " + name + "!")
//     }
//     else if(timeInDay == 3){

//         console.log("Good evening " + name + "!")
//     }
//     else{
//         console.log("Hello " + name + "!")
//     }
// }
// greet("Ben", 3)

// const createUser = function(name, age){
//     let user = {name: name, age: age}
//     console.log(user)
// }
// createUser("Ben", 25)

// const growOld = function(user){
//     user.age++
//     console.log(user)
// }
// const aDude = {name: "john", age: 25}
// growOld(aDude)

// const greet = function(name){
//     console.log("Hello " + name)
// }
// const growOld = function(user){
//     user.age++
// }
// greet()
// growOld()

// const getInterest = function(money){
//     return money * 0.2
// }
// const getDebt = function(money){
//     let interest = getInterest(money)
//     return money += interest
// }
// const borrowedMoney = 100
// const debt = getDebt(borrowedMoney)
// console.log(debt)

// const person = {
//     name: "Julius",
//     speak: function(food){
//         console.log("I like " + food +"!")
//     }
// }
// console.log(person.name)
// console.log(person.speak)
// person.speak()
// person.speak("cheese toast")

// const calcAge = function(currentYear, birthYear){
//     currentYear - birthYear
//     let age1 = currentYear
//     let age2 = currentyear - 1
//     console.log("you are either " + age1 + " or " + age2)
// }
// const age = calcAge(2017, 1989)

//exercise 3
// const isEven = function(number){
//     let modul = number % 2
//     if(modul == 0){
//         console.log("the number is even")
//     }else{
//         console.log("the number is uneven")
//     }
// }

// isEven(99)
// let numbers = [0, 1, 2, 3, 4, 5]
// const areNumbersEven = function(numbers){
//     for(number in numbers){
//         isEven(number)
//     }
// }

// areNumbersEven(numbers)

// const isThere = function(numbers, number){
//     for(let i of numbers){
//         if(i === number){
//             console.log("The number is there")
//             return true
//         }
//     }
//     console.log("the number does not exist")
//     return false
// }

// isThere(numbers, 7)

// const add = function(a, b){
//     return a + b
// }

// const subtract = function(a, b){
//     return a - b
// }

// const calculator = {add, subtract}
// const result1 = calculator.add(20, 1)
// const result2 = calculator.subtract(30, 9)
// console.log(calculator.add(result1, result2))

// const turnToKing = function(name, money){
//     name = name.toUpperCase()
//     money = increaseByNameLength(money, name)
//     name = makeRegal(name)

//     console.log(name + " has " + money + " gold coins.")
// }

// const increaseByNameLength = function(money, name){
//     let length = name.length
//     money *= length
//     return money
// }

// const makeRegal = function(name){
//     name = "His Royal Highness " + name
//     return name
// }

// turnToKing("martin luther", 100)

// //Scopes
// const isEnough = false

// const makeEnough = function () {
//     for (let i = 0; i < 10; i++) {
//         if (i > 5) {
//             isEnough = true
//         }
//     }
// }

// makeEnough()
// if (isEnough) {
//     console.log("Finally, sheesh")
// }
// else {
//     console.log("Here we go again...")
// }

//js This
//exercise 0
// const counter = {
//     count: 0,

//     updateCounter: function () {
//       this.count += 1;
//     }
//   };

//   counter.updateCounter();
//   counter.updateCounter();
//   counter.updateCounter();

//   alert(counter.count);
//exercise 1
//   const person = {
//     hungry: true,

//     feed: function () {
//       if (this.hungry) {
//         hungry = false;
//         alert('Im no longer hungry!')
//       }
//     }
//   }

// //   person.feed() //should alert "I'm no longer hungry"

// //exercise 2

//   const pump = function (amount) {
//     this.liters += amount
//     console.log('You put ' + amount + ' liters in ' + this.name);

//   };

//   const garage = {
//     car1: {
//       name: 'Audi',
//       liters: 3,
//       fillTank: pump
//     },
//     car2: {
//       name: 'Mercedes',
//       liters: 1,
//       fillTank: pump
//     }
//   };

//   garage.car1.fillTank(2);
//   console.log('Audi should have 5 liters: ',  garage.car1.liters);

//   garage.car2.fillTank(30);
//   console.log('Mercedes should have 31 liters: ', garage.car2.liters);

//   //exercise 4
//   const tipJar = {
//     coinCount: 20,
//     tip: function () {
//       this.coinCount += 1;
//     },
//     stealCoins: function(number){
//         return this.coinCount -= number
//     }
//   };

//   tipJar.tip();
//   console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

//   tipJar.stealCoins(3);
//   console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

//   tipJar.stealCoins(10);
//   console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);

//   //exersice 5
//   const revealSecret = function () {
//     return this.secret;
//   };

//   const shoutIt = function (person, func) {
//     person.revealItAll = func;
//     const result = person.revealItAll();
//     alert(person.name + " said: " + result);
//   };

//   const avi = {
//     name: "Avi",
//     secret: "Im scared of snakes!",
//   };

//   const narkis = {
//     name: "Narkis",
//     secret: "I dont have secrets because I'm zen like that."
//   };

//   shoutIt(avi, revealSecret);
//   shoutIt(narkis, revealSecret);

//exercise 6

// const makeObjectArray = function (object) {
//     return Object.keys(object)
// }
// const coffeeShop = {
//     beans: 40,

//     drinkRequirements: {
//         latte: 10,
//         americano: 5,
//         doubleShot: 15,
//         frenchPress: 12,
//     },

//     makeDrink: function (drinkType) {
//         //   let drinks = Object.keys(this.drinkRequirements);
//         if (this.drinkRequirements[drinkType]) {
//             if (this.beans > 0) {
//                 if (this.beans >= this.drinkRequirements[drinkType]) {
//                     this.beans -= this.drinkRequirements[drinkType]
//                     console.log("Enjoy your " + drinkType + "!")
//                     console.log("There are only " + this.beans + " beans left.")
//                 }else{
//                     alert("ALL OUT OF BEANS!")
//                 }
//             }else{
//                 console.log("Im sorry we dont have enough beans to make " + drinkType + " at the moment.")
//             }
//         }else{
//             console.log("Im sorry we dont make " + drinkType + " coffee right now")
//         }
//     }
// }

// coffeeShop.makeDrink("latte");
// coffeeShop.makeDrink("americano");
// coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
// coffeeShop.makeDrink("doubleShot");
// coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"

//exercise 3
const pumpFuel = function (plane) {
    plane.fuel += 1;
  };
  
  const airplane = {
    fly: function () {
      if (this.fuel < 2) {
        return 'on the ground!';
      }
      else {
        return 'flying!';
      }
    },
    fuel: 0
  };
  
  console.log('The plane should not be able to fly (yet): ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('The plane should STILL not be able to fly: ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('Take off! ' + airplane.fly());