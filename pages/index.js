import styles from '../styles/Home.module.css'
import { MyResponsivePie } from '../components/MyResponsivePie'
import { useState } from 'react'
import { data } from '../data'

export default function Home() {
  const [selected, setSelected] = useState('tagsByNumOfFollowers')

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <select
          onChange={(e) => {
            setSelected(e.target.value)
          }}
        >
          <option value='tagsByNumOfFollowers'>Tags followed</option>
          <option value='mostPopularPostsThisWeek'>
            Most popular posts this week
          </option>
        </select>
        <MyResponsivePie data={data[selected]} />
      </main>
    </div>
  )
}
