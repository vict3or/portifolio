import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Wrapper = styled.div`
  margin-bottom: 5rem;
  min-height: calc(100% - (140px + 100px));

  @media (min-width: 801px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`

export const Main = styled.div`
  max-width: 48rem;
  padding-left: 2rem;
  padding-right: 2rem;
`

export const Box = styled.div`
`

export const Title = styled.h2`
  color: #262626;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.33;
`

export const Paragraph = styled.p`
  color: #6b6b6b;
  font-size: 1.5rem;
  text-decoration: none;
  transition: .3s;
`

export const AboutLink = styled.a`
  color: #0645AD;
  font-size: 1.5rem;
  text-decoration: none;
  transition: .3s;

  :hover {
    filter: brightness(150%);
  }
`

export const UnorderedList = styled.ul`
`

export const ListItem = styled.li`
  font-size: 1.5rem;
  color: #6b6b6b;
`