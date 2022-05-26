import styles from './ButtonClose.module.scss'

export default function ButtonClose({ label = 'x', ...rest }) {
  return (
    <button className={styles.ButtonClose} {...rest}>
      {label}
    </button>
  )
}
