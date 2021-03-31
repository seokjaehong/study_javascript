// 109.랜덤

// const generateRandom = (min,max) => {
//     return Math.floor(Math.random()* (max-min+1)+min);
// };
// console.log('lev 1')
// for (let i=0; i<5; i++){
//     console.log(generateRandom(1,10));
// }
// console.log('lev 2')
// for( let i=0; i<5; i++){
//     console.log(generateRandom(10,100));
// }


// 123. 반복가능객체, 반복자 이해 

// Iterable : 반복가능한 
// Iterator : 반복자

// The Iterable Protocol : 객체안의 값들을 반복할수 있도록 반복동작을 정의하는것.
// 반복하기 위해서는 객체 내부에 @@iterator 메소드를 구현해야함
// 키(Key)는 반드시 Symbol.iterator 이어야함 . 
// 속성값(Value)은 매개변수가 없는 함수로 정의 ( 이 함수는 반복자 규약- The Iterator Protocol) 을 따르는 객체(Object)를 반환

// The Iterator Protocol : 반복자 규약은 연속된 값을 만드는 방법을 정의. 
// 객체가 반복자 규약을 충족하려면, next 메소드를 갖고 있어야함. 
// 객체속성 키(key)는 next() 이고, 속성값(Value)은 매개변수가 없는 함수로 정의함.
// 여기서 함수는 Value와 done 속성을 가진 객체를 반환.
// 따라서 반복자의 next 메소드를 호출하면 속성 키 이름이 value 와 done 인 객체가 반환. 이러한 반복자 규약을 충족하는 객체를 iterator라고 함 

// const items =['j','a','v','a','s','c','r','i','p','t']

// const seq ={
//     [Symbol.iterator](){ // iterable 규약에 따라 Symbol.iterator 속성을 정의함, 이어서 속성값으로 매개변수를 받지않고, 객체를 반환하는 함수를 작성 
//         let i =0; // 최초 인덱스 i 변수
//         return {
//             next(){
//                 const value =items[i]; // item 요소를 차례대로 연속해서 처리하는 문장 
//                 i++;  // i를 1씩 증가 
//                 const done =i >items.length; // i값이 items 배열요소길이보다 큰값인지 확인한다. 8라인에서 1증가시킨 후에 i 값이 items길이보다 크면 true, 작으면 false를 done에 대입
//                 return {value, done};
//             }
//         }
//     }
// }

// for (let s of seq) console.log(s);


 
// 124. 문자열 순환하기( for-of )

// const str = 'hello';

// for (const item of str){
//     console.log(item);
// }

// const iter = str[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());


//125.배열 순환 
// const products = [{name:"가방"},{name:"노트북"}];

// for (const item of products){
//     console.log(item.name)
// }

// const iter = products[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());


//126.MAP 객체 요소 추가 
// 키-값 ( 다양한 자료형 값으로 정의 가능 )
/// 반복가능 객체로 Symbol.iterator이 기본적으로 정의 
const map = new Map();
map.set('one',1);
map.set('two',2);

console.log(map.get('one')); //
console.log(map.has('one'));
map.delete('one');

console.log(map.get('one'));
console.log(map.has('one'));


//127