import styles from  '../styles/nav.module.css'
import Link from 'next/link'

export default function Nav() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/victor-logo-white.png" alt="logo"/>
        <h1>Victor Oliveira</h1>
      </div>
      <div className={styles.pages}>
        <Link href="/"><a >Home</a></Link>
        <Link href="/about"><a >Sobre</a></Link>
        <Link href="/Contact"><a >Contato</a></Link>
      </div>
     
    </div>
  )
}