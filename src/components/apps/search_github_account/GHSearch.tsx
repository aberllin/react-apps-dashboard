import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { GHDataFetching } from './GHDataFetching'
import { useNotification } from '../../../providers/NotificationProvider'
import { AppWindow } from '../../AppWindow'
import { ShowFavorites } from './ghsearch_options/ShowFavorites'
import { ClearFavorites } from './ghsearch_options/ClearFavorites'
import { AppOption } from '../../../modules/appsData'

type Props = {
  id: string
  isCollapsed: boolean
  onCollapse: (id: string) => void
  onClose: (id: string) => void
  coordinates: { left: number; top: number }
}

export const GHSearch = ({
  isCollapsed,
  onCollapse,
  id,
  onClose,
  coordinates,
}: Props) => {
  const [searchInput, setSearchInput] = useState<string>('')
  const [optionModal, setOptionModal] = useState<null | string>(null)

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

  const options: AppOption[] = [
    {
      title: 'Show favorites',
      component: <ShowFavorites onClose={() => setOptionModal(null)} />,
    },
    {
      title: 'Clear favorites',
      component: <ClearFavorites onClose={() => setOptionModal(null)} />,
    },
  ]

  return (
    <AppWindow
      coordinates={coordinates}
      id={id}
      isCollapsed={isCollapsed}
      onCollapse={onCollapse}
      onClose={onClose}
      options={options}
      optionModal={optionModal}
      setOptionModal={setOptionModal}
    >
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
    </AppWindow>
  )
}

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 900px;
  margin: 50px auto;

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
  max-width: 80%;
  border: 0;
  height: 52px;
  box-sizing: border-box;
  font-size: 14px;
  padding: 15px;
  border-radius: 20px;
`
