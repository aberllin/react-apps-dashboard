import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { GHUser } from './GHUser'

interface Props {
  searchInput: string
}

export const GHDataFetching = ({ searchInput }: Props) => {
  const [users, setUsers] = useState<any>([])
  const [errors, setErrors] = useState('')

  const { REACT_APP_TOKEN } = process.env

  useEffect(() => {
    searchInput
      ? axios
          .get(`https://api.github.com/users/${searchInput}`, {
            headers: {
              Authorization: `token ${REACT_APP_TOKEN}`,
            },
          })
          .then((res) => {
            setErrors('')
            setUsers(res.data)
          })
          .catch((err) => setErrors(err.message))
      : setUsers([])
  }, [REACT_APP_TOKEN, searchInput])

  console.log('users: ', users)

  return (
    <div>
      <GHUser users={users} searchInput={searchInput} errors={errors} />
    </div>
  )
}
