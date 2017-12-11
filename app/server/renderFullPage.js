export default function renderFullPage(html) {
    return `
        <!doctype html>
        <html>
        <head>
            <title>SSR React</title>
        </head>
        </html>
        <body>
            <div id="root">${ html }</div>
            <script src="/bundle.js"></script>
        </body>
        </html>
    `
}
