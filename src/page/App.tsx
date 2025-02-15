import { Toaster } from 'sonner'

import FetchClima from '@/Hook/useClima/index.ts'

import { Form } from '@/components/Form'
import { ClimaDetalles } from '@/components/ClimaDetalles'

import styles from '@/page/App.module.css'

function App() {

  const { clima, fetchClima, climaMemo } = FetchClima()

  return (
    <>
      <Toaster position='top-right' />
      <h1 className={styles.title}>Buscador de clima</h1>
      <div className={styles.container}>
        <Form
          fetchClima={fetchClima}
        />
        {
          climaMemo.name === '' ? (
            ''
          ) : (
            <ClimaDetalles weather={clima} />
          )
        }
      </div>
    </>
  )
}

export { App }