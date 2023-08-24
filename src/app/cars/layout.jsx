import React from 'react'
import styles from './styles.module.css'

export default function Layout({ children }) {
    return (
      <>
        <main className={styles.container}>{children}</main>
        {/* <Footer /> */}
      </>
    )
  }