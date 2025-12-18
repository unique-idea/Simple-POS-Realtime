import { useState } from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import {createOrder} from "../services/api";

function PosScreen() {
  const [cartItems, setCartItems] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddProduct = (product) => {
    setCartItems(prev => {
        const isExist = prev.find(item => item.productResId === product.productResId);

        if(isExist){
            return prev.map(item => item.productResId === product.productResId
                ? {...item, quantity: (item.quantity || 1) + 1}
                : item);
        }
      return [...prev, { ...product, quantity: 1}];
});
};

const handleCheckout = async () => {


    if (cartItems.length === 0) {
      alert("Cart Is Empty!");
      return;
    }
    var incorrectQuantityItem = cartItems.find(item => item.quantity <= 0);
    if(incorrectQuantityItem){
      alert("Product " + incorrectQuantityItem.productResId + " Quantity Is Incorrect!");
      return;
    }

    const orderData = {
        productRequests: cartItems.map(item => ({
          productReqId: item.productResId,
          productReqQuantity: item.quantity
        }))
      };

    console.log(orderData);
  
    setIsSubmitting(true);

    try {
    const response = await createOrder(orderData);
    alert("Checkout Success!");

    setCartItems([]);

    } catch (error) {
      console.error("Error Occured While Calling API:", error);
      alert("Checkout Failed!");
    }finally{
        setIsSubmitting(false);
    }
  };



  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <h2>Products</h2>
        <ProductList onAdd={handleAddProduct}/>
      </div>

      <div style={styles.right}>
        <h2>Cart</h2>
        <Cart items={cartItems} onCheckout={handleCheckout} isSubmitting = {isSubmitting}/>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    padding: "16px",
    boxSizing: "border-box",
    gap: "10px"
  },
  left: {
    flex: 4,
    borderRight: "1px solid #ccc",
    overflowY: "auto",
    textAlign: "left",
  },
  right: {
    flex: 6,
    paddingLeft: "16px",
    flexDirection: "column",
    paddingRight: "50px",
    
  }
};

export default PosScreen;
