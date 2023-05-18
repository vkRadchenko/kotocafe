import styled, { createGlobalStyle } from 'styled-components'

export const AppStyles = createGlobalStyle`
body{
  -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: normal;
    color: #5e5873;
    min-width: 320px;
}

*,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
  ul, li {
    list-style: none;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  tr,
  td,
  th,
  p,
  button,
  ul,
  li,
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
  h1, .h1 {
    font-size: 26px;
  }
  h2, .h2 {
    font-size: 22px;
  }
  h3, .h3 {
    font-size: 18px;
  }
  h4, .h4 {
    font-size: 16px;
  }
  h5, .h5{
    font-size: 14px;
  }
  p, li {
    line-height: 21px;
  }
`

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
