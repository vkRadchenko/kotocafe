import { useEffect } from 'react'
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
import AuthProvider from 'hooks/useAuth'
import LogOut from 'layout/logOut/logOut'
import CreateCat from 'layout/createCat/createCat'
import { CatProvider } from 'hooks/useCat'
import UserDetalPage from 'components/pages/userDetalPage/userDetalPage'
import { useDispatch } from 'react-redux'
import { loadQualitiesList } from 'store/qualities'

function App(): JSX.Element {
  const dispatch: any = useDispatch()

  useEffect(() => {
    dispatch(loadQualitiesList())
  }, [dispatch])

  return (
    <>
      <AppStyles />
      <PageWrapper>
        <AuthProvider>
          <CatProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/cats/:catId?/:edit?" element={<Cats />} />
              <Route
                path="/users/:userId?/:edit?"
                element={<UserDetalPage />}
              />
              <Route path="/additem" element={<CreateCat />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login/:type?" element={<Login />} />
              <Route path="/logout" element={<LogOut />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </CatProvider>
        </AuthProvider>
        <Footer />
      </PageWrapper>
      <ToastContainer />
    </>
  )
}
export default App
