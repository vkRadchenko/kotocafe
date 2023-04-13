import { AppStyles, PageWrapper } from 'app.styled'
import Main from './layout/main'
import Header from 'features/header/header'
import Footer from 'components/blocks/footer/footer'

function App(): JSX.Element {
  return (
    <>
      <AppStyles />
      <PageWrapper>
        <Header />
        <Main />
        <Footer />
      </PageWrapper>
    </>
  )
}
export default App
