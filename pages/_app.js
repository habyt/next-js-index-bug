import "dayjs/locale/de"
import "dayjs/locale/en"
import React from "react"


export default function App({
    Component,
    pageProps,
}) {

    return (
        <>
            <Component {...pageProps} />
        </>
    )
}
// measuring live performance and sending it to google analytics
// see https://nextjs.org/docs/advanced-features/measuring-performance
export function reportWebVitals(metric) {
    const {id, name, label, value} = metric
    //@ts-ignore
    window?.gtag?.("event", name, {
        eventCategory: `Next.js ${label} metric`,
        eventAction: name,
        event_category: "Web Vitals",
        // Google Analytics metrics must be integers, so the value is rounded.
        // For CLS the value is first multiplied by 1000 for greater precision
        // (note: increase the multiplier for greater precision if needed).
        value: Math.round(name === "CLS"
            ? value * 1000
            : value),
        // The `id` value will be unique to the current page load. When sending
        // multiple values from the same page (e.g. for CLS), Google Analytics can
        // compute a total by grouping on this ID (note: requires `eventLabel` to
        // be a dimension in your report).
        event_label: id,
        // Use a non-interaction event to avoid affecting bounce rate.
        non_interaction: true,
    })
}
