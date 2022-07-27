import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get('/products');
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1> Hello Front-End Success Auto Deploy CI/CD </h1>
        <h4> This is a EC2 Test CI/CD </h4>
        <div className='product-wrapper'>
          {data.map((product) => (
            <div className='product' key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
