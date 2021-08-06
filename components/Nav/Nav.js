import Link from 'next/link'

import {
  Container,
  Main,
  Logo,
  Image,
  Pages,
  NavLink
} from './styles'

export default function Nav({home, about, contact}) {
  return (
    <Container>
      <Main>
        <Logo>
          <Link href="/"><Image src="/victor-horizontal-white.png" alt="logo" /></Link>
        </Logo>
        <Pages>
          <Link href="/" >
            <NavLink style={{ color: home }}>Home</NavLink>
          </Link>
          <Link href="/about">
            <NavLink style={{ color: about }}>Sobre</NavLink>
          </Link>
          <Link href="/contact">
            <NavLink style={{ color: contact }}>Contato</NavLink>
          </Link>
        </Pages>
      </Main>
    </Container>
  )
}