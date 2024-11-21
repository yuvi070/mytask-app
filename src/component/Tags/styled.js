import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${props => (props.show ? '#f3aa4e' : 'transparent')};
  border: ${props => (props.show ? '0px' : '1px solid white')};
  border-radius: 9px;
  color: white;
  font-size: 20px;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
  outline: none;
`
export const List = styled.li`
  margin-right: 10px;
`
