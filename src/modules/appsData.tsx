import React from 'react'
import todoIcon from '../images/Group 24.png'
import ghIcon from '../images/coolicon.png'
import { ToDoApp } from '../components/apps/ToDoApp/ToDoApp'
import { ShareOption } from '../components/apps/ToDoApp/share_option/ShareOption'
import { GHSearch } from '../components/apps/search_github_account/GHSearch'
import { ClearFavorites } from '../components/apps/search_github_account/ghsearch_options/ClearFavorites'
import { ShowFavorites } from '../components/apps/search_github_account/ghsearch_options/ShowFavorites'

export type AppType = {
  id: number
  title: string
  image?: string
  app?: JSX.Element
  options?: Option[]
}

export type Option = {
  optionTitle: string
  option: any
  type: OptionType
}

export enum OptionType {
  function = 'function',
  component = 'component',
}

type mapType = {
  title: string
  image?: string
  app?: JSX.Element
  options?: Option[]
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
    app: <GHSearch />,
    options: [
      {
        optionTitle: 'Show Favorites',
        option: <ShowFavorites />,
        type: OptionType.component,
      },
      {
        optionTitle: 'Clear Favorites',
        option: <ClearFavorites />,
        type: OptionType.component,
      },
    ],
  },
  '5': {
    title: 'To Do List',
    image: todoIcon,
    app: <ToDoApp />,
    options: [
      {
        optionTitle: 'Share',
        option: <ShareOption />,
        type: OptionType.component,
      },
    ],
  },
  '6': {
    title: 'Timer',
  },
  '7': {
    title: 'Telegram',
  },
}

export const appDataIds = ['1', '2', '3', '4', '5', '6', '7']

export const appsData: AppType[] = [
  { id: 1, title: 'MacOS-like Desktop' },
  { id: 2, title: 'Calculator' },
  { id: 3, title: 'Calculator' },
  {
    id: 4,
    title: 'Search GitHub Account',
    image: ghIcon,
    app: <GHSearch />,
    options: [
      {
        optionTitle: 'Show Favorites',
        option: <ShowFavorites />,
        type: OptionType.component,
      },
      {
        optionTitle: 'Clear Favorites',
        option: <ClearFavorites />,
        type: OptionType.component,
      },
    ],
  },
  {
    id: 5,
    title: 'To Do List',
    image: todoIcon,
    app: <ToDoApp />,
    options: [
      {
        optionTitle: 'Share',
        option: <ShareOption />,
        type: OptionType.component,
      },
    ],
  },
  { id: 6, title: 'Timer' },
  { id: 7, title: 'Timer' },
]
