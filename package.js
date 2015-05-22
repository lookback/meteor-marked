// Source: https://github.com/chjj/marked

Package.describe({
  summary: "A markdown parser and compiler. Built for speed.",
  version: "0.3.3_1",
  name: "lookback:marked",
  git: "https://github.com/chuangbo/meteor-marked.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.1");
  api.use("templating", "client", {weak: true});

  api.add_files("pre-marked.js");
  api.add_files("marked/lib/marked.js");
  api.add_files("post-marked.js");

  api.add_files('template-integration.js', 'client');
  api.export('marked');
});
