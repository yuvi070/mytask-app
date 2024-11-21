import styled from 'styled-components'

export const Main = styled.div`
  height: 100vh;
`
export const Body = styled.div`
  display: flex;
  height: 100%;
`
export const LeftDiv = styled.div`
  background-color: #131213;
  width: 30%;
  padding-top: 50px;
  padding-left: 20px;
  padding-right: 20px;
`
export const RightDiv = styled.div`
  background-color: #000000;
  padding-top: 50px;
  width: 70%;
  padding-left: 8px;
  padding-right: 8px;
`
export const MainHeading = styled.h1`
  color: #f3aa4e;
  text-align: center;
`

export const Form = styled.form``

export const Label = styled.label`
  color: white;
  font-weight: 400;
  font-size: 22px;
`

export const Input = styled.input`
  padding-left: 10px;
  background-color: white;
  border: 0px;
  width: 100%;
  border-radius: 4px;
  height: 40px;
  margin-top: 7px;
`
export const Select = styled.select`
  padding-left: 10px;
  background-color: white;
  border: 0px;
  width: 100%;
  border-radius: 4px;
  height: 40px;
  margin-top: 7px;
  outline: none;
`
export const InputDiv = styled.div`
  margin-bottom: 25px;
`
export const Button = styled.button`
  width: 25%;
  height: 35px;
  background-color: #f3aa4e;
  color: white;
  font-weight: 500;
  margin: auto;
  text-align: center;
  border: 0px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  font-size: 16px;
`
export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`
export const SubHeading = styled.h1`
  font-weight: 500;
  color: white;
  font-size: 28px;
`

export const TagsDiv = styled.ul`
  display: flex;
  padding-left: 0px;
  list-style: none;
`
export const TaskDiv = styled.ul`
  padding-left: 0px;
  list-style: none;
`

export const NoTaskDiv = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 30px;
  color: #f1f5f9;
  font-weight: bold;
`
