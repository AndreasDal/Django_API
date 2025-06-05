import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = () => {
   const [items, setItems] = useState([]);

   useEffect(() => {
      // axios.get('http://localhost:8000/api/items/')
      // axios.get('http://localhost:8000/appAPI/api/items/?format=api')
      axios.get('http://localhost:8000/appAPI/api/items/')
      // axios.get('http://127.0.0.1:8000/appAPI/api/items/?format=json')
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
   }, []);

   return (
      <div>
         <h1>Items</h1>
         {/* <p>{items[0].id}</p> */}
         <ul>
            {items.map(item => (
               <li key={item.id}>{item.name} has value {item.id}</li>
            ))}
         </ul>
      </div>
   )
}

export default ItemList;