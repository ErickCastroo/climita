import { Weather } from '@/Hook/useClima'
import { formatoTemp } from '@/utils'
import styles from '@/components/ClimaDetalles/ClimaDetalles.module.css'

type WeatherDetailProps = {
  weather: Weather
}


function ClimaDetalles({ weather }: WeatherDetailProps) {
  return (
    <div className={styles.container}>
      <h2>Clima de: {weather.name}</h2>
      <p className={styles.current}>{formatoTemp(weather.main.temp)}&deg;C</p>
      <div className={styles.temperatures}>
        <p>Min: <span>{formatoTemp(weather.main.temp_min)}&deg;C</span> </p>
        <p>Max: <span>{formatoTemp(weather.main.temp_max)}&deg;C</span> </p>
      </div>
    </div>

  )
}

export { ClimaDetalles }