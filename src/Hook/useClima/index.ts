import { useState, useMemo } from 'react'
import axios from 'axios'
import { z } from 'zod'


import { buscartype } from '@/types'

//Valibot
const Weather = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    temp_max: z.number(),
    temp_min: z.number(),
  })
})
export type Weather = z.infer<typeof Weather>


function FetchClima() {

  const [clima, setClima] = useState<Weather>({
    name: '',
    main: {
      temp: 0,
      temp_max: 0,
      temp_min: 0
    }
  })

  const fetchClima = async (buscador: buscartype) => {
    const apiKey = import.meta.env.VITE_API_KEY

    try {
      const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${buscador.city},${buscador.country}&appid=${apiKey}`

      const { data } = await axios.get(geoUrl)

      const lat = data[0].lat
      const lon = data[0].lon

      const clima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`

      const { data: weatherResult } = await axios(clima)
      const result = Weather.safeParse(weatherResult)
      if (result.success) {
        setClima(result.data)
      }
    } catch (error) {
      console.log(error)
      }
    }

    const climaMemo = useMemo(() => clima, [clima])
  
    return {
      clima,
      fetchClima,
      climaMemo
    }
  }


  export default FetchClima 