const express = require('express');
const server = express();
const template = require('fs').readFileSync('./index.template.html', 'utf-8');

const { createBundleRenderer } = require('vue-server-renderer');
const serverBundle = require('./dist/vue-ssr-server-bundle.json');
const clientManifest = require('./dist/vue-ssr-client-manifest.json');

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest
});


server.use(express.static('dist'))

server.get('*', (req, res) => {
  const context = {
    metas: `
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    `,
    url: req.url
  };
  renderer.renderToString(context, (err, html) => {
    res.end(html);
  });
});

server.listen(8000);
console.log('running on 8000')
