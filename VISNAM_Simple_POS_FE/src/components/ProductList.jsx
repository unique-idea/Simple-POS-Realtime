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

    if(loading) return <p>Loading products...</p>;
    if(error) return <p style={{color: "red"}}>{error}</p>;

    return (
      <div>
        {products.map(p => (
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
    item: {
      border: "1px solid #ddd",
      padding: "12px",
      marginBottom: "8px",
      cursor: "pointer",
      borderRadius: "4px",
      wordWrap: "break-word", 
  whiteSpace: "normal"
    }
  };
  
  export default ProductList;
  