import Head from "next/head";
import NavBar from './NavBar'
import { useState } from "react";

const Layout = ({ children, title }) => {
    return (
      <div>
        <Head>
          <title>{title}</title>
        </Head>
        <header>
          
        </header>
        <main>{children}</main>
        <footer>
          // Your footer content
        </footer>
      </div>
    )
  }
export default Layout