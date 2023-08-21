import React from 'react'
import styles from './styles.module.css'
import { Breadcrumb } from 'antd'

const BreadCrumb = ({items}) => (
    <div className={styles.breadCrumb}>
        <Breadcrumb items={items} />
    </div>
)

export default BreadCrumb