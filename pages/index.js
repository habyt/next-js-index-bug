import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({test}) {
  console.dir(test)
  return `Index: ${JSON.stringify(test)}`
}

export async function getStaticProps() {
  return {
    props: {test: 3},
    revalidate: 60
  }
}
