
// 2021.03.24
//#48-0 자바스크립트 객체지향 프로그래밍 이해하기 

// const teacherJay ={
//     name : '제이',
//     age :30,
//     teachJavaScript: function(student){
//         student.gainExp()
//     }
// }

// const studentBbo={
//     name:'뽀',
//     age:20,
//     exp:0,
//     gainExp:function(){
//         this.exp++;
//     }
// }
// console.log(studentBbo.exp);
// teacherJay.teachJavaScript(studentBbo);
// console.log(studentBbo.exp);


// //#48-1

// const studentProto={
//     gasinExp: function(){
//         this.exp++;
//     }
// }

// const harin ={
//     name:'하린',
//     age:10,
//     exp:0,
//     __proto__: studentProto // javascript에서는 __proto__ 속성으로 원형 객체를 정의할 수 있음, 모든 객체는 이 속성을 가지는데 별도로 다른객체를 할당하지 않으면
//     // 기본적으로 Object.prototype 객체가 연결되어 있음.
// };

// const bbo ={
//     name:'뽀',
//     age:20,
//     exp:10,
//     __proto__:studentProto

// };

// bbo.gasinExp();
// harin.gasinExp();
// harin.gasinExp();
// console.log(harin);
// console.log(bbo);


//49. 생성자 함수 
// new 하면 return 없어도 새로운 객체가 반환 됨 

//50. 프로토타입 기반 상속 이해하기 

function Storage(){
    this.dataStore= {};
} // 생성자 함수를 정의함 내부속성으로 dataStore 빈객체를 할당 

Storage.prototype.put = function(key,data){
    this.dataStore[key] = data;
}
Storage.prototype.getData = function(key){
    return this.dataStore[key];
}

const productStorage = new Storage();
productStorage.put('id001',{name:'키보드',price:2000});
console.log(productStorage.getData('id001'));

function RemovableStorage(){
    Storage.call(this);
}

RemovableStorage.prototype = Object.create(Storage.prototype);
RemovableStorage.prototype.removeAll = function(){
    this.dataStore={}
}

const productStorage2 = new RemovableStorage();
productStorage2.put('id001',{name:'키보드',price:2000});
productStorage2.removeAll();
const item2 = productStorage2.getDat('id001');
console.log(item2);