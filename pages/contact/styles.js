import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Wrapper = styled.div`
  margin-bottom: 5rem;

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

export const SubTitle = styled.h3`
  font-size: 1.7rem;
`

export const Paragraph = styled.p`
  color: #6b6b6b;
  font-size: 1.5rem;
`

export const ContactLink = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  color: #0645AD;
  transition: .3s;

  :hover {
  filter: brightness(150%);
  }
`