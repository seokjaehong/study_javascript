
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
 - 이러한 고정되지 않은 값ㅇ르 변수에 할당하려면 직접 해당값을 저장할수없으나, 참조하는 것은 가능함 
 참조타입은 값의 메모리 주소를 변수에 할당하여 값을 참조합니다. 
 객체 : 객체는 {}안에 키:값 형태로 이루어진 속성들의 모음. 여기서 키는 반드시 문자(string)자료형, 
 3. Global Object : 모든객체의 부모가 되는 객체, 이를 부모삼아 함수, 배열 , 원시자료형ㅇ르 객체로 감싼 새로운 형태의 객체를 생성 
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
