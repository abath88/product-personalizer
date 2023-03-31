import { useState, useMemo } from 'react';
import styles from './Product.module.scss';
import PropTypes from 'prop-types';

import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);

  const getPrice = useMemo(() => {
    return props.basePrice + currentSize.additionalPrice;
  }, [props.basePrice, currentSize])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Summary');
    console.log('===============');
    console.log('Name: ', props.title);
    console.log('Price: ', getPrice);
    console.log('Size: ', currentSize.name);
    console.log('Color: ', currentColor);
  }

  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} color={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductForm 
          handleSubmit={handleSubmit} 
          setCurrentColor={setCurrentColor} 
          setCurrentSize={setCurrentSize}
          currentSize={currentSize}
          currentColor={currentColor}
          sizes={props.sizes}
          colors={props.colors}
        />
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  title: PropTypes.string,
  basePrice: PropTypes.number,
  colors: PropTypes.array,
  sizes: PropTypes.array
};

export default Product;