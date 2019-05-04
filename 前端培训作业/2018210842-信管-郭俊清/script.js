// 最简形态

// 介绍什么是对象，有什么用
// var doraA = new Object();
// doraA.head = true; // ...
// doraA.body = true; // ...
// doraA.left_hand = true;
// doraA.right_hand = true;
// doraA.left_leg = true;
// doraA.right_leg; true;

// show(doraA);

// var doraA = {
//     head: true,
//     body: true,
//     left_hand: true,
//     right_hand: true,
//     left_leg: true,
//     right_leg: true
// }

// show(doraA);

// 对类进行任意操作

// 类的数据的属性？

// configurable: true(在defineProperty时为false)
// var person = {};
// Object.defineProperty(person, "name", {
//     configurable: true,
//     value: "Him"
// })

// enumerable: true
// Object.defineProperties(person, {
//     name: {
//         enumerable: false
//     },
//     age: {
//         enumerable: false
//     },
//     job: {
//         enumerable: false
//     }
// })
// for (item in person) {
//     console.log(person[item]);
// }

// writable: true
// var person = {};
// Object.defineProperty(person, "name", {
//     writable: false,
//     value: "Him"
// })

// 访问器属性

// var book = {
//     _year: 2004,
//     edition: 1
// };

// Object.defineProperty(book, "year", {
//     get: function() {
//         return this._year;
//     }, 
//     set: function(newValue) {
//         if (newValue > 2004) {
//             this._year = newValue;
//             this.edition ++;
//         }
//     }
// })
// 只有get，不能修改值
// 只有set，不能获取值

// 创建对象

// 工厂模式

// function createPerson(name, age, job) {
//     var o = new Object();

//     o.name = name;
//     o.age = age;
//     o.job = job;
//     o.sayName = function() {
//         console.log(this.name);
//     }
//     return o;
// }
// var person_1 = createPerson('Him', 20, 'student');
// var doraA_1 = doraA(true, true, true);
// let a = {};
// console.log(a.constructor === Object);
// console.log(a.constructor === Array);


// console.log(person_1.constructor === Object); // true
// console.log(person_1.constructor === Person);

// 谁构造的它，它属于什么？

// 构造函数模式

// function DoraA(head, body, left_hand, right_hand, left_leg, right_leg) {
//     this.head = head;
//     this.body = body;
//     this.left_hand = left_hand;
//     this.right_hand = right_hand;
//     this.left_leg = left_leg;
//     this.right_leg = right_leg;
// }

// var doraA_1 = new DoraA(true, true, true, true, true, true);
// show(doraA_1);

// console.log(doraA_1.constructor === doraA);

// console.log(doraA_1 instanceof Object);
// console.log(doraA_1 instanceof doraA);

// 构造函数的问题

// 繁琐

// function doraA(name, head, body, left_hand, right_hand, left_leg, right_leg) {
//     this.head = head;
//     this.body = body;
//     this.left_hand = left_hand;
//     this.right_hand = right_hand;
//     this.left_leg = left_leg;
//     this.right_leg = right_leg;
//     this.sayName = function() {
//         console.log('I am ' + name + '!');
//     }
// }
// var doraA_1 = new doraA("doraA" ,true, true, true, true, true, true);
// var doraA_2 = new doraA("doraB" ,true, true, true, true, true, true);
// show(doraA_1);

// console.log(doraA_1.sayName == doraA_2.sayName); // false

// 原型模式

// function doraA(name) {
//     this.name = name;
// }
// doraA.prototype.head = true;
// doraA.prototype.body = true;
// doraA.prototype.left_hand = true;
// doraA.prototype.right_hand = true;
// doraA.prototype.left_leg = true;
// doraA.prototype.right_leg = true;
// doraA.prototype.sayName = function() {
//     console.log('I am ' + this.name + '!');
// }

// var doraA_1 = new doraA("doraA");
// var doraA_2 = new doraA("doraB");

// show(doraA_1);
// show(doraA_2);
// console.log(doraA_1.sayName === doraA_2.sayName) // true

// prototype和实例对象的关系？

// function doraA(name) {
//     if (name) {
//         this.name = name;
//     }
// }
// doraA.prototype.name = "doraA";
// doraA.prototype.head = true;
// doraA.prototype.body = true;
// doraA.prototype.left_hand = true;
// doraA.prototype.right_hand = true;
// doraA.prototype.left_leg = true;
// doraA.prototype.right_leg = true;
// doraA.prototype.sayName = function() {
//     console.log('I am ' + this.name + '!');
// }

// var doraA_1 = new doraA();

// console.log(doraA_1.constructor);

// var doraA_1 = new doraA();
// console.log(doraA_1);
// show(doraA_1);

// var doraA_2 = new doraA('doraB');
// show(doraA_2);

// // 如何检测？
// console.log(doraA_1.hasOwnProperty('name')); // false
// console.log(doraA_2.hasOwnProperty('name')); // true

