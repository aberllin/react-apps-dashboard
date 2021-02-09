import React, { useState } from 'react'
import { ShareForm } from './ShareForm'
import { FormSuccess } from './FormSuccess'

export const ShareOption = () => {
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
    <>
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
    </>
  )
}
