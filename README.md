# currency-calculator
This is a simple bi-directional currency calculator inspiried by the google's one


## Demo
Check out the live [demo](http://currency-calculator.ksulourgeio.gr)

## Project setup
1. Clone the project
1. In a terminal type ```yarn``` to install dependencies
1. Create a .env file like the example
1. In a terminal type ```yarn serve``` to run the project
1. A new browser window will be opene to the port specified in your .env
1. In a terminal type ```yarn test``` to run your tests
1. In a terminal type ```yarn lint``` to check for lint mistakes
1. In a terminal type ```yarn build``` to make a production ready build

## Project's Stack
This project was created with [Vue](https://vuejs.org) with no build configuration.

[Typescript](https://www.typescriptlang.org/) more reliable, more explicit, practically interchangeable and you get a richer environment for spotting common errors as you type the code.

[Font Awesome](https://fontawesome.com/) to add some style!! (when possible)

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Best Practices
1. Single responsibility
1. Small Stateless Components instead of big Classes
1. Composable Components
1. Reusable
1. Meaningful
1. Declarative FP with Pure or Almost-Pure functions
1. Try to keep the Component's methods styles in the same folder


### General Rules (not all applied)
-----
## ESLint
Yes, we lint our files.   
Lint will ensure that so best practices are followed. Search the error messages and learn with that.   
Make sure that all your .js files are passing the lint check before open a PR.      
There is pre-commit hook that won't allow you to commit without fixing the lint alerts.

## Unit Test
Following TDD you need first to write a small story, with an empty component and the unit tests and then we develop the component.   
Test stack consist of [mocha](https://mochajs.org/) (or [jest](https://jestjs.io)), [Enzyme](http://airbnb.io/enzyme/docs/) and [Sinon](http://sinonjs.org).  

## [Storybook](https://storybook.js.org/)
To create consisten isolated components one at a time before putting them in the project.
You can develop entire UIs without needing to start up a complex dev stack, force certain data into your database, or navigate around your application.
