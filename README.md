# AngularCypress

This little project shows how to setup cypress within Angular environment.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.2.

## Reproduce steps

* Generate project with [Angular CLI](https://github.com/angular/angular-cli) (This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.2.)
* Install [Cypress](https://www.cypress.io/): `ng add @briebug/cypress-schematic --add-cypress-test-scripts`
* Install [concurrently](https://www.npmjs.com/package/concurrently) and [start-server-and-test](https://www.npmjs.com/package/start-server-and-test): `npm install --save-dev concurrently start-server-and-test`
* Setup your `e2e` and `e2e:ci` scripts in your `package.json`
* Write your first tests!

## Some commands
* Run `npm run e2e` to execute the end-to-end tests via the Cypress GUI.
* Run `npm run e2e:ci` to execute the end-to-end tests via Cypress in terminal only.

## Further links:

* [How to get started with Cypress](https://indepth.dev/posts/1226/how-to-get-started-with-cypress)
* [Introduction to Cypress with Angular](https://fullyunderstood.com/introduction-to-cypress-with-angular)
