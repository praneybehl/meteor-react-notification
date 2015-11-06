Package.describe({
  name: 'praneybehl:react-notification',
  version: '3.0.2',
  summary: 'Snackbar style notification component for React packaged for Meteor',
  git: 'https://github.com/praneybehl/meteor-react-dropzone',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('react@0.1.13');
  api.use('cosmos:browserify@0.8.3', 'client');
  api.addFiles('package.browserify.js', 'client');
  api.addFiles('package.browserify.options.json', 'client');
  api.export('Notification');
});


Npm.depends({
  "react-notification": "3.0.2",
  "exposify": "0.5.0"
});
