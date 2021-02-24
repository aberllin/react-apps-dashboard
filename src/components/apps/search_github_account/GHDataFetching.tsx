import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { GHUser } from './GHUser'
import { GHUserType } from './types'

interface Props {
  searchInput: string
}

export const GHDataFetching = ({ searchInput }: Props) => {
  const [user, setUser] = useState<GHUserType | null>(null)
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
            setUser(res.data)
          })
          .catch((err) => setErrors(err.message))
      : setUser(null)
  }, [REACT_APP_TOKEN, searchInput])

  return (
    <>
      <GHUser user={user} searchInput={searchInput} errors={errors} />
    </>
  )
}
