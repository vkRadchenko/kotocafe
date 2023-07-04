import { AppStyles, PageWrapper } from 'app.styled'
import Main from './layout/main/main'
import NotFoundPage from 'layout/404/notFoundPage'
import Contact from 'layout/contact/contact'
import Header from 'features/header/header'
import Footer from 'components/blocks/footer/footer'
import { Routes, Route } from 'react-router-dom'
import Cats from './layout/cats/cats'
import Login from 'layout/login/login'
import { ToastContainer } from 'react-toastify'
import LogOut from 'layout/logOut/logOut'
import CreateCat from 'layout/createCat/createCat'
import UserDetalPage from 'components/pages/userDetalPage/userDetalPage'
import AppLoader from 'components/ui/hoc/appLoader'

function App(): JSX.Element {
  return (
    <>
      <AppLoader>
        <AppStyles />
        <PageWrapper>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/cats/:catId?/:edit?" element={<Cats />} />
            <Route path="/users/:userId?/:edit?" element={<UserDetalPage />} />
            <Route path="/additem" element={<CreateCat />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login/:type?" element={<Login />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </PageWrapper>
        <ToastContainer />
      </AppLoader>
    </>
  )
}
export default App
