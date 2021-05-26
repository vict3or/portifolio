import styles from '../styles/home.module.css'
import Nav from '../components/Nav'
import Footer from '../components/footer'
function Home() {

  return (
    <div>
      <Nav />
    <div className={styles.main}>
      <div className={styles.homeWrapper}>
        <div className={styles.descriptionContainer}>
          <h1>Bem vindo!</h1>
          <p>Sou um Front-End developer, amante dos quebra-cabeças e apaixonado em solucionar problemas.</p>
        </div>
        <div className={styles.projectsContainer}>
          <h1>Projetos</h1>
          <div className={styles.projectsCardContainer}>
            <button className={styles.projectsCard}>
              <div className={styles.imageContainer}>
                <img src="uberlandia.jpg" alt="logo" />
              </div>
              <div className={styles.projectDescriptionContainer}>
                <div className={styles.projectNameContainer}>
                  <h3>Nome</h3>
                  <div className={styles.logoContainer}>
                    <a href="https://github.com/vict3or"><img src="github-sign.png" /></a>
                    <a href="https://www.linkedin.com/in/victor-ribeiro-oliveira/"><img src="link-symbol.png" /></a>
                  </div>
                </div>
                <p>Description descriptiondfddfdfd iptiondescripti ondescription</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Home