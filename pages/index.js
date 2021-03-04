import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({test}) {
  console.dir(test)
  return `Index: ${JSON.stringify(test)}`
}

export async function getStaticProps() {
  await new Promise(resolve => setTimeout(resolve, 30 * 1000))
  return {
    props: {test: 4},
    revalidate: 60
  }
}
