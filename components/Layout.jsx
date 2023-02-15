import React from 'react'
import Head from 'next/head'

function Layout({ children }) {
  return (
    <div className="layout">
        <Head>
          <title>Magnet on Mousemove</title>
        </Head>
        <header></header>
        <main className="main-container">
          {children}
        </main>
        <footer></footer>
    </div>
  )
}

export default Layout