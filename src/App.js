import { useEffect, useState } from 'react';
import Cart from './components/Cart';
import ProduceList from './components/ProduceList';
import {useDispatch} from 'react-redux';
import { populateProduce } from './store/produce';
import { checkoutVisible, checkoutNotVisible } from './store/checkout';
import { useSelector } from 'react-redux';

function App() {

  const visible = useSelector(state => state.checkout["visible"]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(populateProduce());
  }, [dispatch]);

  return (
    <>
      <nav>
        <h1>Grocery Store</h1>
        <button className="checkout-button" onClick={() => dispatch(checkoutVisible())}>
          <i className="fas fa-shopping-bag" />
          Checkout
        </button>
      </nav>
      <main style={visible ? { marginRight: '300px' } : {}} >
        <ProduceList />
      </main>
      <div
        className="sidebar"
        style={visible ? { transform: 'translateX(-100%)' } : {}}
      >
        <div className="sidebar-header">
          <button className="arrow-button" onClick={() => dispatch(checkoutNotVisible())}>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <Cart />
      </div>
    </>
  );
}

export default App;
