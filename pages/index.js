import Head from 'next/head'

import Footer from '../components/Footer/Footer'
import Nav from '../components/Nav/Nav'

import { getProjects } from '../lib/api'

import {
  Container,
  Wrapper,
  Main,
  DescriptionBox,
  ProjectsBox,
  CardsBox,
  Title,
  Paragraph,
  Card,
  ImageContainer,
  Image,
  ProjectDescriptionBox,
  ProjectParagraph,
  NameBox,
  CardTitle,
  LogoBox,
  CardLink,
  CardImage,
  ImageLink
} from './styles'

function Home({ projects }) {
  return (
    <Container>
      <Head>
        <title>Victor Oliveira</title>
      </Head>

      <Nav home="#eeeeee" />
      <Wrapper>
        <Main>
          <DescriptionBox>
            <Title>Bem vindo!</Title>
            <Paragraph>Sou um Front-End developer, amante dos quebra-cabeças e apaixonado em solucionar problemas.</Paragraph>
          </DescriptionBox>

          <ProjectsBox>
            <Title>Projetos</Title>

            <CardsBox>
              {projects.map(project =>
                <Card key={project.id}>
                  <ImageContainer>
                    <ImageLink href={project.url} target="_blank">
                      <Image src={project.image?.url} alt={project.image?.alt} />
                    </ImageLink>
                  </ImageContainer>

                  <ProjectDescriptionBox>
                    <NameBox>
                      <CardTitle>{project.name}</CardTitle>

                      <LogoBox>
                        <CardLink href={project.repository} target="_blank">
                          <CardImage src="github-sign.png" />
                        </CardLink>
                        <CardLink href={project.url} target="_blank">
                          <CardImage src="link-symbol.png" />
                        </CardLink>
                      </LogoBox>
                    </NameBox>
                    <ProjectParagraph>{project.description}</ProjectParagraph>
                  </ProjectDescriptionBox>
                </Card>
              )}
            </CardsBox>
          </ProjectsBox>
        </Main>
      </Wrapper>
      <Footer />
    </Container >
  )
}

export async function getStaticProps() {
  const projects = await getProjects()

  return {
    props: {
      projects,
    },
    revalidate: 60
  }
}

export default Home