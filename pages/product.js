import React, { useState } from "react";
import Styles from "../components/rang.module.css";
import Link from "next/link";
import Prodact12 from "@/components/Prodact12";
const Prodact1 = (props) => {
  return (
    <>
      <div className={Styles.divCard}>
        {props.products.map((item) => {
          return <Prodact12 key={item.id} date={item} />;
        })}
      </div>
    </>
  );
};

export default Prodact1;
export async function getStaticProps(context) {
  const response = await fetch("http://localhost:9090/products");
  const data = await response.json();
  return {
    props: {
      products: data,
    },
    revalidate: 5000,
  };
}
