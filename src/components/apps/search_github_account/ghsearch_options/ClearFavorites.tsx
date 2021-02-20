import styled from 'styled-components'

export const ClearFavorites = () => {
  const handleClear = () => {
    localStorage.removeItem('favorites')
  }
  return (
    <>
      <ClearMessage>Do you want to clear your favorites?</ClearMessage>
      <ClearButton
        onClick={() => {
          handleClear()
        }}
      >
        Clear
      </ClearButton>
    </>
  )
}

const ClearMessage = styled.div`
  font-size: 25px;
`
const ClearButton = styled.div`
  outline: none;
  font-size: 17px;
  border: none;
  padding: 7px 18px;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  background: gainsboro;
  cursor: pointer;
  &:hover {
    background: red;
    color: white;
  }
  &:focus {
    color: red;
  }

  @media screen and (max-width: 600px) {
    font-size: 20px;
    margin: 20px auto;
  }

  @media screen and (max-width: 400px) {
    font-size: 15px;
    margin: 10px auto;
  }
`
