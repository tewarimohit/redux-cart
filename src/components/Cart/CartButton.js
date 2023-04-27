import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { cartUIActions } from "../store/uiSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const cartUIHandler = () => {
    dispatch(cartUIActions.toggle());
  };
  return (
    <button className={classes.button} onClick={cartUIHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
