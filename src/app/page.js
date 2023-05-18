

import styles from './page.module.css'

import PrincipalMain from '@/components/PrincipalMain/PrincipalMain'
import Header from '@/components/Header/Header'
import Informacion from '@/components/Informacion/Informacion'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <PrincipalMain  />
     <Informacion/>
    </main>
  )
}
