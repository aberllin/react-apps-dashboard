import React, { useState } from 'react'
import { ShareForm } from './ShareForm'
import { FormSuccess } from './FormSuccess'
import styled from 'styled-components'

type Props = {
  onClose: () => void
}

export const ShareOption = ({ onClose }: Props) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [errors, setErrors] = useState<string>('')
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    const isValid = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i.test(inputValue)

    if (!inputValue) {
      setErrors('Email required')
    } else if (isValid) {
      setErrors('Email address is invalid')
    } else {
      setIsSuccess(true)
    }
  }

  return (
    <Wrapper>
      <NavBar>
        <div>Share your Todo List</div>
        <div onClick={onClose}>x</div>
      </NavBar>
      {!isSuccess ? (
        <ShareForm
          errors={errors}
          value={inputValue}
          onInputChange={handleChange}
          onSubmitButton={onSubmit}
        />
      ) : (
        <FormSuccess />
      )}
    </Wrapper>
  )
}

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
`

const Wrapper = styled.div`
  position: fixed;
  background: white;
  border: 5px solid #2e3a59;
  width: 500px;
  border-radius: 20px;
  height: 300px;
  left: 30%;
  top: 30%;
  z-index: 10;
`
