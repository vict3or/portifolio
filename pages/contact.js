import Footer from '../components/Footer/Footer'
import Nav from '../components/Nav/Nav'

import {
  Container,
  Wrapper,
  Main,
  Box,
  Title,
  SubTitle,
  Paragraph,
  ContactLink
} from '../styles/contactStyles'

export default function Contact() {
  return (
    <Container>
      <Nav contact="#eeeeee"/>
      <Wrapper>
        <Main>
          <Title>Contato</Title>
          <Box>
            <SubTitle>Email</SubTitle>
            <Paragraph>Oliveira.vitoco@gmail.com</Paragraph>
          </Box>
          <Box>
            <SubTitle>Telefone</SubTitle>
            <Paragraph>(34) 99986-5449</Paragraph>
          </Box>
          <Box>
            <SubTitle>Github</SubTitle>
            <ContactLink href="https://github.com/vict3or/" target="_blank">https://github.com/vict3or/</ContactLink>
          </Box>
          <Box>
            <SubTitle>Linkedin</SubTitle>
            <ContactLink href="https://www.linkedin.com/in/victor-ribeiro-oliveira/" target="_blank">https://www.linkedin.com/in/victor-ribeiro-oliveira/</ContactLink>
          </Box>
        </Main>
      </Wrapper>
      <Footer />
    </Container>
  )
}