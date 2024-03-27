import React, { useState } from "react";
import Styles from "./rang.module.css";
// import Link from 'next/link';
const Prodact12 = (props) => {
  const [newprice, setnewprice] = useState(0);
  const changeHandler = () => {
    setnewprice(newprice + 1);
  };
  const decreseHandler = () => {
    if (newprice > 0) {
        return setnewprice(newprice - 1)
    } else {
      return setnewprice(0)
    }
  };
  return (
    <>
      <div key={props.date.id} className={Styles.divCard1}>
        <img src={props.date.indexImageUrl} className={Styles.imageDiv} />
        <h5 className={Styles.h5Price}>{props.date.price}</h5>
        <button onClick={changeHandler} className={Styles.divBtn}>
          <h5 className={Styles.btn}>add</h5>
        </button>
        <button onClick={decreseHandler} className={Styles.divBtn}>
          <h5 className={Styles.btn}>delete</h5>
        </button>
        <label>{newprice}</label>
      </div>
    </>
  );
};

export default Prodact12;
