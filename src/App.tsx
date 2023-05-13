import { AppStyles, PageWrapper } from 'app.styled'
import Main from './layout/main/main'
import Helping from 'layout/help/helping'
import NotFoundPage from 'layout/404/notFoundPage'
import Contact from 'layout/contact/contact'
import Header from 'features/header/header'
import Footer from 'components/blocks/footer/footer'
import { Routes, Route } from 'react-router-dom'
import CatDetalPage from 'components/pages/catDetalPage/catDetalPage'

function App(): JSX.Element {
  return (
    <>
      <AppStyles />
      <PageWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cat/:id" element={<CatDetalPage />} />
          <Route path="/helping" element={<Helping />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </PageWrapper>
    </>
  )
}
export default App
