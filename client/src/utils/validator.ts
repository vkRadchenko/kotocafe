export interface ValidatorConfig {
  [fieldName: string]: {
    [validateMethod: string]: {
      message: string
      value?: number
    }
  }
}

interface Data {
  [key: string]: string | boolean | undefined
}

export function validator(
  data: Data,
  config: ValidatorConfig
): { [fieldName: string]: string } {
  const errors: { [fieldName: string]: string } = {
    email: '',
    password: '',
    name: '',
  }

  function validate(
    validateMethod: string,
    data: string | boolean,
    config: { message: string; value?: number }
  ): string | undefined {
    let statusValidate: boolean = false
    switch (validateMethod) {
      case 'isRequired': {
        if (typeof data === 'boolean') {
          statusValidate = !data
        } else {
          statusValidate = data.trim() === ''
        }
        break
      }
      case 'isEmail': {
        const emailRegExp = /^\S+@\S+\.\S+$/g
        statusValidate = !emailRegExp.test(data as string)
        break
      }
      case 'isCapitalSymbol': {
        const capitalRegExp = /[A-Z]+/g
        statusValidate = !capitalRegExp.test(data as string)
        break
      }
      case 'isContainDigit': {
        const digitRegExp = /\d+/g
        statusValidate = !digitRegExp.test(data as string)
        break
      }
      case 'min': {
        statusValidate = (data as string).length < config.value!
        break
      }
      default:
        break
    }
    if (statusValidate) return config.message
  }

  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName] as string | boolean,
        config[fieldName][validateMethod]
      )
      if (error && !errors[fieldName]) {
        errors[fieldName] = error
      }
    }
  }

  return errors
}
