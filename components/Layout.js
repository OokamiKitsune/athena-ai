import Head from "next/head";
import { useState } from "react";

const Layout = ({ children, title }) => {
    return (
      <div>
        <Head>
          <title>{title}</title>
        </Head>
        <header>
          // Your header content
        </header>
        <main>{children}</main>
        <footer>
          // Your footer content
        </footer>
      </div>
    )
  }
export default Layout