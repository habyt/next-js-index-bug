export default function Something() {
    return "something"
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: "blocking"
    }
}
export async function getStaticProps() {
    return {
        props: {},
        revalidate: 1
    }
}
