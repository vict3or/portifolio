import Footer from '../components/footer'
import Nav from '../components/Nav'
import styles from '../styles/about.module.css'

export default function About() {
  return (
    <div>
      <Nav />
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutMain}>
          <div className={styles.aboutLife}>
            <h2>Sobre</h2>
            <p>Moro em Uberlândia, Minas Gerais, desde meu nascimento.
            Sou um nerd, programador, viciado em conhecimento e músico.
            </p>
          </div>
          <div className={styles.aboutLife}>
            <h2>Música</h2>
            <p>Desde pequeno eu nutro um grande amor por música, sendo um autodidata no violão e compondo por hobbie desde os doze anos.</p>
            <a href="https://open.spotify.com/artist/3FDiWJJ0w4K2P6XC0GJXvF?si=HZBy-1e1TmWxuIvXJmC9nw">Conheça minha página no spotfy</a>   
          </div>
          <div className={styles.aboutProgramming}>
            <h2>Programação</h2>
            <p>Por muitos anos tive duvidas sobre o que fazer da vida,
            qual profissão escolher, até que em uma conversa despojada
            com um amigo programador, me foi sugerido que tentasse programar.
            Apesar da desconfiança, resolvi dar uma chance.
            E como foi surpreendente descobrir que finalmente eu havia me achado!
            Tantos anos sendo um nerd inveterado na frente dos computadores e resolvendo
            quebra cabeças, pra descobrir que da pra trabalhar com isso!
            Me apaixonei pelo código, pelo ato de "codar" e hoje o que mais quero fazer da vida é
            continuar quebrando a cabeça com esses quebra-cabeças da programação.
             </p>
          </div>
          <div className={styles.aboutLanguages}>
            <h2>Linguagens e tecnologias</h2>
            <ul>
              <li>Javascript</li>
              <li>CSS</li>
              <li>React</li>
              <li>Html</li>
              <li>Python</li>
              <li>git</li>
              <li>Inglês avançado</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}