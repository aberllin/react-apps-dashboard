import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { GHDataFetching } from './GHDataFetching'
import { useNotification } from '../../../providers/NotificationProvider'

export const GHSearch = () => {
  const [searchInput, setSearchInput] = useState<string>('')

  const notify = useNotification()

  useEffect(() => {
    window.addEventListener('offline', function (e) {
      notify.error("You're offline")
    })
  }, [notify])

  const inputSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!searchInput && e.target.value === ' ') {
      return false
    } else {
      setSearchInput(e.target.value)
    }
  }

  return (
    <>
      <FormWrapper>
        <StyledInput
          value={searchInput}
          type="text"
          placeholder="GitHub username"
          autoFocus
          onChange={inputSearchHandler}
        />
      </FormWrapper>
      <GHDataFetching searchInput={searchInput} />
    </>
  )
}

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  margin: auto;
`
const StyledInput = styled.input`
  outline: 0;
  background: #c4c4c4;
  width: 85%;
  border: 0;
  height: 48px;
  box-sizing: border-box;
  font-size: 14px;
  padding: 15px;
`
