import React from 'react'
import Helmet from 'react-helmet'
import {StyleSheet, css,} from 'aphrodite'

const App = ({ children }) => (
  <div className={css(styles.root)}>
    <link rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap
.min.css"
    />
    <Helmet title="Bookworm" titleTemplate="%s -Bookworm Project" /> { children }

    <footer className={css(styles.footer)}>
      Copyright © 2016 Tung Hoang<a className={css(styles.footerLink)}></a>
    </footer>
  </div>
)

const styles = StyleSheet.create({
  root: {
    maxWidth: 700,
    color: '#000',
    margin: '2rem auto',
    padding: '0 1rem',
  },
  title: {
    color: '#000',
    maxWidth: 700,
    fontWeight: 'bold',
    fontSize: 56,
  },
  footer: {
    margin: '4rem auto',
    textAlign: 'center',
    color: '#b7b7b7',
    left: 0,
    width: '100%'
  },
  footerLink: {
    display: 'inline-block',
    color: '#000',
    textDecoration: 'none'
  }
})

export default App
