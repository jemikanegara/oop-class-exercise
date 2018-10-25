class Cart {
    constructor(){
        this.products = [{productCode: 'baju', quantity: 3}]
    }

    addProduct(productCode, quantity){
        this.products.push(
            {
                productCode: productCode,
                quantity: quantity
            }
        )


        // this.products.forEach(
        //     element => {
        //         if(element.productCode !== productCode){
        //             console.log(this)
                    
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
                console.log(product)
            }
        )
    }
}

const productCart = new Cart()

productCart.addProduct('White Cap',2)
productCart.addProduct('Red Shoes',1)
productCart.addProduct('Red Shoes',4)
productCart.addProduct('Red Shoes',2)
productCart.addProduct('Black Shirt',3)

productCart.removeProduct('Black Shirt')

productCart.removeProduct('Green Jacket')

productCart.showCart()