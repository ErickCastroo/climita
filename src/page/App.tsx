import { Toaster } from 'sonner'

import { Form } from '@/components/Form'
import styles from '@/page/App.module.css'


function App() {
  return (
    <>
      <Toaster position='top-right' />
      <h1 className={styles.title}>Buscador de clima</h1>
      <div className={styles.container}>
        <Form />
        <p>2</p>
      </div>
    </>
  )
}

export { App }