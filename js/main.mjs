// function sayDont() {
//   alert("Dont Click Here!");
// }

// import { robot } from "";

// function initBtnIndex() {
//   const btn1 = document.getElementById("btnOnIndex");
//   const elemRobot = document.getElementById("robot");
//   const robot = new Robot();
//   btn1.addEventListener("click", sayDont);
// }

// initBtnIndex();
// const regPers = {
//   name: "Dmitriy",
//   age: 31,
//   color: "red",
//   sex: "m",
//   regStatus: "finished",
// };
// const emRegPers = {
//   eMail: "mwpofwe@gmail.com",
//   number: 375445692848,
// };

// const fullPerson = {
//   ...emRegPers,
//   ...regPers,
// };
// console.log("firstObject:", regPers);
// console.log("secondObjext:", emRegPers);
// console.table(fullPerson);

// const hello = "Hello, Dear, ";
// setTimeout(function () {
//   console.log(
//     hello +
//       "I'm " +
//       regPers.age +
//       " " +
//       "and my name is" +
//       " " +
//       regPers.name +
//       "!"
//   );
// }, 1500);
// setTimeout(() => {
//   console.table(emRegPers);
// }, 3000);

// function subtraction(value1, value2 = 1) {
//   let valueSub;
//   valueSub = value1 - value2;
//   return valueSub;
// }

// console.log(subtraction(5, 2));
// console.log(subtraction(5));

// const subTr = (v1, v2 = 1) => {
//   let v3;
//   v3 = v1 - v2;
//   return v3;
// };

// console.log(subTr(5, 5));
// console.log(subTr(7));

// const sS = function (v1, v2 = 2) {
//   let v3;
//   v3 = v1 - v2;
//   return v3;
// };

// console.log(sS(7, 3));
// console.log(sS(7));
// console.log(Date());

// const persona = {
//   name: "Dm",
//   age: 22,
//   status: true,
// };

// const resFn = function newPers(val1) {
//   const newVal = Object.assign({}, val1);
//   newVal.addAt = Date();
//   return newVal;
// };

// console.table(persona);
// console.table(resFn(persona));
// console.table(persona);

// const fnWithError = () => {
//   throw new Error("some err");
// };

// try {
//   fnWithError();
// } catch (error) {
//   console.error(error);
//   console.log(error.message);
// }

// console.log("continue");

// const myArray = [1, 4, "podsaw"];
// console.log(myArray);
// const myArray2 = new Array(1, 2, 3, true);
// console.table(myArray2);

// const myArray = [1, 4, 67, "Dm", true];
// console.log(myArray);
// myArray.forEach((el) => console.log("elem: " + el * 2));
// console.log(myArray);
// console.log(myArray[3], myArray[1]);

// const myArray = [1, 3, "Dm", false];
// console.log(myArray);
// const newArray = myArray.map((el) => el * 3);
// const scndArray = myArray.map(function (el) {
//   return el * 4;
// });
// console.log(myArray);
// console.log(scndArray);
// console.log(newArray);

// const myObject = {
//   name: "Dm",
//   age: 22,
//   logIn: true,
// };

// const { name, age } = myObject;
// const { logIn } = myObject;

// console.log(name);
// console.log(age);
// console.log(logIn);
// console.log(myObject);

// const myArr = ["Apples", 23, true, null];
// const [what, price, buy, empty] = myArr;
// console.log(myArr);
// console.log(what, empty, buy, price);

// const userProfile = {
//   name: "Dm",
//   likes: 23,
//   status: "online",
// };

// const userCheck = ({ name, likes }) => {
//   if (!likes) {
//     return `User ${name} has no likes`;
//   }
//   return `User ${name} has ${likes} likes`;
// };

// console.log(userCheck(userProfile));

// let value = false;
// value ? console.log(25) : console.log("no");

// const myString = "fgewf";
// const myArray = [true, "fq", 24, null];
// for (const key of myArray) {
//   console.log(key);
// }
// for (const i of myString) {
//   console.log(i);
// }

// const name = "Dm";
// const age = 24;

// const sum = (a, b) => a + b;
// export default sum;
// export { name, age };

// class Comment {
//   constructor(text) {
//     this.text = text;
//     this.votesQty = 0;
//   }

//   upvote() {
//     this.votesQty += 1;
//   }

//   static mergeComments(fst, sec) {
//     return `${fst} ${sec}`;
//   }
// }

// const myComment = new Comment("txt area");
// const scndComment = new Comment("shuba");
// const thrtComment = new Comment("pixel");

// myComment.upvote();
// scndComment.upvote();
// console.log(myComment.votesQty);
// console.log(Comment);
// console.log(myComment);
// console.log(scndComment.votesQty);
// console.log(thrtComment);

// scndComment.upvote();
// console.log(scndComment);
// console.log(scndComment.text);
// const newCom = Comment.mergeComments(myComment.text, scndComment.text);
// console.log(newCom);
// console.table(scndComment);

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.error(error));
