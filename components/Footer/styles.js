import styled from 'styled-components'

export const FooterWrapper = styled.div`
  bottom: 0;
  color: #fff;
  height: 100px;
  background: black;
  border: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  flex-shrink: 0;
  margin-top: auto;
`

export const Container = styled.div`
`

export const Contact = styled.div`
  height: 80px;
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  svg {
    margin: 9px 0 0 2px;
  }
`

export const Image = styled.img`
  width: 207px;
  cursor: pointer;
`

export const FooterLink = styled.a`
  color: white;
`