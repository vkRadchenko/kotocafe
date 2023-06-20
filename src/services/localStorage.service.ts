const TOKEN_KEY = 'jwt-token'
const REFRESH_KEY = 'jwt-refresh-token'
const EXPIRES_KEY = 'jwt-expires-token'
const USERID_KEY = 'user-local-token'

export function setTokens({
  refreshToken,
  idToken,
  localId,
  expiresIn = 3600,
}: {
  refreshToken: string
  idToken: string
  localId: string
  expiresIn?: number
}) {
  const expiresDate = new Date().getTime() + Number(expiresIn) * 1000
  localStorage.setItem(USERID_KEY, localId)
  localStorage.setItem(TOKEN_KEY, idToken)
  localStorage.setItem(REFRESH_KEY, refreshToken)
  localStorage.setItem(EXPIRES_KEY, expiresDate.toString())
}

export function getAccessToken() {
  return localStorage.getItem(TOKEN_KEY)
}

export function getRefreshToken() {
  return localStorage.getItem(REFRESH_KEY)
}
export function getTokenExpiresDate() {
  return localStorage.getItem(EXPIRES_KEY)
}
export function getUserId() {
  return localStorage.getItem(USERID_KEY)
}
export function removeAuthData() {
  localStorage.removeItem(USERID_KEY)
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(REFRESH_KEY)
  localStorage.removeItem(EXPIRES_KEY)
}
const localStorageService = {
  setTokens,
  getAccessToken,
  getRefreshToken,
  getTokenExpiresDate,
  getUserId,
  removeAuthData,
}

export default localStorageService
