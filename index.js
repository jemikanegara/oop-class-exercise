class Cart {
    constructor(){
        this.products = []
    }

    addProduct(productCode, quantity){
        
        this.products.push(
            {
                productCode: productCode,
                quantity: quantity
            }
        )
    // Not Working
        // this.products.forEach(
        //     element => {
        //         if(element.productCode === productCode){
        //             element.quantity += quantity
        //         } else {
        //             this.products.push(
        //                 {
        //                     productCode: productCode,
        //                     quantity: quantity
        //                 }
        //             )
        //         }
        //     }
        // )

       

        // for(let i=0; i < this.products.length; i++){
        //     if(this.products[i].productCode === productCode){
        //         this.products[i].quantity += quantity
        //     } else {
        //         console.log('aa')
        //         this.products.push(
        //             {
        //                 productCode: productCode,
        //                 quantity: quantity
        //             }
        //         )
        //     }
        // }

    }

    removeProduct(productCode){
        this.products.forEach(
          (product,index) => {
              if (product.productCode === productCode) {
                  this.products.splice(index, 1)
              } 
          }  
        )
    }

    showCart(){
        this.products.forEach(
            product => {
                console.log(`${product.productCode} (${product.quantity})`)
            }
        )
    }
}

const cart = new Cart()

cart.addProduct("White Cap", 2);

cart.addProduct("Red Shoes", 1);
cart.addProduct("Red Shoes", 4);
cart.addProduct("Red Shoes", 2);

cart.addProduct("Black Shirt", 3);
cart.removeProduct("Black Shirt");

cart.removeProduct("Green Jacket");

cart.showCart();