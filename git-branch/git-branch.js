var branches = require('list-git-branches');
var cwd = '.';

// async
branches(cwd, function(err, res) {
  if (err) throw err;
  console.log(res);
});
