# Turborepo + NextJS + ESM

This is how you use ESM with NextJS and Turborepo 😁

More docs here: https://turbo-site-git-matt-feature-branch-built-monorepo-handbook.vercel.sh/docs/handbook/sharing-code/internal-packages

### Latest problem is eslint doesnt want to parse the esm variant of the config

```
web:lint: $ next lint
web:lint: Cannot read config file: C:\Users\seanb\Downloads\turborepo-nextjs-esm\apps\web\.eslintrc.js
web:lint: Error: require() of ES Module C:\Users\seanb\Downloads\turborepo-nextjs-esm\apps\web\.eslintrc.js from C:\Users\seanb\Downloads\turborepo-nextjs-esm\node_modules\@eslint\eslintrc\lib\config-array-factory.js not supported.
web:lint: Instead change the require of .eslintrc.js in C:\Users\seanb\Downloads\turborepo-nextjs-esm\node_modules\@eslint\eslintrc\lib\config-array-factory.js to a dynamic import() which is available in all CommonJS modules.
web:lint: error Command failed with exit code 1.
web:lint: info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
web:lint: ERROR: command finished with error: command (C:\Users\seanb\Downloads\turborepo-nextjs-esm\apps\web) yarn run lint exited (1)
```