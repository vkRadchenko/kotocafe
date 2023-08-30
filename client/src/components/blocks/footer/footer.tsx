import { FooterWrapper } from './styled'

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <div className="container d-flex justify-content-between">
        <p>Радченко Владимир</p>
        <a href="https://github.com/vkRadchenko">Github</a>
      </div>
    </FooterWrapper>
  )
}

export default Footer