// 更简单的原型语法

// function doraA() {}
// doraA.prototype = {
//     name: "doraA",
//     head: true,
//     body: true,
//     left_hand: true,
//     right_hand: true,
//     left_leg: true,
//     right_leg: true,
//     sayname: function() {
//         console.log('I am ' + this.name + '!');
//     }
// }
// var doraA_1 = new doraA();
// console.log(doraA_1.constructor);
// show(doraA_1);

// constructor指向问题

// function doraA() {}
// doraA.prototype = {
//     constructor: doraA,
//     // ...
// }

// var doraA_1 = new doraA();
// console.log(doraA_1.constructor);
// show(doraA_1);

// 原型的动态性

// function doraA() {}
// doraA.prototype = {
//     constructor: doraA,
//     name: "doraA",
//     head: true,
//     body: true,
//     left_hand: true,
//     right_hand: true,
//     left_leg: true,
//     right_leg: true,
//     sayname: function() {
//         console.log('I am ' + this.name + '!');
//     }
// }
// var doraA_1 = new doraA();
// show(doraA_1);
// doraA_1.sayHi();

// doraA.prototype.sayHi = function() {
//     console.log('Hi');
// }

// 原型对象的问题

// function doraA() {}
// doraA.prototype = {
//     constructor: doraA,
//     name: "doraA",
//     head: true,
//     body: true,
//     left_hand: true,
//     right_hand: true,
//     left_leg: true,
//     right_leg: true,
//     friends: ['nobi', 'shizuka', 'suneo', 'takeshi'],
//     sayname: function() {
//         console.log('I am ' + this.name + '!');
//     }
// }

// var doraA_1 = new doraA();
// var doraA_2 = new doraA();

// console.log(doraA_1.friends);
// console.log(doraA_2.friends);

// doraA_1.friends.pop();

// console.log(doraA_1.friends);
// console.log(doraA_2.friends);

// 结合写法

// function doraA(name) {
//     if (name) {
//         this.name = name;
//     }

//     this.friends = ['nobi', 'shizuka', 'suneo', 'takeshi']
// }

// doraA.prototype = {
//     constructor: doraA,
//     name: "doraA",
//     head: true,
//     body: true,
//     left_hand: true,
//     right_hand: true,
//     left_leg: true,
//     right_leg: true,
//     sayname: function() {
//         console.log('I am ' + this.name + '!');
//     }
// }
// var doraA_1 = new doraA();
// var doraA_2 = new doraA();
// show(doraA_1);
// show(doraA_2);

// doraA_1.friends.pop();

// // 显示正常
// console.log(doraA_1.friends);
// console.log(doraA_2.friends);

// 保密性？

// function doraA(name) {
//     if (name) {
//         this.name = name;
//     }

//     this.friends = ['nobi', 'shizuka', 'suneo', 'takeshi']
// }
// doraA.prototype = {
//     name: "doraA",
//     head: true,
//     body: true,
//     left_hand: true,
//     right_hand: true,
//     left_leg: true,
//     right_leg: true,
//     sayName: function() {
//         console.log('I am ' + this.name + '!');
//     }
// }

// var doraA_1 = new doraA();

// console.log(doraA_1.name);
// doraA_1.name = '123';
// console.log(doraA_1.name);

// doraA_1.name = "doraB";
// doraA_1.sayName = function() {
//     console.log('I am stupid');
// }

// show(doraA_1);

// console.log(doraA_1.name);
// doraA_1.sayName();

// 私有函数，私有变量

// function doraA(name) {
//     var myName = name;
//     var sayName = function() {
//         console.log('I am ' + myName + '!');
//     }

//     // 通过 特权函数 访问私有变量
//     t
//     this.say his.getName = function() {
//         console.log(myName);
//     }= function() {
//         sayName();
//     }

//     this.friends = ['nobi', 'shizuka']
// }
// doraA.prototype = {
//     constructor: doraA,
//     head: true,
//     body: true,
//     left_hand: true,
//     right_hand: true,
//     left_leg: true,
//     right_leg: true,
// }

// var doraA_1 = new doraA('doraB');
// show(doraA_1);

// 继承

// 在新的原型的prototype上创建一个实例

// function doraA(name) {
//     var myName = name;
//     var sayName = function() {
//         console.log('I am ' + myName + '!');
//     }

//     // 通过 特权函数 访问私有变量
//     this.getName = function() {
//         console.log(myName);
//     }
//     this.say = function() {
//         sayName();
//     }

//     this.friends = ['nobi', 'shizuka']
// }
// doraA.prototype = {
//     constructor: doraA,
//     head: true,
//     body: true,
//     left_hand: true,
//     right_hand: true,
//     left_leg: true,
//     right_leg: true,
// }

// function doraB(){}
// doraB.prototype = new doraA('doraB');
// var doraB_1 = new doraB();

// show(doraB_1);
// console.log(doraB);
// console.log(doraB.prototype.__proto__);