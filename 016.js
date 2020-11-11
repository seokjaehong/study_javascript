// 숫자형 
console.log(Infinity);
console.log(1/Infinity);
console.log(0/0);
console.log(Infinity-Infinity);
console.log(0/"말도안되는값");

// infinity : 어떤수보다 가장큰 수 
// NaN : Not a number

// 문자형 
console.log("I'm in jeju");
console.log("Sewha ocean is wonderful");
console.log(`Have you ever eaten Makgeolli?`);
console.log("This is the first line \n And this is the second");

// Boolean 
console.log(7>3); //true
console.log(7<3); //false

// null vs undefined

var value =null;
console.log(value); //null
console.log(typeof value); //object
var value2; 
console.log(value2); //null
console.log(typeof value2); //object

// null : 비어이쓰는 값 , typeof:자료형 확인할때 object(객체)를 반환 .. 왜 ?
// undefined: 아무 값도 할당받지 않은 상태 , typeof 해도 undifined 그대로 출력 됨 



// 템풀릿 문자열 
var cart =[
    {name :'옷', price:2000},
    {name :'가방', price :1000}
]; // 카트배열을 정의함, name과 pirce 를 속성으로 가짐 

var numOfItems = `카트에 ${cart.length} 개의 아이템이 있습니다`; // 템플릿 문자열은 `` 로 작성함 
var cartTable = 
`<ul>
    <li>품목 : ${cart[0].name}, 가격: ${cart[0].price}</li>
    <li>품목 : ${cart[1].name}, 가격: ${cart[1].price}</li>
</ul>` // 멀티라인 
console.log(numOfItems);
console.log(cartTable);

var personName = 'harin';
var helloString = 'hello '  + personName; // 일반 문자열 : 'hello harin'
var helloTemplateString = `hello ${personName}`; // 
console.log(helloString, helloTemplateString)
console.log(helloString=== helloTemplateString);
console.log(typeof helloTemplateString);
