import styles from './OptionColor.module.scss'
import clsx from 'clsx'

import PropTypes from 'prop-types';

const prepareColorClassName = color => {
  return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
}

const OptionColor = (props) => {
  return(
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {props.colors.map(color => 
          <li key={color}><button onClick={() => props.setCurrentColor(color)} type="button" className={clsx(prepareColorClassName(color), color === props.currentColor && styles.active)} /></li>
        )}
      </ul>
    </div>
  )
}

OptionColor.propTypes = {
  colors: PropTypes.array,
  setCurrentColor: PropTypes.func,
  currentColor: PropTypes.string,
}

export default OptionColor