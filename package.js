Package.describe({
  summary: "Bootstrap Popovers for Meteor UI."
});

Package.on_use(function (api) {
  api.add_files('blazing-popover.js', 'client');
  api.add_files('blazing-popover.js', 'client');

  if(api.export) {
    api.export('BlazingPopover');
  }
});
