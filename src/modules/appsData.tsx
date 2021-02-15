import forest from '../images/forest.jpg'
import forest1 from '../images/forest1.jpg'
import forest2 from '../images/forest2.jpg'
import { ToDoApp } from '../components/apps/ToDoApp/ToDoApp'
import { ShareOption } from '../components/menu_options/share_option/ShareOption'
import { GHSearch } from '../components/apps/search_github_account/GHSearch'

export interface AppType {
  id: number
  title: string
  image: string
  app?: JSX.Element
  options?: {
    optionTitle: string
    option: JSX.Element
  }[]
}

export const appsData: AppType[] = [
  {
    id: 1,
    title: 'To Do List',
    image: forest,
    app: <ToDoApp />,
    options: [
      {
        optionTitle: 'Share',
        option: <ShareOption />,
      },
    ],
  },
  { id: 2, title: 'Search GitHub Account', image: forest, app: <GHSearch /> },
  { id: 3, title: 'Calculator', image: forest },
  { id: 4, title: 'Calculator', image: forest },
  { id: 5, title: 'Calculator', image: forest },
  { id: 6, title: 'Timer', image: forest1 },
  { id: 7, title: 'Timer', image: forest1 },
  { id: 8, title: 'Timer', image: forest1 },
  { id: 9, title: 'Timer', image: forest1 },
  { id: 10, title: 'Timer', image: forest1 },
  { id: 11, title: 'Weather', image: forest2 },
  { id: 12, title: 'Weather', image: forest2 },
  { id: 13, title: 'Weather', image: forest2 },
  { id: 14, title: 'Weather', image: forest2 },
  { id: 15, title: 'Weather', image: forest2 },
]
