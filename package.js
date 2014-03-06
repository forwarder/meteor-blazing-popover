Package.describe({
  summary: "Bootstrap Popovers for Meteor UI."
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
    'blazing-popover.js',
    'blazing-popover.js'
  ], 'client');

  if(api.export) {
    api.export('BlazingPopover');
  }
});
