import Footer from '../components/footer'
import Nav from '../components/Nav'
import style from '../styles/contact.module.css'

export default function Contact() {
  return (
    <div>
      <Nav />
      <div className={style.contactWrapper}>
        <div className={style.contactContact}>
          <h2>Contato</h2>
          <div className={style.contactEmail}>
            <h3>Email</h3>
            <p>Oliveira.vitoco@gmail.com</p>
          </div>
          <div className={style.contactPhone}>
            <h3>Telefone</h3>
            <p>(34) 99986-5449</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}