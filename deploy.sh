#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

 git push -f https://oauth2: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@github.com/tekkaee/softcorp-vuejs.git main:gh-pages
