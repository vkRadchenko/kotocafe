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

function App(): JSX.Element {
  return (
    <>
      <AppStyles />
      <PageWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cats/:catId?/:edit?" element={<Cats />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login/:type?" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </PageWrapper>
      <ToastContainer />
    </>
  )
}
export default App
