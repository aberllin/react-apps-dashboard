import React, { useState, useEffect } from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { GHUserType } from './types'
import { AiFillStar } from 'react-icons/ai'

type Props = {
  user: GHUserType
}

export const AddToFavorites = ({ user }: Props) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false)

  const addToFavorite = () => {
    const currentStorage = localStorage.getItem('favorites')
    const parsedStorage: GHUserType[] = currentStorage
      ? JSON.parse(currentStorage)
      : []

    if (parsedStorage.filter((item) => item.id === user.id).length > 0) {
      setIsFavorite(false)

      const newStorage = parsedStorage.filter((item) => item.id !== user.id)
      return localStorage.setItem('favorites', JSON.stringify(newStorage))
    } else {
      setIsFavorite(true)

      return localStorage.setItem(
        'favorites',
        JSON.stringify([...parsedStorage, user]),
      )
    }
  }

  useEffect(() => {
    const currentStorage = localStorage.getItem('favorites')
    const parsedStorage: GHUserType[] = currentStorage
      ? JSON.parse(currentStorage)
      : []

    if (parsedStorage.filter((item) => item.id === user.id).length > 0) {
      setIsFavorite(true)
    }
  }, [user])

  return (
    <div
      style={{ display: 'flex', alignItems: 'center' }}
      onClick={addToFavorite}
    >
      {!isFavorite ? (
        <AiOutlineStar style={{ cursor: 'pointer' }} />
      ) : (
        <AiFillStar style={{ color: '#FFE227', cursor: 'pointer' }} />
      )}
    </div>
  )
}
