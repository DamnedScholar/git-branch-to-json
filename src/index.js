'use babel'

const {exec} = require(`child_process`);
const S = require(`string`)

exports = {
  branches: function (path) {
    // Return a list of branches for the repo at the current path. This function runs `git branch -avv` and returns an object with the data for each branch organized.
    return new Promise(function (resolve, reject) {
      exec(`git branch -avv`, {cwd: path}, (err, stdout, stderr) => {
        object = []
        if (stdout) {
          rows = S(stdout).lines()
          // Define regular expression
          re = /(\*)? ([a-zA-Z0-9\-]+(\/[a-zA-Z0-9\-]*)*)\s+([a-z0-9]{8})?\s+(\[.*\])?\s+(.*)$/
          i = 0
          for (row of rows) {
            i++
            processed = {}
            captures = row.match(re)
            if (captures) {
              if (captures[1])
                processed.active = true
              else
                processed.active = false

              if (captures[2])
                processed.name = captures[2]
              else
                throw error

              if (captures[3])
                processed.shortName = S(captures[3]).chompLeft('/').s
              else
                processed.shortName = processed.name

              if (captures[4])
                processed.commit = captures[4]
              else
                processed.commit = null

              if (captures[5])
                processed.remote = captures[5]
              else
                processed.remote = null

              if (captures[6])
                processed.message = captures[6]
              else
                processed.message = null

              if (processed.message.match(/[a-z0-9]{8}/)) {
                processed.commit = processed.message.slice(0,8)
                processed.message = processed.message.slice(9)
              }
            }
            if (processed.name)
              object.push(processed)
          }
          resolve(object);
        }
        else
          reject(err);
      })
    });
  },

  checkout: function(options) {
    // Run `git checkout` with the provided options. In keeping with the goals of this package, this is intentionally limited to switching branches. It doesn't know anything about the proper usage of the command and will throw an exception on any invalid use.

    // Options:
    //  branch (str) - The branch name (optional). Will match the shortName of a remote branch if there's no local branch by the same name.
    //  commit (str) - The commit ID (optional). Only matches the short ID.
    //  detach (bool) - The `--detach` flag.
    //  force (bool) - The `--force` flag.
  }
}
