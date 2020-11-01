
/*  20201101
javascript 는 두가지 타입으로 구분한다.
1. 원시타입 
 - 값이 변수에 할당될 때 메모리상에 고정된 크기로 저장한다, 즉 해당변수가 직접 값을 보관한다 
 예를 들어 숫자 5는 8바이트 메모리공간을 차지함
 이 값을 x 라는 변수에 대입하면 x 는 8바이트 메모리공간을 두고 직접 숫자5값을 보유하게 된다. 
 이런 고정된 공간에 보관된 원시타입의값은 불변값인 특성을 가진다 (Immmutable Value)
 number , boolean, string, symbol, null, undefined
 2. 참조타입
 - 변수에 고정된 크기를 저장하지 않고, 값의 메모리 주소를 참조한다. 객체는 속성들의 집합을 의미하며, 순서/크기도 고정되어있지 않다. 
*/

var x = 5;
var y = 'five'
var isTrue = true;
var empty = null;
var sym = Symbol('me');
var item={
    price : 50000,
    count:10
}; //객체(object)
var fruits = ['apple','banana','kiwi'] // 배열(Array)
var addFruit = function(fruit){
    fruits.push(fruit)
}
addFruit('watermelon');
console.log(fruits)
