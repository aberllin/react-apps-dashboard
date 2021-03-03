import React from 'react'
import todoIcon from '../images/Group 24.png'
import ghIcon from '../images/coolicon.png'
import { ToDoApp } from '../components/apps/ToDoApp/ToDoApp'
import { ShareOption } from '../components/apps/ToDoApp/share_option/ShareOption'
import { GHSearch } from '../components/apps/search_github_account/GHSearch'
import { ClearFavorites } from '../components/apps/search_github_account/ghsearch_options/ClearFavorites'
import { ShowFavorites } from '../components/apps/search_github_account/ghsearch_options/ShowFavorites'

export interface AppType {
  id: number
  title: string
  image?: string
  app?: JSX.Element
  options?: Option[]
}

export interface Option {
  optionTitle: string
  option: JSX.Element
}

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
      { optionTitle: 'Show Favorites', option: <ShowFavorites /> },
      { optionTitle: 'Clear Favorites', option: <ClearFavorites /> },
    ],
  },
  {
    id: 5,
    title: 'To Do List',
    image: todoIcon,
    app: <ToDoApp />,
    options: [{ optionTitle: 'Share', option: <ShareOption /> }],
  },
  { id: 6, title: 'Timer' },
  { id: 7, title: 'Timer' },
]
