 // #33 심볼형 
 // Symbol() 함수는 String, Number, Boolean과 같이 래퍼 객체를 생성하는 생성자 함수와는 달리 new 연산자를 사용하지 않는다.
 // Symbol() 함수에는 문자열을 인자로 전달할 수 있다. 이 문자열은 Symbol 생성에 어떠한 영향을 주지 않으며 다만 생성된 Symbol에 대한 설명(description)으로 디버깅 용도로만 사용된다.
//  const symbol = Symbol()
//  const hello = Symbol('hello');

//  console.log(Number(3)===Number(3));
//  console.log(Symbol('symbol')=== Symbol('symbol'));
//  console.log(Symbol()===Symbol());
//  console.log(typeof Symbol());

//  const nationality = Symbol('nationality');
//  const user = {name:'jay'}

//  for (let key in user){
//      console.log(key)
//  }


//  console.log(Object.keys(user));
//  console.log(Object.getOwnPropertyNames(user));
//  console.log(JSON.stringify(user));

//  const symbolProperties = Object.getOwnPropertyNames(user);
//  console.log(symbolProperties);
//  console.log(user[symbolProperties[0]]);

//  // #34 함수

//  // function 함수이름 (매개변수) { 실행부 }

//  // 함수표현식으로 함수를 생성 -> 정의와 동시에 변수에 함수 리터럴을 할당
//  var greetings_expression = function(name) {
//      console.log('Hi,' + name);
//  }

//  // 함수선언문 방식 
//  function gretting_declaration(name){
//      console.log('Hi,' +name)
//  }

 // #35 예외처리
//  function checkNumber(val) {
//      if (typeof val !== 'number') throw '유효하지 않은 값입니다.'; // 고의로 에러를 발생시켜 예외상황을 notice , 블록에서 빠져나감.
//      console.log('숫자형으로 확인');
//  }

//  try{
//      checkNumber(100);
//      checkNumber('WrongTYpe')
// } catch(e){
//     console.log(`에러발생 >>> ${e}`);
// } finally {
//     console.log('완료');
// } 
// try 내 에서 에러를 잡아내고, catch블록으로 제어권을 넘김. 

//#36 arguments (전달인자 )
// 자바스크립트는 전달인자의 개수와 매개변숲의 개수가 달라도 에러를 발생하지 않음. 매개변수외에 함수에서만 사용가능한 특별한 객체를 제공 (arguments)

// function sum(){
//     var total=0;
//     for (var i=0 ; i < arguments.length; i++){
//         total += arguments[i];
//     }
//     console.log(arguments instanceof Array);
//     return total;
// }

// var sumOfto3 = sum(1,2,3);
// console.log(sumOfto3)

// function testArg(){
//     var newArr = Array.prototype.slice.call(arguments); // arguments객체를 배열로 바꾸기 위해 slice 메소드를 사용
//     console.log(newArr);
//     console.log(newArr.indexOf('a'));
//     console.log(newArr.indexOf('b'));
//     // console.log(arguments.indexOf('b'));
// } 

// testArg('a','b')


//#37 . 함수기본 매개변수 처리하기 
// function drawChart(width =200, height=400){
//     console.log(`${width} X ${height} 차트를 그립니다.`);
// }
// drawChart();
// drawChart(100);
// drawChart(100,300);


//#38. 함수 나머지 매개변수 이해하기 
// ...restParameter
// function sum(... args){
//     var total =0;
//     for( var i =0; i <args.length ; i++){
//         total+=args[i];
//     }
//     console.log(args.indexOf(1))
//     return total;
// }
// console.log(sum(1,2,3));

//#39. t스코프 이해하기 
// 유효범위로써 변수와 매개변수가 어디까지 유효한지를 나타냄

// var a =10;
// console.log(a);
// function print(){
//     var b =20;
//     if (true){
//         var c = 30;
//     }
//     console.log(c);
// }
// print();
// console.log(b);

//#40 함수 호이스팅 
// 함수를 선언하기전에 호출 (끌어올리기)
// hello();
// function hello(){
//     console.log('hello');
// }


