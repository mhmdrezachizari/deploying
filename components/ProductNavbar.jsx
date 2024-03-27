import Link from 'next/link'
import React from 'react'
import Styles from './rang.module.css'
const ProductNavbar = () => {
  return (
    <>
    <div className={Styles.div1}>
      <Link href='/home' className={Styles.alink}>home</Link>
      <Link href='/about' className={Styles.alink}>about</Link>
      <Link href='/product' className={Styles.alink}>shopping</Link>
      <Link href='/sale' className={Styles.alink}>sale</Link>
      <Link href='/collection' className={Styles.alink}>collection</Link>
    </div>
    </>
  )
}

export default ProductNavbar
