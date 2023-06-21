function generetAuthError(message: any) {
  switch (message) {
    case 'INVALID_PASSWORD':
      return 'Email или пароль введены не корректно'
    case 'EMAIL_EXISTS':
      return 'Пользователь с таким email уже существует'

    default:
      return 'Слишком много попыток входаю Попробуйте позже.'
  }
}
export default generetAuthError
