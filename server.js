const express = require('express')
const server = express();
const { createBundleRenderer } = require('vue-server-renderer')
const template = require('fs').readFileSync('./template.html', 'utf-8')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
const path = require('path')

const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false,
    template,
    clientManifest
})

const resolve = file => path.resolve(__dirname, file)
const serve = (path, cache) => express.static(resolve(path), {
    maxAge: 0
})

server.use('/dist', serve('dist', true))

server.get('*', (req, res) => {
    const context = {url: req.url}
    
    renderer.renderToString(context, (err, html) => {
        res.end(html)
    })
})

server.listen(8081)