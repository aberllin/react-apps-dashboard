import React, { useState, useContext } from 'react'
import { Snackbar } from '../components/Snackbar'

type Props = {
  children: React.ReactNode
}

type Context = {
  error: (text: string) => void
  success: (text: string) => void
}

export enum NotificationTypes {
  Error,
  Success,
}

export type NotificationState = {
  text: string | null
  type: NotificationTypes
}

const NotificationContext = React.createContext<Context | null>(null)

export const useNotification = () => {
  const notify = useContext(NotificationContext)

  if (!notify) {
    throw new Error('You use useNotification outside provider')
  } else {
    return notify
  }
}

export const NotificationProvider = ({ children }: Props) => {
  const [notification, setNotification] = useState<NotificationState>({
    text: null,
    type: NotificationTypes.Error,
  })

  const showError = (text: string) => {
    setNotification({ text, type: NotificationTypes.Error })
  }

  const showSuccess = (text: string) => {
    setNotification({ text, type: NotificationTypes.Success })
  }

  const closeSnackbar = () => {
    setNotification({ text: null, type: NotificationTypes.Error })
  }

  return (
    <NotificationContext.Provider
      value={{ error: showError, success: showSuccess }}
    >
      <>
        {notification.text && (
          <Snackbar notification={notification} onClose={closeSnackbar} />
        )}
        {children}
      </>
    </NotificationContext.Provider>
  )
}
