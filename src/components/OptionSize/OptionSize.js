import styles from './OptionSize.module.scss'
import clsx from 'clsx'

import PropTypes from 'prop-types';

const OptionSize = (props) => {
  return(
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {props.sizes.map(size => 
          <li key={size.name}><button onClick={() => props.setCurrentSize(size)} type="button" className={clsx(size === props.currentSize && styles.active)}>{size.name}</button></li>
        )}
      </ul>
    </div>
  )
}

OptionSize.propTypes = {
  sizes: PropTypes.array,
  setCurrentSize: PropTypes.func,
  currentSize: PropTypes.object,
}

export default OptionSize