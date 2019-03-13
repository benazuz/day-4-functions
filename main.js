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
const isEven = function(number){
    let modul = number % 2
    if(modul == 0){
        console.log("the number is even")
    }else{
        console.log("the number is uneven")
    }
}

isEven(99)
let numbers = [0, 1, 2, 3, 4, 5]
const areNumbersEven = function(numbers){
    for(number in numbers){
        isEven(number)
    }
}

areNumbersEven(numbers)

const isThere = function(numbers, number){
    for(let i of numbers){
        if(i === number){
            console.log("The number is there")
            return true
        }
    }
    console.log("the number does not exist")
    return false
}

isThere(numbers, 7)

const add = function(a, b){
    return a + b
}

const subtract = function(a, b){
    return a - b
}

const calculator = {add, subtract}
const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)
console.log(calculator.add(result1, result2))

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins.")
}

const increaseByNameLength = function(money, name){
    let length = name.length
    money *= length
    return money
}

const makeRegal = function(name){
    name = "His Royal Highness " + name
    return name
}

turnToKing("martin luther", 100)

//Scopes
const isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...")
}