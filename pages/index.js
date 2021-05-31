import styles from '../styles/home.module.css'
import Nav from '../components/Nav'
import Footer from '../components/footer'
import { useEffect, useState } from 'react'
function Home() {

  const [storeData, setStoreData] = useState('')
  const [isFetched, setIsFetched] = useState(false)

  useEffect(() => {
    fetch('https://portifolio-bice-three.vercel.app/api/card')
      .then((response) => response.json())
      .then((data) => {
        setStoreData(() => data)
        setIsFetched(() => true)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      <Nav home="#eeeeee"/>
      <div className={styles.main}>
        <div className={styles.homeWrapper}>
          <div className={styles.descriptionContainer}>
            <h1>Bem vindo!</h1>
            <p>Sou um Front-End developer, amante dos quebra-cabeças e apaixonado em solucionar problemas.</p>
          </div>
          <div className={styles.projectsContainer}>
            <h1>Projetos</h1>
            <div className={styles.projectsCardContainer}>
              {isFetched && storeData.map(data => {
                return (
                  <div className={styles.projectsCard} key={data['id']}>
                    <div className={styles.imageContainer}>
                      <img src={data['image']} alt={data['alt']} />
                    </div>
                    <div className={styles.projectDescriptionContainer}>
                      <div className={styles.projectNameContainer}>
                        <h3>{data['name']}</h3>
                        <div className={styles.logoContainer}>
                          <a href={data['github']} target="_blank"><img src="github-sign.png" /></a>
                          <a href={data['link']} target="_blank"><img src="link-symbol.png" /></a>
                        </div>
                      </div>
                      <p>{data['description']}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default Home