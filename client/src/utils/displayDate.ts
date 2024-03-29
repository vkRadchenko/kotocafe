export function displayDate(data: number) {
  const date = new Date(data)
  const dateNow = new Date()
  const yearDif = dateNow.getFullYear() - date.getFullYear()

  const formatter = new Intl.DateTimeFormat('ru', {
    month: 'long',
    day: 'numeric',
  })

  if (yearDif === 0) {
    const dayDif = dateNow.getDate() - date.getDate()
    if (dayDif === 0) {
      const hourDif = dateNow.getHours() - date.getHours()
      if (hourDif === 0) {
        const minutesDif = dateNow.getMinutes() - date.getMinutes()

        if (minutesDif >= 0 && minutesDif < 5) return '1 минуту назад'
        if (minutesDif >= 5 && minutesDif < 10) return '5 минут назад'
        if (minutesDif >= 10 && minutesDif < 30) {
          return '10 минут назад'
        }
        return '30 минут назад'
      }
      return `Сегодня ${date.getHours()}:${date.getMinutes()}`
    }

    return `${formatter.format(date)}`
  }
  return date.getFullYear() + '.' + (date.getMonth() + 1) + '_' + date.getDate()
}
