const tellAJoke = function(){
    console.log("a man walked and fell")
}
tellAJoke()

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

const getInterest = function(money){
    return money * 0.2
}
const getDebt = function(money){
    let interest = getInterest(money)
    return money += interest
}
const borrowedMoney = 100
const debt = getDebt(borrowedMoney)
console.log(debt)

const person = {
    name: "Julius",
    speak: function(food){
        console.log("I like " + food +"!")
    }
}
console.log(person.name)
console.log(person.speak)
person.speak()
person.speak("cheese toast")