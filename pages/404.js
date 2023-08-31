import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import styles from '@/styles/Home.module.css'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
        router.push('/')
    }, 3000)
  }, [])

  return (
      <div className={styles.notfound}>
          <h1>Ooops...</h1>
          <h2>That page cannot be found :(</h2>
          <p>Going back to the <Link href="/">Homepage</Link> in 2 seconds...</p>
      </div>
  );
}
 
export default NotFound;