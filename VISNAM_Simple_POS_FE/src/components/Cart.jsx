function Cart({ items, onCheckout, isSubmitting}) {
    const totalPrice = items.reduce((sum, p) => sum + (p.productResPrice * p.quantity), 0);
    const isAnyItem = items.length > 0;

    return (
        <div style={{ width: '100%', height: '100%', direction: 'flex', flexDirection: 'column'}}>
          <div style={{ flex: 1, overflowY: "auto" }}>
          {!isAnyItem
          ? (<p>Cart is empty </p>)
          : (<>
           <table style={{ width: '100%', tableLayout: 'fixed', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #ccc' }}>
                <th align="left">Name</th>
                <th align="center">Quantity</th>
                <th align="right">Price</th>
                <th align="right">Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.productResId} style={{ borderBottom: '1px solid #eee' }}>
                  <td>{item.productResName}</td>
                  <td align="center">{item.quantity}</td>
                  <td align="right">{item.productResPrice.toLocaleString()}</td>
                  <td align="right">
                    {(item.productResPrice * item.quantity).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
        </div>
  <div style={styles.totalSection}>
        <h3>Final Cost: {totalPrice.toLocaleString()} VND</h3>
        <button 
        style={{...styles.button, cursor: isAnyItem ? "pointer" : "not-allowed", pacity: isAnyItem ? 1 : 0.6}}
        disabled={!isAnyItem || isSubmitting}
        onClick={onCheckout}
        > {isSubmitting ? "Loading..." : "Check Out"}</button>
        </div>
  </div>
    );
  }



  const styles = {
    totalSection: { 
        marginTop: 'auto', 
        textAlign: 'center', 
        borderTop: '2px solid #333',
        width: '100%',
        paddingTop: '10px'
      },

    button: {
      width: "100%",
      padding: "12px",
      fontSize: "16px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "0.3s"
    }
  };
  
  export default Cart;
  