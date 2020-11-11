// 산술연산자 
// 10+5; //15 
// 10-5; //5
// 10*5; // 50
// 10/5; //2 
// "문자열" + " 이어붙이기";

// var x = 10;
// x+=5;
// x*=2;
// console.log(x);
// var y=10;
// y-=5;
// y/=5;
// console.log(y);

// console.log(15%4); //나머지 
// console.log(15/3); //몫
// console.log(3 **3 ); //세제곱
// console.log(+10);
// console.log(-10);
// var value =10;
// ++value; // value = value +1
// --value; // value = value -1
// console.log(value);

// 비교연산자 
// console.log(5==5);
// console.log('5'==5); // 값 만 비교 
// console.log('5'===5); // 값 + 자료형을 함께 비교 
// console.log(5 !="5"); // 값 만 비교  : false
// console.log(5 !=="5"); // 값이 다르거나 자료형이 다르면 true


// 논리연산자 
// AND && , OR || , NOT ! --> Boolean
// console.log(true&&true) // true
// console.log(true && false); // false
// console.log(false && false); // false
// console.log(true || true) ; // true
// console.log(false ||false); //false

// 삼항연산자 

// var condition = 5> 10;
// condition ? console.log('left'):console.log('right');
// var result = condition ? (
//         condition.log("삼항연산식의 첫번쨰 표현식"), "표현식1"
//     ):(
//         console.log('삼항연산식의 두번째 표현식'),"표현식2"
//         );
// console.log(result)


//비트연산자 
//비트(Bit)란? 이진수의 줄임말로, 0과1로 구성된 숫자체계를 갖고있는 이진수의 단일값을 가진다. 컴퓨터의 세계에서 데이터의 가장작은 기억장치의 최소단위
// 8비트 =1바이트 
// 비트 논리 연산자 와 비트이동연산자 
// 1. 비트논리연산자 : 
// AND(&), NOT(~), OR(|), XOR(^)
// 2. 비트이동연산자 : 
// << , >> , >>>
console.log(14 & 11); // 1110 & 1011 --> 1010
console.log(~14); // ~1110 --> 0001(-1111) --> 2의보수 모르겠다
console.log(14|11); // 1110 | 1011 --> 1111 -- >15
console.log(14^11); // XOR : 0101 -->5
console.log(2<<2); // 0010 --> 1000 -> 8
console.log(14>>1); // 1110 >> 1 0111 -> 7
console.log(14 >>>2 ); // 1110 >>> 0001 --> 