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

```
echo {}> .prettierrc.json

touch .prettierignore
    node_modules, build, .nyc_output

touch .husky/pre-commit

chmod a+x .husky/pre-commit
    #!/usr/bin/env sh
    . "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```
