// function factorial(n){
//     if(n == 0){
//         return 1;
//     }
//     return n * factorial(n - 1);
// }
// console.log(factorial(5))


// let car = {
//     name: "Matiz",
//     year: 2015,
//     weight: 1210,
//     color:'black'
// }
// let test = Object.keys(car)
// let test = Object.values(car)
// let test = Object.entries(car)
// let test = Object.freeze(car)
// console.log(test)


// let fruits = ['olma', 'banan', 'apelsin', 'mandarin'];
// let result = JSON.stringify(fruits);
// let jsonData = '["olma", "banan", "apelsin", "mandarin"]';
// let res1 = JSON.parse(jsonData)
// console.log(res1)


// masalalar
// 1
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
// ];
// function studentsAbout(arr){
//     return students.map(students => {
//         return{name: students.name, age: students.age}
//     });
// }
// console.log(studentsAbout());

// 2
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
// function studentScore(arr){
//     return arr.find(function(){
//         // if(arr.score =>)
//     })
// }
// console.log(studentScore())

// 3

//  const students = [
//      { name: 'Alice', age: 20, score: 85},
//      { name: 'Bob', age: 22, score: 92},
//      { name: 'Andrew', age: 23, score: 88 }
//  ];
//  let result = students.map(function(value){
//      if(value.name.length >= 'A'){
//          value.status = "active"
//      }else{
//          value.status = "inactive"
//      }
//      return value;
//  })
//  console.log(result);

// 5
// const students = [
//     { name: 'Alice', age: 20, score: 85},
//     { name: 'John', age: 22, score: 92},
//     { name: 'Bob', age: 23, score: 88}
// ];
// let result = students.find(function(value){
//     if(value.name >= "John"){
//         console.log(students(value))
//     }
//     return value;
// })
// console.log(result)

// 6

// const students = [
//     { name: 'Alice', age: 20, score: 80, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 85, status: 'active' }
//   ];
// let result = students.find(function(value){
//     if(value.score > 85){
//         console.log(value.score.indexOf);
//     }
//     return students;
// })
// console.log(value.indexOf())
// 7
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
//   let activeObj = [];
//   let inActiveObj = [];
//     students.forEach(obj =>{
//     if(obj.status === 'active'){
//         activeObj.push(obj)
//     }else if(obj.status === 'inactive'){
//         inActiveObj.push(obj)
//     }
//   })
//   console.log(activeObj);
//   console.log(inActiveObj)

// 8
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 17, score: 88, status: 'active' }
//   ];
// let result = students.filter(function(value){
//     if(value.age > 18){
//         value.high = 'Katta'
//     }else{
//         value.high = 'Kichkina'
//     }
//     return value;
// })
// console.log(result)

// 9
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
// let result = students.map(function(value){
//     if(value.score > 90){
//         value.high = 'Toplagan'
//     }else{
//         value.high = 'Toplay olmagan'
//     }
//     return value;
// })
// console.log(result)
// 10
// const students1 = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
//   const students2 = [
//     { name: 'Charlie', age: 23, score: 88, status: 'active' },
//     { name: 'David', age: 21, score: 90, status: 'inactive' }
// ];
// const students3 = students1.concat(students2)
// console.log(students3)

// 12
// const students = [
//     { name: 'alice', age: 20, score: 85, status: 'active' },
//     { name: 'bob', age: 22, score: 92, status: 'inactive' }
//   ];
//   function upperCaseArr(arr){
//     for(obj of students){
//         obj.name.toUpperCase()
//     }
//     return students;
//   }
// console.log(upperCaseArr())

// 13
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
//   let result = students.map(function(value){
//     return value.score
//   })
//   console.log(result)

// 14
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' }
//   ];
//   for(let obj of students){
//     const keys = Object.keys(obj)
//     console.log(keys)
//   }

// 15
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
// function Students(name, age, score, status){
//     this.name = name;
//     this.age = age;
//     this.score = score;
//     this.status = status;
// }
// let charlie = new Students('Charlie', 23, 88, 'active')
// console.log(charlie);

// 16

// 17
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 19, score: 88, status: 'active' }
//   ];
//   let result = students.map(function(value) {
//     if(value.age >= 20){
//         value.high = 'Katta'
//     }else{
//         value.high = 'Kichik'
//     }
//     return value;
//   })
//   console.log(result)


// 18
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
//   for(let obj of students){
//     const values = Object.values(obj)
//     console.log(values)
//   }

// 20

