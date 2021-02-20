import React, { useState, useEffect } from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { GHUserType } from './types'
import { AiFillStar } from 'react-icons/ai'

interface Props {
  user: GHUserType
}

export const AddToFavorites = ({ user }: Props) => {
  const [addedToFavorite, setAddedToFavorite] = useState<boolean>(false)
  const [favoriteUser, setFavotiteUser] = useState<GHUserType[]>([])

  return (
    <>
      <div>
        {!addedToFavorite ? (
          <AiOutlineStar style={{ cursor: 'pointer' }} />
        ) : (
          <AiFillStar style={{ color: '#FFE227', cursor: 'pointer' }} />
        )}
      </div>
    </>
  )
}
