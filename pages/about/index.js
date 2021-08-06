import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Nav/Nav'

import {
  Container,
  Wrapper,
  Main,
  Box,
  Title,
  Paragraph,
  AboutLink,
  UnorderedList,
  ListItem
} from './styles'

export default function About () {
  return (
    <Container>
      <Nav about="#eeeeee" />
      <Wrapper>
        <Main>
          <Box>
            <Title>Sobre</Title>
            <Paragraph>Moro em Uberlândia, Minas Gerais, desde meu nascimento.
              Sou um nerd, programador, viciado em conhecimento e músico.
            </Paragraph>
          </Box>
          <Box>
            <Title>Música</Title>
            <Paragraph>Desde pequeno eu nutro um grande amor por música, sendo um autodidata no violão e compondo por hobbie desde os doze anos.</Paragraph>
            <AboutLink href="https://open.spotify.com/artist/3FDiWJJ0w4K2P6XC0GJXvF?si=HZBy-1e1TmWxuIvXJmC9nw" target="_blank">Conheça minha página no spotfy</AboutLink>
          </Box>
          <Box>
            <Title>Programação</Title>
            <Paragraph>Por muitos anos tive duvidas sobre o que fazer da vida,
              qual profissão escolher, até que em uma conversa despojada
              com um amigo programador, me foi sugerido que tentasse programar.
              Apesar da desconfiança, resolvi dar uma chance.
              E como foi surpreendente descobrir que finalmente eu havia me achado!
              Tantos anos sendo um nerd inveterado na frente dos computadores e resolvendo
              quebra cabeças, pra descobrir que da pra trabalhar com isso!
              Me apaixonei pelo código, pelo ato de "codar" e hoje o que mais quero fazer da vida é
              continuar quebrando a cabeça com esses quebra-cabeças da programação.
            </Paragraph>
          </Box>
          <Box>
            <Title>Linguagens e tecnologias</Title>
            <UnorderedList>
              <ListItem>Javascript</ListItem>
              <ListItem>React</ListItem>
              <ListItem>CSS</ListItem>
              <ListItem>HTML</ListItem>
              <ListItem>Python</ListItem>
              <ListItem>git/github</ListItem>
              <ListItem>Inglês fluente</ListItem>
            </UnorderedList>
          </Box>
        </Main>
      </Wrapper>
      <Footer />
    </Container>
  )
}
