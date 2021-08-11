Package.describe({
  name: 'vulcan:subscribe',
  summary: 'Subscribe to posts, users, etc. to be notified of new activity',
  version: '1.16.6',
  git: 'https://github.com/VulcanJS/Vulcan.git',
});

Package.onUse(function(api) {
  api.use([
    'vulcan:core@=1.16.6',
    // dependencies on posts, categories are done with nested imports to reduce explicit dependencies
  ]);

  api.use(['vulcan:posts@=1.16.6', 'vulcan:comments@=1.16.6', 'vulcan:categories@=1.16.6'], {
    weak: true,
  });

  api.mainModule('lib/modules.js', ['client']);
  api.mainModule('lib/modules.js', ['server']);
});
