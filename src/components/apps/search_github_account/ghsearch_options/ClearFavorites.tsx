import React from 'react'

export const ClearFavorites = () => {
  const handleClear = () => {
    localStorage.clear()
  }
  return (
    <>
      <div>Do you want to clear your favorites?</div>
      <button
        onClick={() => {
          handleClear()
        }}
      >
        Clear
      </button>
    </>
  )
}
