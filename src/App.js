import React from 'react';
import './App.css';
import Button from './Button';
import Product from './Product';
import bag2 from './assets/bag_2.png';
import bag1 from './assets/bag_1.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';

function App() {
  return (
    <>
      <nav>
        <h1>Handbags & Purses</h1>
        <Button
          value="to the collection"
          disabled={false}
        />
        <Button
          value="shop all bags"
          disabled={false}
        />
        <Button
          value="pre-orders"
          disabled={true}
        />
      </nav>
      <main>
        <Product
          name="handy"
          label="Best seller"
          image={bag1}
          price="400"
        />
        <Product
          name="stylish"
          label="Best seller"
          image={bag2}
          price="250"
        />
        <Product
          name="simple"
          label="New collection"
          image={bag3}
          price="300"
        />
        <Product
          name="trendy"
          label="New collection"
          image={bag4}
          price="150"
        />
      </main>
    </>
  );
}

export default App;



