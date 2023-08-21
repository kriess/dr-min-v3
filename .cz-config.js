module.exports = {
  types: [
    { value: 'feat', name: 'feat:\t\tAdding a new feature' },
    { value: 'fix', name: 'fix:\t\tFixing a bug' },
    { value: 'docs', name: 'docs:\t\tAdd or update documentation' },
    { value: 'style', name: 'style:\tAdd or update styles, ui or ux' },
    {
      value: 'refactor',
      name: 'refactor:\tCode change that neither fixes a bug nor adds a feature',
    },
    { value: 'perf', name: 'perf:\t\tCode change that improves performance' },
    { value: 'test', name: 'test:\t\tAdding tests cases' },
    {
      value: 'chore',
      name: 'chore:\tChanges to the build process or auxiliary tools\n\t\tand libraries such as documentation generation',
    },
    { value: 'revert', name: 'revert:\tRevert to a commit' },
    { value: 'build', name: 'build:\tAdd or update regards to build process' },
    { value: 'ci', name: 'ci:\t\tAdd or update regards to build process' },
  ],

  scopes: [
    { name: 'api' },
    { name: 'ui' },
    { name: 'nfl' },
    { name: 'third party' },
  ],

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['body'],
  subjectLimit: 100,
  footerPrefix: 'closes',
}
