import React from 'react'
import styled from 'styled-components'
import { GHUserType } from '../types'

export const ShowFavorites = () => {
  const favoriteUsers = localStorage.getItem('favorites')
  const parsedFavorites: GHUserType[] = favoriteUsers
    ? JSON.parse(favoriteUsers)
    : []

  return (
    <>
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
    </>
  )
}

const FavUserWrapper = styled.div`
  display: flex;
  justify-content: space-around;
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
