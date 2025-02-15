export type buscartype = {
  city: string,
  country: string
}

export type contryType = {
  code: string
  name: string
}

export type Weather = {
  name: string
  main: {
    temp: number
    temp_max: number
    temp_min: number
  }
}