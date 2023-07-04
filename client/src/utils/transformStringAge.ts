const transformStringAge = (length: string) => {
  const lastOne = Number(length)
  if (lastOne > 4 && lastOne <= 20) {
    return 'лет'
  }
  if (lastOne === 1) return 'год'
  if ([2, 3, 4].indexOf(lastOne) >= 0) return 'года'
  return ''
}

export default transformStringAge
