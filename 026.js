// // 자료형 변환 이해하기 
// // 1. 명시적으로 자료형을 변환 
// // 2. 자바스크립트 엔진에 의해 자동으로 변환되는 방법(동적자료형언어이기떄문에 가능 )
// console.log("5"+1);
// console.log("There is "+5);
// console.log("Five"*2);

// var str = 5 +"1";
// console.log(str)
// console.log(typeof str);

// console.log("5"*"2");
// console.log("5"+"2");

// var num = +str;
// // console.log(num);
// str = String(num);
// console.log(str);

// num = Number(num);
// console.log(num);


// #28. 객체이해하기 1
// 값들을 그룹으로 묶은 데이터모음 
// 중괄호 {} 
// json : JavaScript Object Notation
//
// #11 객체 선언
// var family = { // 객체 선언 
//     "address": 'Seoul', // key 작성시 ''기호를 넣은 것과 넣지 않은것의 차이는 없음 
//     members: {},
//     addFamily: function (age, name, role) {
//         this.members[role] = { // this 키워드 를 통해 family 객체 내부속성으로 접근
//             age: age,
//             name: name
//         };
//     },

//     getHeadcount: function () { //getHeadcount 라는 키에 함수리터럴을 할당함 
//         return Object.keys(this.members).length;
//     },
// };
// #22 단축 속성명 사용 
// var address = 'Seoul';
// var members ={};
// var addFamily= function (age, name, role) {
//     this.members[role] = { age, name }; // 단축 송ㄱ성명 ( 변수가 미리 준비되어 있는경우, 변수명으로 속성의 key, value 를 한번에 정의할 수 있음 ),
// };
// var getHeadcount= function(){
//     return Object.keys(this.members).length;
// }

// var family = {addFamily,members,addFamily,getHeadcount};


// family.addFamily(30, 'chole', 'aunt');
// family.addFamily(3, 'lyn', 'niece');
// family.addFamily(10, 'dangdangi', 'dog');

// console.log(family.getHeadcount());
// console.log(1)

// // #29. 속성 접근 / 추가 /삭제 
// var printMembers = function () {
//     var members = family.members;
//     for (role in members) {
//         console.log('role=> ' + role + ', name =>' + members[role].name + ', age=> ' + members[role].age);
//     }
// };
// console.log("#1");
// printMembers();

// var members = family.members;
// members['nephew'] = { age: 3, name: 'hyun' }; // nephew 추가 
// members.niece = { age: 5, name: 'lyn' }; // niece 속성변경 
// delete members.aunt; // aunt 삭제
// delete members['dog']; // dog 삭제 
// console.log("#1");
// printMembers();



// # 31 속성 계산명 
// 속성 이름을 정의하는 방법 대괄호[] 안에 식을 넣거나 변수를 대입하여 동적을 객체속성들을 생성 

// var obj = {};
// for (var i = 0; i < 4; i++) {
//     obj['key' + i] = i;
// }

// var profile = 'chloe:30';
// var person ={
//     [profile]:true,
//     [profile.split(':')[0]] : profile.split(':')[1]  
// };

// console.log(person)


// #32 비구조화 할당 
// 배열이나 객체의 값을 새로운 변수에 쉽게 할당 하는 방법 

// 객체 비구조화 
// var obj ={a:1, b:2, c:30, d:44,e:5};

// var {a,c} = obj;

// console.log(a,c);
// console.log(`a >>>${a}`);

// console.log(obj);
// var {a:newA=10, f:newF=5} =obj; // 기존 속셩명을 가져와서 새로운 변수명으로 할당하는 방법 , a:newA =10  객체의 a속성을 새로운 newA로 할당하되, undefined로 값이 없는 경우에는 기본값 10을 할당한다는 의미
// console.log(`newA,newF >>>${newA}, ${newF}`);


// 배열 비구조화 

var arr =[1,2,30,44,5];
var [b,c, ...rest] = arr;
console.log(b,c,rest);

var [a=10, f=9] =[1];
console.log(a,f);

[a,f]=[f,a];
console.log(a,f);

function getArr(){
    return [1,2,3,4,5,6];
}
[a, , c, , , f] = getArr();
console.log(a,c,f);