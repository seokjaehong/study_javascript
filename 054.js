//54.this 이해하기 
// this는 함수가 어떻게 호출되는지에 따라 동적으로 결정됨 
// 전역에서 사용할 수 도 있고, 함수안에서도 사용할수 있다.  

// this.valueA ='a';
// console.log(valueA);
// this.valueB ='b';
// console.log(valueB);
// console.log(window.valueB);


// function checkThis(){
//     console.log(this);
// }
// function checkThis2(){
//     "use strict";
//     console.log(this);
// }
// checkThis();
// checkThis2();

// function Product (name,price){
//     this.name=name;
//     this.price=price;
// }
// const procut1 = Product('가방',2000);
// console.log(window.name);
// console.log(window.price);


// 055.모듈 이해하기 

var namespaceA = (function(){
    var privateVariable = '비공개 변수';
    return {
        publicApi : function(){
            console.log(privateVariable + '를 접근할 수 있습니다.');
        }
    }
})();
namespaceA.publicApi();