import { User } from '@/types'
import styles from './FigureList.module.css'
import { FigureInfo } from '../FigureInfo/FigureInfo'

type FigureListType = {
  users: User[]
}

const LIMIT = 4

export function FigureList({ users }: FigureListType) {
  return (
    <ul className={styles.FigureList}>
      {users.slice(0, LIMIT).map((user, index) => {
        const { name, lastName } = user
        return (
          <li key={`${name}-${lastName}`}>
            <FigureInfo value={`${name[0]}${lastName[0]}`} intensity={index + 2} />
          </li>
        )
      })}
      {users.length > 5 && (
        <li>
          <FigureInfo value={`+${users.length - LIMIT}`} intensity={10} />
        </li>
      )}
    </ul>
  )
}
