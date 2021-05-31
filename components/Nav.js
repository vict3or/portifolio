import Link from 'next/link'

import styles from '../styles/nav.module.css'

export default function Nav(props) {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
         <Link href="/"><img src="/victor-horizontal-white.png" alt="logo"/></Link> 
        </div>
        <div className={styles.pages}>
          <Link href="/" ><a style={{color: props.home}}>Home</a></Link>
          <Link href="/about"><a style={{color: props.about}}>Sobre</a></Link>
          <Link href="/contact"><a style={{color: props.contact}}>Contato</a></Link>
        </div>
      </div>
    </div>
  )
}