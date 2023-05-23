import { AppStyles, PageWrapper } from 'app.styled'
import Main from './layout/main/main'
import NotFoundPage from 'layout/404/notFoundPage'
import Contact from 'layout/contact/contact'
import Header from 'features/header/header'
import Footer from 'components/blocks/footer/footer'
import { Routes, Route } from 'react-router-dom'
import CatDetalPage from 'components/pages/catDetalPage/catDetalPage'
import Cats from './layout/cats/cats'
import Login from 'layout/login/login'

function App(): JSX.Element {
  return (
    <>
      <AppStyles />
      <PageWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cats/:catId?" element={<Cats />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </PageWrapper>
    </>
  )
}
export default App