// hello2();
// var hello2 = function(){
//     console.log('hello2');
// }

// #41. let 
// if(true){
//     var functionScopeValue = 'global'; // var 는 함수단위의 유효범위를 가지게 되어 if 의 블록에 만들어도 밖에서 접근가능  
//     let blockScopeValue = 'local'; // let 는 블록단위의 유효범위를 가지게 되어 if 문의 밖에서 접근시 Reference 에러가 발생
// }

// console.log(functionScopeValue);
// console.log(blockScopeValue);

// #42. const 
// 블록단위 로 지정, 이후 재할당 불가 ,(Immutable Object)

// const URL = 'http://js.com';
// URL = 'http://js.com';
// if (true){
//     const URL2 = 'http://js.com';
// }

// console.log(URL2);

// #43 스코프 체인 
// 1. 실행컨텍스트( Execution context )
//  - 코드가 실행되기 위해 필요한 정보를 가지고 있음 
//  - 전역코드 , 함수코드, eval , 모듈코드 
// 2. 렉시컬 환경( Lexical Enviroment )
//  - 

// 전역코드 -> 함수가 호출문을 만나면 새로운 실행 컨텍스트가 만들어 지면서 해당함수 실행부의 코드를 순차적으로 평가함
// 이때 스택을 이용해 실행컨텍스트를 관리, 새로운 실행컨텍스트가 생성되면 스택에 쌓고, 실행 중인 코드가 종료되면 해당 실행 컨텍스트를 스택에서 제거 

// var person ='harin';
// function print(){
//     var person2 ='jay';
//     function innerPrint(){
//         console.log(person);
//         console.log(person2);
//     }

//     innerPrint();
//     console.log('print finished');
// }
// print();
// console.log('finished');
// 실행 컨텍스트는 렉시컬 환경을 갖고있는데 , 환경레코드(EnvironmentRecord)와 외부 렉시컬 환경( OuterLexicalEnvironment)으로 구성 


// #44 클로저
// function createCounterClosure(){
//     let count =0;
//     return {
//         increase : function(){
//             count++;
//         },
//         getCount: function(){
//             return count;
//         }
//     };
// }

// const counter1 = createCounterClosure();
// const counter2 = createCounterClosure();

// counter1.increase();
// counter1.increase();
// console.log('counter 1 의 값 : '+ counter1.getCount());
// counter2.increase();
// console.log('counter 2 의 값 : '+ counter2.getCount());
// counter1 과 counter2 의 메소드 들이 다른 count에 접근하는 것은 다른 렉시컬 환경의 환경 레코드에서 count에 접근하는 것이ㅏㄷ. 
// 함수가 정의될 떄의 렉시컬 환경을 기억하는 함수 
// 대체로 실행 컨텍스트가 컨텍스트 스택에서 제거돠면 해당 환경은 사라지기 마련인데, 위 예제처럼 클로저가 만들어지면 해당환경은 사라지지 않는다. 왜냐하면 해당참조가 존재하기 때문임

// #45 객체속성기술자 이해하기

let user ={
    name :'jeado'
};
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(descriptor); // 속성기술자(Property descriptor)

let user2 = {};
Object.defineProperty(user2,"name",{
    value:"jeado",
    enumerable:true, // 나열 가능 여부 
    configurable: true, // 속성기술자를 변경할 수 있는 여부
    writable:false //  값 변경 여부
});
console.log(user2.name);
user2.name='bbo';
console.log(user2.name);

let user3 = {
    name: "jeado",
    toString() {
        return this.name;
    }
};
Object.defineProperty(user3, "toString", {
    enumerable: false // 속성을 나열할때 나열 가능 여부를 저장함 
});
for (let key in user3){
    console.log(key);
}

let user4 ={};
Object.defineProperty(user4,"name",{
    value:"jeado",
    configurable: false
});
delete user4.name
console.log(user4);
Object.defineProperty(user4,"name",{
    writable: true
});
