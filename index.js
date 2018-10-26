class Cart {
    constructor(){
        this.products = []
    }

    addProduct(productCode, quantity){

        let target = 0
        let result = this.products.find(
            (product, index) => {
                target = index
                return product.productCode === productCode
            }
        )

        if(result != undefined){
            this.products[target].quantity += quantity
        } else {
            this.products.push(
                {
                    productCode: productCode,
                    quantity: quantity
                }
            )
        }
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