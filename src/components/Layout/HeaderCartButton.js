import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHilighted, setBtnIsHilighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const {items} = cartCtx

  const numberOfCartItems = items.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHilighted ? classes.bump : ""}`;

  useEffect(() => {
    if(items.length === 0){
      return;
    }
    setBtnIsHilighted(true);

    const timer = setTimeout(() => {
      setBtnIsHilighted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
