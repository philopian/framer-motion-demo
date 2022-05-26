import styles from './Modal.module.scss'

  export default function Modal({ children, className, ...rest }) {
    let cx = styles.Modal
    if (className) cx = `${cx} ${className}`
    return (
      <div className={cx} {...rest}>
        {children}
      </div>
    )
  }
