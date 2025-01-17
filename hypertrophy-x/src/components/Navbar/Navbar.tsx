import React from 'react';
import styles from './Navbar.module.css';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import { IoIosBody } from 'react-icons/io';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Image src={logo} alt="Logo" width={50} height={50} />
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/profile">
        <IoIosBody />
      </Link>
      <button className={styles.button}>Signout</button>
    </nav>
  );
};

export default Navbar;
