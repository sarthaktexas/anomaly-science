import Head from 'next/head'

export default function HeadObject({children}) {
    const title = "Anomaly Science";
    const description = "We're redefining what it means to create.";
    const keywords = "science, camp, create, generator, startup";
    const author = "Anomaly Science";
    const twitter = "@anomalyscience";
    //const image = "/ogimage.png"; // This is your OpenGraph image
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta property="og:url" content="https://anomaly-science.com" /> {/* This is where you put the domain */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {/* <meta property="og:image" content={image} /> */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={twitter} />
            <meta name="twitter:creator" content={twitter} />
            <script async defer data-website-id="220e23c0-7955-419d-b679-87043b1be0e2" src="https://analytics.sarthakmohanty.me/umami.js"></script>
            {children}
        </Head>
    )
}