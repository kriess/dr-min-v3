# Dr. Caroline Min

## Making Updates

1. Update the PHP mailer form.
2. Just go to cgi-bin/send-email.php, make changes, then right click and select deployment -> upload.

Or updating the general site.

1. Make code changes in this repo.
2. Run the nuxi generate command listed below.
3. Then right click and select deployment -> upload.

Go to Tools -> Deployment -> Configurations then click on Mappings tab to see where files get placed when uploaded.

## General

The frontend codebase using nuxt 3, vue 3, and vuetify 3.

- [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction)
- [Vuetify 3 documentation](https://vuetifyjs.com/en/)

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Update your host file and add an entry to map local host to dev.drcarolinemin.com.

```bazaar
127.0.0.1 	dev.drcarolinemin.com 
```

Viewing the dev environment on dev.drcarolinemin.com will allow the Google reCAPTCHA and Maps code to work properly.
Start the development server. The default port of 3000 is changed in `package.json` with
this: `"dev": "nuxt dev --port=8080",`.

```bash
yarn dev
```

View the site on: http://dev.drcarolinemin.com:8080/

## Generate static site for Production

https://nuxt.com/docs/getting-started/deployment#crawl-based-pre-rendering

```bash 
yarn generate

npx serve .output/public
```

- Then go to .output/public.
- Right-click on that folder in WebStorm
- Select deployment

## Adding new before/after pics

- Get the new pics
- Size them to 320x384
- Open an existing pic
- Copy the new ones on to an old pic and export to web.

## Husky and Commitlint

https://github.com/conventional-changelog/commitlint

You can follow the `yarn` commands here, and use the linked article as a reference.

https://dev.to/sohandutta/make-everyone-in-your-project-write-beautiful-commit-messages-using-commitlint-and-commitizen-1amn

Install Husky

```bash
npx husky-init && yarn
```

Next, install commitlint

```bash
yarn add -D @commitlint/cli @commitlint/config-conventional
```

Add `commitlint` as a git hook

```bash
yarn husky add .husky/commit-msg 'yarn commitlint --edit "$1"'
```

**Note:** husky by default creates a pre-commit file, which runs npm test. If you don't have a test script defined in
your package.json it will throw an error. You can remove the npm test line from the pre-commit file or add a valid test
script.

Add `commitizen` cli for composing commit messages

```bash
yarn add -D commitizen cz-customizable
```

Add a `commitizen` config to your package.json.

```
{
  ....
  "devDependencies": {
    ...,
  },
  "config": {
    "commitizen": {
      "path": "cz-customizable"
    }
  }
}
```

Add a npm script to run `commitizen` cli.

```
{
  "scripts": {
    ...,
    "cm": "cz"
  },
  "dependencies": {
    ...
  }
}
```

Review the `cz-config.js` file.

## VueUse

This collection of utilities https://vueuse.org/ comes in very handy.

## Pinia

[Pinia](https://pinia.vuejs.org/ssr/nuxt.html) is a lightweight store that allows state to be shared across pages, etc.
