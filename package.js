Package.describe({
  "summary": "A Winston Papertrail wrapper for Meteor, forked to add 0.9.x compatibility.",
  "version": "0.0.1",
  "git": "https://github.com/danieljonce/meteor-winston-papertrail.git",
  "name": "wylio:winston-papertrail"
});

Npm.depends({
    "winston": "0.7.2",
    "winston-papertrail": "0.1.4"
});

Package.onUse(function (api, where) {
    if(api.versionsFrom) {
      api.versionsFrom('METEOR@0.9.0');
    }
    api.add_files('winston.js', 'server');
    api.add_files('winston-papertrail.js', 'server');
    if(api.export){
        api.export('Winston');
        api.export('Winston_Papertrail');
    }
});
