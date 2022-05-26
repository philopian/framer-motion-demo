import { motion } from 'framer-motion'

import styles from './Backdrop.module.scss'

export default function Backdrop({ children, onClick, ...rest }) {
  return (
    <motion.div
      className={styles.Backdrop}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
