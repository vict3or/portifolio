import Head from 'next/head'

import Footer from '../components/footer'
import Nav from '../components/Nav'

import styles from '../styles/home.module.css'

import { getProjects } from '../lib/api'

function Home({ projects }) {
  return (
    <div>
      <Head>
        <title>Victor Oliveira</title>
      </Head>

      <Nav home="#eeeeee" />
      <div className={styles.main}>
        <div className={styles.homeWrapper}>
          <div className={styles.descriptionContainer}>
            <h1>Bem vindo!</h1>
            <p>Sou um Front-End developer, amante dos quebra-cabeças e apaixonado em solucionar problemas.</p>
          </div>

          <div className={styles.projectsContainer}>
            <h1>Projetos</h1>

            <div className={styles.projectsCardContainer}>
              {projects.map(project =>
                <div className={styles.projectsCard} key={project.id}>
                  <div className={styles.imageContainer}>
                    <img src={project.image?.url} alt={project.image?.alt} />
                  </div>

                  <div className={styles.projectDescriptionContainer}>
                    <div className={styles.projectNameContainer}>
                      <h3>{project.name}</h3>

                      <div className={styles.logoContainer}>
                        <a href={project.repository} target="_blank">
                          <img src="github-sign.png" />
                        </a>
                        <a href={project.url} target="_blank">
                          <img src="link-symbol.png" />
                        </a>
                      </div>
                    </div>
                    <p>{project.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div >
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