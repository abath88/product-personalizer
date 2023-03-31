import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';

const ProductForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <OptionSize setCurrentSize={props.setCurrentSize} currentSize={props.currentSize} sizes={props.sizes}/>
      <OptionColor setCurrentColor={props.setCurrentColor} currentColor={props.currentColor} colors={props.colors}/>
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  )
}

ProductForm.propTypes = {
  sizes: PropTypes.array,
  setCurrentSize: PropTypes.func,
  currentSize: PropTypes.object,
  colors: PropTypes.array,
  setCurrentColor: PropTypes.func,
  currentColor: PropTypes.string,
}

export default ProductForm;