
function formatoTemp(temp: number): string {
  const kelvin = 273.15
  return parseInt((temp - kelvin).toFixed(0)).toString() 
}

export { formatoTemp }