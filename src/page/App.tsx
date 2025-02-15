import { Toaster, toast } from 'sonner'
import { useEffect } from 'react'

import FetchClima from '@/Hook/useClima/index.ts'
import { Form } from '@/components/Form'
import { Cargando } from '@/components/Cargando'
import { ClimaDetalles } from '@/components/ClimaDetalles'

import styles from '@/page/App.module.css'

function App() {
  const { clima, loading, notFound, fetchClima, climaMemo } = FetchClima()

  useEffect(() => {
    if (notFound) {
      toast.error('Ciudad no encontrada')
    }
  }, [notFound])

  return (
    <>
      <Toaster position='top-right'  richColors/>
      <h1 className={styles.title}>Buscador de clima</h1>
      <div className={styles.container}>
        <Form fetchClima={fetchClima} />
        {loading ? (
          <Cargando />
        ) : climaMemo.name === '' ? (
          ''
        ) : (
          <ClimaDetalles weather={clima} />
        )}
      </div>
    </>
  )
}

export { App }
