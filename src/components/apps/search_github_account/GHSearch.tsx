import React, { useState } from 'react'
import styled from 'styled-components'
import { GHDataFetching } from './GHDataFetching'

export const GHSearch = () => {
  return (
    <>
      <FormWrapper>
        <GHDataFetching />
      </FormWrapper>
    </>
  )
}

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
`
