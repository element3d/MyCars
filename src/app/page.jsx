'use client'
import React from 'react';
import styles from './page.module.css'
import { Button } from 'antd';
import { redirect, usePathname } from 'next/navigation';

export default function Home() {
  const pathname = usePathname()

  if(pathname === '/') {
    redirect('/cars')
  }

  return (
    <main className={styles.main}>
     <div>Some text</div>
      <Button type="primary" className= {styles.thestyle}>Button</Button>
    </main>
  )
}
