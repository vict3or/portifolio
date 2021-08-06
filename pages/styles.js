import styled from "styled-components";

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

  @media (min-width: 801px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 801px) {
    align-items: center;
  }
`

export const ProjectsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`


export const CardsBox = styled.div`
  @media (min-width: 801px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1.3rem 0.5rem 1.3rem 0.5rem;
  border-radius: 0.37rem;
  background: #fff;
  box-shadow: 1px 1px 6px -4px grey;

  @media (min-width: 801px) {
    width: 345px;
    margin: 1.3rem 0 0 0;
  }
`

export const ImageContainer = styled.div`
  display: flex;
` 

export const ProjectDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding:1.25rem;
`

export const NameBox = styled.div`
  display: flex;
  align-items: center;
`

export const LogoBox = styled.div`
  height: 100%;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  line-height: 1.33;
  font-weight: 700;
  color: #262626;
  height: 20px;
`

export const Paragraph = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: #6b6b6b;
  font-family: Arial;
  letter-spacing: 2px;
`

export const Image = styled.img`
  width: 100%;
  border: 1px solid #eaeaea;
  border-radius: 0.22rem;
`

export const ProjectParagraph = styled.p`
  word-wrap: break-word;
  margin: 0.5rem 0 0;
  color: #6b6b6b;
  font-size: 1rem;
  text-align: left;
`

export const CardTitle = styled.h3`
  font-size: 1.3rem;
  margin: 0;
  line-height: 1.2;
  font-weight: 700;
  color: #262626;
`

export const CardLink = styled.a`
  margin: 3px;
`

export const ImageLink = styled.a``

export const CardImage = styled.img`
  width: 20px;
  height: 20px;
`
