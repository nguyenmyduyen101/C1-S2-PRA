const PRODUCTS = [
    { id: 1, name: "Apple", price: 2.5 },
    { id: 2, name: "Banana", price: 1.5 },
    { id: 3, name: "Orange", price: 3 },
    { id: 4, name: "Rice", price: 1.5 },
    { id: 5, name: "Chocolate", price: 3 },
  ];
  
  
  const SHOPPING_CART = [
    { id: 1, quantity: 2 },
    { id: 3, quantity: 1 },
  ];
  
  
  function getCartTotalAmount() {
    let totalAmount = 0;
    for (const item of SHOPPING_CART) {
        const product = PRODUCTS.find(prod => prod.id === item.id);
        if (product) {
            totalAmount += product.price * item.quantity;
        }
    }
    return totalAmount;
}
  
 
  function addProductToCart(productId) {
    let totalAmount = 0;
    const index = SHOPPING_CART.findIndex(item => item.id === productId)
    if(index !== -1){
        SHOPPING_CART[index].quantity++;
    }else{
        SHOPPING_CART.push({
                id: productId,
                quantity: 1
            })
    }
}
  
  
  function removeProductFromCart(productId) {
    let totalAmount = 0;
    const index = SHOPPING_CART.findIndex(item => item.id === productId)
    if(index !== -1){
        if(SHOPPING_CART[index].quantity === 1)
            SHOPPING_CART.splice(index, 1);
        else{
            SHOPPING_CART[index].quantity--;
        }
    }
}
 
  console.log(getCartTotalAmount()); 
  
  
  addProductToCart(1);
  console.log(JSON.stringify(SHOPPING_CART)); 

 
  addProductToCart(2);
  console.log(JSON.stringify(SHOPPING_CART)); 

  
  removeProductFromCart(1);
  console.log(JSON.stringify(SHOPPING_CART)); 


  removeProductFromCart(2);
  console.log(JSON.stringify(SHOPPING_CART)); 