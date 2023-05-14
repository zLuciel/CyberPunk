
import Image from 'next/legacy/image'
import styles from './page.module.css'
import Marquees from '../components/marquee/Marquee'
import PrincipalMain from '@/components/PrincipalMain/PrincipalMain'
import Header from '@/components/Header/Header'

export default function Home() {
  return (
    <main className={styles.main}>
      <Marquees/>
      <Header/>
      <PrincipalMain  />
    </main>
  )
}
