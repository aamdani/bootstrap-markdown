Package.describe({
  name: 'brwn:bootstrap-markdown',
  version: '1.0.1',
  // Brief, one-line summary of the package.
  summary: 'bootstrap-markdown wrapper using the official bootstrap package dependency.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/aamdani/bootstrap-markdown',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.on_use(function (api) {
    api.versionsFrom('METEOR@1.1');
    // dependecies required by package
    api.use('twbs:bootstrap@3.3.4','client');
    api.use('brwn:marked@1.0.0', 'client');
    api.use('brwn:to-markdown@1.0.0', 'client');
    // adding the required file for package
    api.add_files('lib/bootstrap-markdown.js', 'client');
    api.add_files('lib/bootstrap-markdown.min.css', 'client');
});
