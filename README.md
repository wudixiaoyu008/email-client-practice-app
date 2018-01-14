# Email Client

## Tech Stack

This project provides a few cool tools as a foundation, so it'd be worthwhile to check them out before getting started:

- [Babel](http://babeljs.io/) for nextgen JavaScript features
- [ESLint](https://eslint.org/) for help with JavaScript code errors and style
- [Flow](https://flow.org/) for type-checking your JavaScript code
- [Sass](http://sass-lang.com/) + [Autoprefixer](https://github.com/postcss/autoprefixer) for enhancing CSS with some nice features
- [Stylelint](https://github.com/stylelint/stylelint) for help with CSS code errors and style
- [Parcel](https://parceljs.org/) for building and running the app

## Setup

Getting the app installed isn't too scary! Just a few simple steps and you'll be all set:

- Fork the [sample repo](https://github.com/letscodework/email-client-practice-app) in GitHub so you have your own copy of the app
- Open a terminal/console and navigate to whatever folder you want the project to be in
- Clone your fork with `git clone git@github.com:YOUR_GITHUB_USERNAME/email-client-practice-app.git`
- Navigate into the downloaded folder with `cd email-client-practice-app`
- Install the dependencies:
  - Make sure you install [Node.js](https://nodejs.org/en/) if you don't have it already
  - We'll use the [Yarn](https://yarnpkg.com/en/) package manager to interact with the app throughout the docs, but [npm](https://www.npmjs.com/) works, too (and comes bundled with Node.js)
  - Finally, actually install the app's dependencies with `yarn install`

## Usage

Once all the setup is complete, you can actually start using and developing the app:

- Start the app's development server using `yarn start`, then go to `http://localhost:1234` in your browser to see it (stop the server with the `Ctrl` + `C` keys)
- If you want to run the linters on your code, use `yarn lint`
  - To just lint your JavaScript code, `yarn lint:js`
  - To just lint your CSS/Sass code, `yarn lint:sass`
- If you want to run Flow's type checks, use `yarn flow`

## Get Started!

This project is intended to be yours, so at this point you can go wild creating the email client you've always wanted. Just a couple of last notes:

- Initial source code files can be found in the `src` folder
- The final app code outputs to the `dist` folder

That's it; dream big!
