import { motion } from 'framer-motion'

import styles from './Button.module.scss'

export default function Button({ children, ...rest }) {
  return (
    <motion.button
      className={styles.Button}
      {...rest}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.button>
  )
}
