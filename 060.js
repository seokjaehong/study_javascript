//#60 내장 객체  

// const str = new String('자바스크립트');
// const num = new Number(200);
// const bool = new Boolean(true);
// const date = new Date();
// const map = new Map();
// const set = new Set();

// console.log(Math.PI);
// console.log(Date.parse('2021-01-01'));
// console.log(JSON.parse('{}'));



// 89. 배열 인덱스 수정 
// const fruits = ['melon','lemon','source','apple','juice'];

// fruits.splice(4,1);
// fruits.splice(4,0,'grape');
// // fruits.splice(2,1,'mandarin','strawberry','watermelon');

// console.log(fruits);

// 90. 배열순환 

// const arr = [
//     { id: 0, name: '혜림', age: 6 },
//     { id: 1, name: '현일', age: 3 },
//     { id: 2, name: '현아', age: 5 },
//     { id: 3, name: '우림', age: 2 },
// ];

// arr.forEach((el) => {
//     console.log(el.name)
// });

// 92. 배열정렬 (sort)
// Array객체의 sort 메소드는 인자로 "비교함수" 를 대입하여 배열 요소들을 정렬함.
// 비교값의 구체적인 기준 
// 비교값 > 0 : a가 b보다 작은 숫자의 인덱스 a 가 b보다 앞에 위치함 
// 비교값 < 0 : a가 b보다 큰 숫자의 인덱스 a 가 b보다 뒤에 위치함 \
// 비교값 = 0 : a와 b의 위치를 변경하지 않음 .
// 새로운 객체를 return하는 것이 아니라 원본 자체를 변경함 


// const numArr1 = [2,0,3,4,1];
// const numArr2 = [2,0,3,4,1];
// const objArr = [ 
//     {id:2, name:'Leo'},
//     {id:0, name:'Daniel'},
//     {id:3, name:'Asher'},
//     {id:4, name:'Chloe'},
//     {id:1, name:'Chloe'},
// ]

// numArr1.sort();
// console.log(numArr1);
// // numArr1.sort(function(a,b) {return a-b;});
// numArr2.sort(function(a,b) {return b-a;});

// objArr.sort(function(a,b){
//     if (a.name > b.name) return 1;
//     else if (b.name> a.name) return -1;
//     else return 0;
// })

// console.log(`오름차순 : ${numArr1}`);
// console.log(`내름차순 : ${numArr2}`);
// console.log(objArr);

// 94. 필터 (배열 특정조건)
// const arr = [1,2,3,4,5,6,7,8,9,10];

// const filteredTwo = arr.filter(a=>{
//     console.log(`현재 위치의 값은 ${a}입니다.`);
//     return a % 2 ==0;
// })
// console.log(filteredTwo);
// const filteredThree = arr.filter(a=>a%3==0);
// console.log(filteredThree);


// 95.배열 요소 일괄 변경하기 
// const arr =[
//     {id:0,name:'혜림',age:6},
//     {id:1,name:'현일', age:3},
//     {id:2,name:'현아', age:5},
//     {id:3,name:'우림',age:2},
// ];
// const arr2 = arr.map(el => {
//     el.age = el.age+1;
//     return el;
// });

// const arr3 = arr.map(el => {
//     return [el.name, el.age]
// });

// console.log(arr2);
// console.log(arr3);

//96. 배열 값 누적 (부분합, python reduce랑 동일 )
// const numArr = [1,2,3,4,5];
// const result = numArr.reduce((acc,el)=> {
//     console.log('내부 ',acc,el)
//     return acc+el
// },0);
// console.log(result)

//100. 중첩 배열 단일 화 
// const arr = [1,[2,3],[4,5,6],['배열','나열하기'],'JavaScript'];
// //reduce의 결과값을 다시 result 변수로 리턴 
// const result = arr.reduce((acc,el)=>{
//     return acc.concat(el);
// },[]); // <- 초기값을 빈배열로 할당함/ 
// console.log(result)

//101. 키, 값 추출 , 배열변환
// const obj ={
//     movie:'Sunny',
//     music:'Like Sugar',
//     style:'Retro',
//     price: Infinity,
// };
// const arr = Object.keys(obj);
// console.log(arr);
// const arr2 = Object.values(obj);
// console.log(arr2);
// const modifedArr = Object.entries(obj);
// console.log(modifedArr);

// 104. 객체 freeze 
// 다른속성을 추가하거나 제거할 수 없음 

// let obj = {};
// obj.title = 'IDOL';
// obj = Object.freeze(obj);
// obj.title = 'Euphoria';

// console.log(obj);

// const changeUntilNum = (obj, num) => {
//     'use strict';

//     while (true) {
//         console.log(obj);

//         if (obj.age >= num) {
//             obj = Object.freeze(obj);
//             break
//         }
//         obj.age += 1;
//     }
// }
// let profile = { name: '지연', age: 25 };
// changeUntilNum(profile, 30);

//106, 객체 병합확장 

// const obj1 = { one: 1, two: 2, three: 3 }; // 인자로 대입된 객체를 하나로 병합하는 역할, 첫번째 인자로 대입된 기준으로 병합 
// const obj2 = { name: '탄이', age: 5, address: 'Seoul' }
// const obj3 = { friends: ["혜림", "현아", "현일", "우림"] };

// const newObj1 = Object.assign({}, obj1);
// const newObj2 = Object.assign({}, obj1, obj2);
// newObj1.four = 4;

// console.log(obj1);
// console.log(newObj1);
// console.log(newObj2);

// console.log('/n');

// const newObj3 = Object.assign(obj1, obj3);

// console.log(obj1);
// console.log(newObj1);
// console.log(newObj2);
// console.log(newObj3);


