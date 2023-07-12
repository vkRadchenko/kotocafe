import { FC, PropsWithChildren } from 'react'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import history from 'utils/navigate'

const CustomRouter: FC<PropsWithChildren> = ({ children, ...props }) => {
  return (
    <HistoryRouter history={history} {...props}>
      {children}
    </HistoryRouter>
  )
}
export const rootNavigate = (to: string) => {
  history.push(to)
}

export default CustomRouter
