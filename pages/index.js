import Link from "next/link"

export default function Home({test}) {
  console.dir(test)
  return <>
    `Index: ${JSON.stringify(test)}`
    <Link href="/[something]" as="/test" passHref><a>To /[something] </a></Link>
    <Link href="/index" passHref><a>To index? </a></Link>
    </>
}

export async function getStaticProps() {
  await new Promise(resolve => setTimeout(resolve, 30 * 1000))
  return {
    props: {test: 4},
    revalidate: 60
  }
}
