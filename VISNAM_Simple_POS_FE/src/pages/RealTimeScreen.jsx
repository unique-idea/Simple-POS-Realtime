import React, { useEffect, useState } from 'react';
import * as signalR from '@microsoft/signalr';
import { getOrders } from '../services/api';

const RealTimeScreen = () => {
  const URL = import.meta.env.VITE_API_HUB_URL;
  const [orders, setOrders] = useState([]);
  const [connection, setConnection] = useState(null);


  useEffect(() => {
    getOrders().then(data => setOrders(data))
    .catch(err => {
        console.log(err);
    });
    }, [])

  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${URL}`) 
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);
  }, []);

  useEffect(() => {
    if (connection) {
      connection.start()
        .then(() => {
          console.log("Connected to SignalR Hub!");

          connection.on("newOrderResponse", (newOrderResponse) => {
            console.log(newOrderResponse);
            setOrders(prevOrders => [newOrderResponse, ...prevOrders]);
          });
        })
        .catch(e => console.log("Connection failed: ", e));
    }
  }, [connection]);



  return (
    <div style={styles.container}>
      <h2>Live Order Monitor</h2>
      <div style={styles.list}>
        {orders.map((order) => (
          <div key={order.orderResId} style={styles.orderCard}>
            <div style={styles.header}>
              <strong>Order #{order.orderResId.substring(0, 8)}</strong>
              <span>{new Date(order.orderResTimeCreated).toLocaleTimeString()}</span>
            </div>
            <div style={styles.items}>
              {order.items?.map(p => (
                <div key={p.productName}>
                  {p.productName} x {p.productQuantity}
                </div>
              ))}
            </div>
            <div style={styles.total}>
              Total: {order.orderResTotal?.toLocaleString()} VND
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { 
    padding: '20px', 
    backgroundColor: '#1a1a1a', 
    minHeight: '100vh', 
    color: 'white' },

  list: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
    gap: '15px' },

  orderCard: { 
    backgroundColor: '#333', 
    padding: '15px', 
    borderRadius: '8px', 
    borderLeft: '5px solid #4CAF50' },

  header: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    marginBottom: '10px', 
    borderBottom: '1px solid #444', 
    paddingBottom: '5px' },

  items: { 
    fontSize: '0.9rem', 
    color: '#ccc' },

  total: { 
    marginTop: '10px', 
    textAlign: 'right', 
    fontWeight: 'bold', 
    color: '#4CAF50' }
};

export default RealTimeScreen;