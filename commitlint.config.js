// https://dev.to/sohandutta/make-everyone-in-your-project-write-beautiful-commit-messages-using-commitlint-and-commitizen-1amn
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [0, 'always', 100],
  },
}

// see for all the rules when we need to customize commit lint message format
// https://github.com/conventional-changelog/commitlint/blob/master/@commitlint/config-conventional/index.js
// module.exports = {
//   extends: ['@commitlint/config-conventional'],
// }
