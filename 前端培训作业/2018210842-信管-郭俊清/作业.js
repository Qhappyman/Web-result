// 作业1
 var doraA = new Object();
doraA.head = true;
doraA.body = true;
doraA.left_hand = true;
doraA.right_hand = true;
doraA.left_leg = true;
doraA.right_leg = true;
show (doraA);

// function doraA(head,body,left_hand,right_hand,left_leg,right_leg)
// {
// 	var o = new Object;
// 	o.head = head;
//     o.body = body;
//     o.left_hand = left_hand;
//     o.right_hand = right_hand;
//     o.left_leg = left_leg;
//     o.right_leg = right_leg;
//     return o;
// }
// var doraA = doraA(true,true,true,true,true,true);
// show(doraA);

// function doraA(head,body,left_hand,right_hand,left_leg,right_leg){
// 	this.head = head;
//     this.body = body;
//     this.left_hand = left_hand;
//     this.right_hand = right_hand;
//     this.left_leg = left_leg;
//     this.right_leg = right_leg;
// }
// var doraA = new doraA(true,true,true,true,true,true);
// show(doraA);
// 作业2,3
// doraB.prototype = doraA;
// function doraB(myAge){
// 	this.myAge = myAge;
// };
// var doraB = new doraB(15);
//     doraB.sayName = function(){
//     	  console.log("I am doraA");
//     };       
//        doraB.getAge = function(){
//        console.log(doraB.myAge);
//     };
// show(doraB);
// 作业4
// var baby={
//        _age : 15
//    };
// Object.defineProperty(baby,'age',{
// 	get:function(){
// 		return this._age;
// 	},
// 	set:function(newAge){
//   		this._age = newAge;
// 		}	
// }
// );
// baby._age = 30;
// console.log(baby._age);







