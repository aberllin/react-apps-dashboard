import React from 'react'
import todoIcon from '../images/Group 24.png'
import ghIcon from '../images/coolicon.png'
import { ToDoApp } from '../components/apps/todo_app/ToDoApp'
import { GHSearch } from '../components/apps/search_github_account/GHSearch'
import { Timer } from '../components/apps/timer/Timer'

export type mapType = {
  title: string
  image?: string
  app?: (
    isCollapsed: boolean,
    onClose: (id: string) => void,
    collapseWindow: (id: string) => void,
    id: string,
    coordinates: { left: number; top: number },
  ) => JSX.Element
}

export type AppOption = {
  title: string
  component?: JSX.Element
  callback?: () => void
}

export const appDataMap: { [id: string]: mapType } = {
  '1': {
    title: 'MacOS-like Desktop',
  },
  '2': {
    title: 'Calculator',
  },
  '3': {
    title: 'Calculator',
  },

  '4': {
    title: 'Search GitHub Account',
    image: ghIcon,
    app: (isCollapsed, onClose, collapseWindow, id, coordinates) => {
      return (
        <GHSearch
          isCollapsed={isCollapsed}
          onCollapse={collapseWindow}
          onClose={onClose}
          id={id}
          coordinates={coordinates}
        />
      )
    },
  },
  '5': {
    title: 'To Do List',
    image: todoIcon,
    app: (isCollapsed, onClose, collapseWindow, id, coordinates) => {
      return (
        <ToDoApp
          isCollapsed={isCollapsed}
          onCollapse={collapseWindow}
          onClose={onClose}
          id={id}
          coordinates={coordinates}
        />
      )
    },
  },
  '6': {
    title: 'Timer',
    app: (isCollapsed, onClose, collapseWindow, id, coordinates) => {
      return (
        <Timer
          isCollapsed={isCollapsed}
          onCollapse={collapseWindow}
          onClose={onClose}
          id={id}
          coordinates={coordinates}
        />
      )
    },
  },
  '7': {
    title: 'Telegram',
  },
}

export const appDataIds = ['1', '2', '3', '4', '5', '6', '7']
