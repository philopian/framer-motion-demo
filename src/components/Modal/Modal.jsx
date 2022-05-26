import Backdrop from '@/components/Backdrop'
import ButtonClose from '@/components/ButtonClose'
import { motion } from 'framer-motion'

import styles from './Modal.module.scss'

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
}
export default function Modal({ children, className, handleClose, text, ...rest }) {
  const handleModalClick = (e) => {
    e.stopPropagation()
  }
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className={styles.Modal}
        onClick={handleModalClick}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
        <ButtonClose onClick={handleClose} />
      </motion.div>
    </Backdrop>
  )
}
