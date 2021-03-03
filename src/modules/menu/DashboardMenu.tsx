import React, { useState, useRef } from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import styled from 'styled-components'
import background_img from '../../images/background_img.jpeg'
import { IoImageOutline } from 'react-icons/io5'
import { useOutsideClick } from '../../components/hooks/useOutsideClick'

interface Props {
  setBackground: (value: string) => void
}

export const DashboardMenu = ({ setBackground }: Props) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
  const ref = useRef(null)

  useOutsideClick(ref, () => {
    return isOpenMenu ? setIsOpenMenu(false) : null
  })

  const handleBackground = (event: any) => {
    const reader: FileReader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        setBackground(reader.result as string)
      }
    }
    reader.readAsDataURL(event.target.files[0])
  }

  return (
    <>
      <OptionIcon onClick={() => setIsOpenMenu((prev) => !prev)}>
        <HiDotsHorizontal />
      </OptionIcon>
      {isOpenMenu ? (
        <MenuWrapper ref={ref}>
          <Input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input"
            onChange={handleBackground}
          />
          <label htmlFor="input" style={{ cursor: 'pointer' }}>
            <IoImageOutline />
            Set background image
          </label>
          <Option onClick={() => setBackground(background_img)}>
            Set default background
          </Option>
        </MenuWrapper>
      ) : null}
    </>
  )
}

const MenuWrapper = styled.div`
  background: #fcf6ec;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  max-width: 234px;
  max-height: 200px;
  position: relative;
  top: 515px;
  left: 65px;
  z-index: 100;

  @media screen and (max-width: 1300px) {
    top: 480px;
  }

  @media screen and (max-width: 1024px) {
    top: 400px;
    left: 10px;
  }
`

const OptionIcon = styled.div`
  color: #fcf6ec;
  position: absolute;
  bottom: 18px;
  left: 160px;
  font-size: 45px;

  @media screen and (max-width: 1024px) {
    left: 90px;
  }

  @media screen and (max-width: 834px) {
    left: 75px;
    font-size: 35px;
    bottom: 15px;
  }
`

const Input = styled.input`
  display: none;
`

const Option = styled.div`
  cursor: pointer;
`
