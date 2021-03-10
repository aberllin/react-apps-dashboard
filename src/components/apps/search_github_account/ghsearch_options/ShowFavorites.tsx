import React from 'react'
import styled from 'styled-components'
import { GHUserType } from '../types'

export const ShowFavorites = () => {
  const favoriteUsers = localStorage.getItem('favorites')
  const parsedFavorites: GHUserType[] = favoriteUsers
    ? JSON.parse(favoriteUsers)
    : []

  return (
    <Wrapper>
      {parsedFavorites.length > 0 ? (
        parsedFavorites.map((favUser) => (
          <FavUserWrapper>
            <Image background={favUser.avatar_url} />
            <LinktoUser href={`https://github.com/${favUser.login}`}>
              {favUser.login}
            </LinktoUser>
          </FavUserWrapper>
        ))
      ) : (
        <div style={{ color: 'red' }}>You don't have any</div>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  background: white;
  border: 5px solid #2e3a59;
  width: 500px;
  border-radius: 20px;
  height: 700px;
  left: 30%;
  padding: 20px;
  top: 5%;
  z-index: 10;
`

const FavUserWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`

const Image = styled.div<{ background: string }>`
  background: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  border: 1px solid #faf4f4;
  width: 80px;
  height: 80px;
`
const LinktoUser = styled.a`
  padding: 25px;
  color: #ffe227;
`
