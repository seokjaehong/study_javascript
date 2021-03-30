
// 2021.03.30
//#51 클래스 정의 

// class Cart {
//     constructor() {
//         this.store = {};
//     }

//     addProduct(product) {
//         this.store[product.id] = product;
//     }
//     getProduct(id) {
//         return this.store[id]
//     }
// }


// const cart1 = new Cart();
// cart1.addProduct({ id: 1, name: '노트북' });
// console.log(cart1)

// const p = cart1.getProduct(1);
// console.log(p);


// #52 클래스 상속 

class Chart {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    drawLine(){
        console.log('draw line');
    }

}

class BarChart extends Chart{
    constructor(width,height){
        super(width,height)
    }
    draw(){
        this.drawLine();
        console.log(`draw ${this.width} X ${this.height} barChart`);
    }
}

const barchart1= new BarChart(100,100);
console.log(barchart1);