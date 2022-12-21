

<!-- npm husky install  # error -->
```
npx husky install

touch .husky/commit-msg
    #!/usr/bin/env sh
    . "$(dirname -- "$0")/_/husky.sh"

    # npx --no -- commitlint --edit "\${1}" error
    npx --no -- commitlint --edit ${1}

chmod a+x .husky/commit-msg

touch commitlint.config.js
    module.exports = {
        extends: ["@commitlint/config-conventional"],
    };
```