import Button from '@/components/Button'
import Modal from '@/components/Modal'
import { useState } from 'react'

import './App.css'

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)
  return (
    <main>
      <h3>Framer Motion</h3>
      <Button onClick={() => (modalOpen ? close() : open())}>Show Modal</Button>
      {modalOpen && <Modal handleClose={close}>Modal</Modal>}
    </main>
  )
}

export default App
