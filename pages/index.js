import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return "Index"
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 60
  }
}
