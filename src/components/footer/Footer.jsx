import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy;2023 Talha. All right reserved</div>
      <div className={styles.social}>
        <Link href="https://www.facebook.com/AzadZ4t7?mibextid=ZbWKwL" target='_blank'><Image src="/facebook.png" alt='facebook' width={15} height={15} className={styles.icon}/></Link>
        <Link href="https://github.com/Malik-444" target='_blank'><Image src="/github.png" alt='github' width={15} height={15} className={styles.icon}/></Link>
        <Link href="https://www.linkedin.com/in/talhahusnain" target='_blank'><Image src="/linkedin.png" alt='linkedin' width={15} height={15} className={styles.icon}/></Link>
        <Link href="https://twitter.com/TalhaHusnain7" target='_blank'><Image src="/twitter.png" alt='twitter' width={15} height={15} className={styles.icon}/></Link>

      </div>
    </div>
  )
}

export default Footer