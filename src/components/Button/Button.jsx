import styles from './Button.module.scss'

export default function Button({ children, className, ...rest }) {
  let cx = styles.wrapper
  if (className) cx = `${cx} ${className}`

  return (
    <button className={cx} {...rest}>
      {children}
    </button>
  )
}
