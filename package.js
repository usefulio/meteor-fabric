Package.describe({
  summary: "FabricJS - Javascript Canvas Library, SVG-to-Canvas ( canvas-to-SVG) Parser http://fabricjs.com"
});

Package.on_use(function (api, where) {
  api.add_files('fabric.js', 'client');
  // api.export('fabric'); this causes the already global fabric object to get overwritten
});
