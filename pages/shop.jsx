import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import classes from '../styles/Shop.module.scss'
import clsx from 'clsx';

const Shop = () => {
    return (
      <>
        <Header />
        <seaction className={classes.shop_nav}>
          <a className={clsx(classes.shop_nav__item, classes.nav_item)} href='/'>
            <img
              className={classes.nav_item__img}
              src="images/shopart.jpg"
              alt="Picture of the author"
            />
            <h1 className={classes.nav_item__text}>Art</h1>
          </a>
          <a className={clsx(classes.shop_nav__item, classes.nav_item)} href='/'>
            <img
              className={classes.nav_item__img}
              src="images/shopphoto.jpg"
              alt="Picture of the author"
            />
            <h1 className={classes.nav_item__text}>Photography</h1>
          </a>
        </seaction>
        <Footer />
      </>
    )
}

export default Shop