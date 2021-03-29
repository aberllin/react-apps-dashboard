import React, { useState, useRef } from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import styled from 'styled-components'
import background_img from '../../images/background_img.jpeg'
import { IoImageOutline } from 'react-icons/io5'
import { useOutsideClick } from '../../components/hooks/useOutsideClick'
import { BsFillImageFill } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'
import { useWindows } from '../../providers/WindowsProvider'

type Props = {
  setBackground: (value: string) => void
}

export const DashboardMenu = ({ setBackground }: Props) => {
  const closeAllWindows = useWindows().closeAllWindows
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
      <OptionButton onClick={() => setIsOpenMenu((prev) => !prev)}>
        <HiDotsHorizontal />
      </OptionButton>
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
            <Option>
              <OptionIcon>
                <IoImageOutline />
              </OptionIcon>
              <OptionTitle>Set desktop image</OptionTitle>
            </Option>
          </label>

          <Option onClick={() => setBackground(background_img)}>
            <OptionIcon>
              <BsFillImageFill />
            </OptionIcon>
            <OptionTitle>Set default image</OptionTitle>
          </Option>
          <Option>
            <OptionIcon>
              <IoMdClose />
            </OptionIcon>
            <OptionTitle onClick={closeAllWindows}>Close all apps</OptionTitle>
          </Option>
        </MenuWrapper>
      ) : null}
    </>
  )
}

const MenuWrapper = styled.div`
  background: ${({ theme }) => theme.bodyColor};
  border-radius: 20px;
  width: 100%;
  height: 100%;
  max-width: 190px;
  max-height: 150px;
  position: relative;
  top: 520px;
  left: 90px;
  z-index: 100;
  padding: 15px;

  @media screen and (max-width: 1024px) {
    top: 680px;
    left: 10px;
  }
`

const OptionIcon = styled.div`
  font-size: 20px;
`

const OptionButton = styled.div`
  color: #fcf6ec;
  position: absolute;
  bottom: 18px;
  left: 160px;
  font-size: 45px;
  cursor: pointer;

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

const OptionTitle = styled.div`
  font-size: 15px;
  padding-left: 5px;
`

const Option = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  margin: 10px 0;
  transition: all ease 0.2s;

  &:hover {
    color: green;
  }
`
