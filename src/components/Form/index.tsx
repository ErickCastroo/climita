import { useState } from 'react'
import { toast } from 'sonner'

import { countries } from '@/data'
import type { buscartype } from '@/types'

import styles from '@/components/Form/Form.module.css'

interface FormProps {
  fetchClima: (buscador: buscartype) => Promise<void>
}

const Form: React.FC<FormProps> = ({ fetchClima }) => {


  const [buscador, setBuscador] = useState<buscartype>({
    city: '',
    country: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setBuscador({
      ...buscador,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (Object.values(buscador).includes('')) {
      toast.error('Hay campos vacios')
      console.log('Hay campos vacios')
      return
    }
    fetchClima(buscador)
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >

      <div className={styles.field}>
        <label htmlFor='city'>Ciudad:</label>
        <input
          id='city'
          name='city'
          type='text'
          placeholder='Ciudad'
          value={buscador.city}
          onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor='country'>País:</label>
        <select
          id='country'
          name='country'
          value={buscador.country}
          onChange={handleChange}>
          <option value=''>
            -- Seleccione un País --
          </option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>{country.name}</option>
          ))}
        </select>

      </div>
      <input className={styles.submit} type='submit' value='Consultar Clima' />
    </form>
  )
}

export { Form }