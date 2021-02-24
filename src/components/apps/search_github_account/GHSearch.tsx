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
        <GHDataFetching searchInput={searchInput} />
      </FormWrapper>
    </>
  )
}

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  @media screen and (max-width: 992px) {
    max-width: 800px;
  }

  @media screen and (max-width: 768px) {
    max-width: 700px;
  }

  @media screen and (max-width: 600px) {
    max-width: 400px;
  }

  @media screen and (max-width: 400px) {
    max-width: 300px;
  }
`
const StyledInput = styled.input`
  outline: 0;
  background: #c4c4c4;
  width: 100%;
  max-width: 1000px;
  border: 0;
  height: 48px;
  box-sizing: border-box;
  font-size: 14px;
  padding: 15px;
`
