import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

export const GHDataFetching = () => {
  const [searchInput, setSearchInput] = useState<string>('')

  const inputSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!searchInput && e.target.value === ' ') {
      return false
    } else {
      setSearchInput(e.target.value)
    }
  }

  const [users, setUsers] = useState<any>([])

  useEffect(() => {
    axios.get('https://api.github.com/users/ruslanakholod').then((res) => {
      setUsers(res.data)
    })
  }, [])

  console.log(users)

  const filteredUser = users.filter((user: { login: any }) => {
    if (user.login.toLowerCase().includes(searchInput.toLowerCase())) {
      return user
    } else {
      return 'none'
    }
  })

  console.log(filteredUser)

  return (
    <div>
      <StyledInput
        value={searchInput}
        type="text"
        placeholder="GitHub username"
        autoFocus
        onChange={inputSearchHandler}
      />
      <ul>
        {filteredUser.map((user: any) => {
          return (
            <>
              <li key={user.id}>{user.login}</li>
              <Image background={user.avatar_url} />
            </>
          )
        })}
      </ul>
    </div>
  )
}

const Image = styled.div<{ background: any }>`
  background: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  border: 1px solid #faf4f4;
  width: 150px;
  height: 150px;
`

const StyledInput = styled.input`
  outline: 0;
  background: #c4c4c4;
  border: 0;
  height: 48px;
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;
  font-size: 14px;
  padding: 15px;
`
