import { useDispatch } from "react-redux";
import classes from "./CartButton.module.css";
import { cartUIActions } from "../store/uiSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const cartUIHandler = () => {
    dispatch(cartUIActions.toggle());
  };
  return (
    <button className={classes.button} onClick={cartUIHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
