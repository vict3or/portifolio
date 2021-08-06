import styled, { css } from 'styled-components'

export const Container = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 801px) {
    justify-content: center;
  }
`

export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20vh;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: black;


  @media (min-width: 801px) {
    height: 80px;
    max-width: 48rem;
    padding-left: 2rem;
    padding-right: 2rem;
    justify-content: space-around;
  }
`

export const Logo = styled.div`
  width: 70%;
  display: flex;

  @media (min-width: 801px) {
    position: relative;
    width: 70%;
    display: flex;
    align-items: center;
  }
`

export const Image = styled.img`
  width: 227px;

  @media (min-width: 801px) {
    width: 227px;
    margin-bottom: 6px;
    cursor: pointer;
  }
`

export const Pages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 10px;

  @media (min-width: 801px) {
    width: 40%;
    padding: 10px;
    flex-direction: row;
    justify-content: space-around;
  }
`

export const NavLink = styled.a`
  font-size: 25px;
  letter-spacing: 0.5px;
  line-height: 1.3;
  text-decoration: none;
  color: #b3b3b3;
  margin: 0 0 2px 2px;
  cursor: pointer;

  ${props => props.contact || props.about || props.home && css`
    color: #eeeeee
  `}
  
  @media (min-width: 801px) {
    font-size: 25px;
    transition: 0.3s;

    :hover {
      filter: brightness(170%);
    }
  }
`