import {useDispatch} from 'react-redux';
import { addToCart } from '../../store/cart';
import { toggleLiked } from '../../store/produce';
import { checkoutVisible } from '../../store/checkout';

function ProduceDetails({ produce }) {
  const cartItem = {};
  const dispatch = useDispatch();

  function doThisOnClick() {
    dispatch(addToCart(produce.id));
    dispatch(checkoutVisible());
  }

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")} onClick={() => dispatch(toggleLiked(produce.id))}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
        onClick={() => doThisOnClick()}>
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
