import React, { useState } from 'react'
import background_img from '../../../images/background_img.jpeg'
import styled from 'styled-components'

export const Desktop = () => {
  const [backgroundImg, setBackgroundImg] = useState<string>(background_img)

  return (
    <Background background={backgroundImg}>
      <p>Nastya</p>
      <input type="file" name="image-upload" accept="image/*" id="input" />
    </Background>
  )
}

const Background = styled.div<{ background: string }>`
  background: url(${(props) => props.background});
  width: 100%;
  height: 100%;
  position: fixed;
`
