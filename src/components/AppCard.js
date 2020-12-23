import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const AppCard = ({ image, title }) => {
  return (
    <CardContainer>
      <Image background={image} />
      <div>{title}</div>
    </CardContainer>
  )
}

AppCard.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.object.isRequired,
}

const Image = styled.div`
  border: 1px solid #000;
  background: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  border: 1px solid #faf4f4;
  box-shadow: -10px -10px 15px rgba(255, 255, 255, 0.5),
    10px 10px 15px rgba(70, 70, 70, 0.12);
  width: 150px;
  height: 150px;
  margin-bottom: 5px;
  transition: ease-in-out 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 30%;
  }
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px 10px 20px 10px;
`
