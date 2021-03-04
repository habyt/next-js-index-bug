import Document, {Head, Html, Main, NextScript} from "next/document"
import React from "react"
import sprite from "svg-sprite-loader/runtime/sprite.build"
import flush from "styled-jsx/server"

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        const spriteContent = sprite.stringify()
        const styles = flush()

        return {
            spriteContent,
            ...initialProps,
            styles,
        }
    }

    render() {
        return (
            <Html lang="en">
                <body>
                <div dangerouslySetInnerHTML={{__html: this.props.spriteContent}}/>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}
