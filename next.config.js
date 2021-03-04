require("dotenv").config()
const withPlugins = require("next-compose-plugins")
const withStylus = require("@zeit/next-stylus")
const withCss = require("@zeit/next-css")
const withOptimizedImages = require("next-optimized-images")
const withVideos = require("next-videos")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
})
const withSourceMaps = require("@zeit/next-source-maps")


const publicUrl = (() => {
    const vercelUrl = process.env.VERCEL_URL
    if(vercelUrl) return "https://" + vercelUrl

    return config.get("publicUrl")
})()

const nextConfig = {
    webpack: (webpackConfig, options) => {
        const originalEntry = webpackConfig.entry
        webpackConfig.entry = async () => {
            const entries = await originalEntry()

            if (
                entries["main.js"] &&
                !entries["main.js"].includes("./client/polyfills.js")
            ) {
                entries["main.js"].unshift("./client/polyfills.js")
            }

            return entries
        }

        return webpackConfig
    },
    env: {},
    onDemandEntries: {
        maxInteractiveAge: 5 * 60 * 1000,
        pagesBufferLength: 10,
    },
}

module.exports = withPlugins(
    [
        withStylus,
        withCss,
        withVideos,
        withBundleAnalyzer,
        withSourceMaps,
        [
            withOptimizedImages,
            {
                imageFolder: "img",
                defaultImageLoader: "responsive-loader",
                optimizeImagesInDev: false,
                inlineImageLimit: 4096,
                responsive: {
                    sizes: [
                        300, 400, 500, 600, 800, 1000, 1200, 1300, 1600,
                    ],
                    placeholder: true,
                    placeholderSize: 25,
                    format: "jpg",
                    quality: 80,
                    adapter: require("responsive-loader/sharp"),
                },
            },
        ],
    ],
    nextConfig,
)
