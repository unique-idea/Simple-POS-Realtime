import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

  
  function ProductList({ onAdd }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
    getProducts().then(data => {
        setProducts(data);
        setLoading(false);
    })
    .catch(err => {
        console.log(err);
        setError("Load Product Failed!");
        setLoading(false);
    });
    }, [])

    return (
      <div style={styles.listContainer}> 
      {loading && <p style={styles.statusText}>⏳ Loading products...</p>}
      {error && <p style={{...styles.statusText, color: "#FF3131"}}>Loading Product Failed!</p>}

       {!loading && !error && products.map(p => (
        <div
          key={p.productResId}
          style={styles.item}
          onClick={() => onAdd(p)}
        >
          <div>{p.productResName}</div>
          <div>{p.productResPrice.toLocaleString()} VND</div>
        </div>
      ))}
      </div>
    );
  }
  
  const styles = {
    listContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "flex-start", 
      width: "100%"
    },

    statusText: {
      fontSize: "0.9rem",
      margin: "10px 0",
      color: "#32CD32"
    },

    item: {
      border: "1px solid #ddd",
      padding: "12px",
      marginBottom: "8px",
      cursor: "pointer",
      borderRadius: "4px",
      margin: "5px"
    }
  };
  
  export default ProductList;
  