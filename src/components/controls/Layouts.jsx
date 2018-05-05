import styled from 'styled-components'

export const Body = styled.article`
  grid-area: body
`

export const Footer = styled.footer`
  grid-area: footer
`

export const Header = styled.header`
  height: 3em;
  display: flex;
  background-color: palevioletred;
  grid-area: header
`

export const Section = styled.section`
  display: grid;
  grid-template-rows: 3em 1fr 4em;
  grid-template-columns: 1fr;
  min-height: 100vh;
  grid-template-areas: 
    "header"
    "body"
    "footer"
`

export const Sidebar = styled.aside`
  grid-area: sidebar
`
