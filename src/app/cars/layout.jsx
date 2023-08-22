import React from 'react'
import TopBar from '@/components/TopBar'
import styles from './styles.module.css'
export default function Layout({ children }) {
    return (
      <>
        <TopBar />
        <main className={styles.container}>{children}</main>
        {/* <Footer /> */}
      </>
    )
  }