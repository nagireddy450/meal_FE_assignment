# meal_assignment (About the project)

```
Description: This application all about getting the meal recipe details and navigating you to watch video on youtube for the same recipe of your choice.

This application implemented using the themealdb API from www.themealdb.com for getting completed details of meal of your choice from server.

```

#### Getting Started -----------

```
This Application is build using VueJS as front end Js framework with possible best practices.

Vue Js is a progressive framework with a small size of around ~21kb , easy to understand and scale large application.

It uses vue cli as a Standard Tooling for Vue.js Development.

```

### Prerequisites and Installation 

```
npm is mandatory to set up the environment or to start the application.

```

## Project setup

```
npm install

npm install npm@latest -g

```

## Vue CLI

```
This has some advantages.
Please refer below urls

https://cli.vuejs.org/

https://cli.vuejs.org/guide/

```
## Project setup (loading/importing all required packages)
```
Note: You need administrator privileges to execute these unless npm was installed on your system through a Node.js version manager.

```

## Setting up vue/cli
```
npm install -g @vue/cli

Note: You can check you have the right version with this command:
vue --version
```

## Installation of all required packages
```
npm install
Note: Run in a separate terminal or cmd.
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Project Guidelines ------------

## style guidelines for programming. typically cover:

Naming and declaration rules for variables and functions.
Rules for the use of white space, indentation, and comments.
Programming practices and principles

 1) File Naming Convention, 
   Method Naming Convention, 
   Component Naming Convention,
   variable, object declaration : camelCase
   Example : CategoryDetails, getCategoryDetails(), MealRecipeDetails etc. 

2) Folder Naming Convention, Components directives in vue : kabab-case

3) Coding Standards  
   a. kabab-case:
      folder names, vue component directives, css classes etc.
   b. camelCase:
      vue component file names, js variables, objects, functions etc
   c. PascalCase:
      importing npm packages etc. 


## Coding conventions secure quality:

    Code readability
    Code maintenance easier

### Project dependencies and devDependencies ------------
1. axios:
   Promise based HTTP client for the browser.
   Please refer below url for more details:
   https://www.npmjs.com/package/axios   

2. vuetify:
   Vuetify is a Vue UI Library with beautifully handcrafted Material Components. we can build responsive, mobile-first, and ARIA accessible projects on the web using Vue.js and the world's most popular front-end CSS library — Material Design Component Framework. Release cadence : Weekly
   Please refer below url for more details:
   https://vuetifyjs.com/en/getting-started/quick-start

3. @vue/cli-plugin-unit-jest:
   Run unit tests with Jest. Jest as a JS unit testing framework and runner.
   Please refer below url for more details:
   https://jestjs.io/

   In jest.config.js: we can configure some key feature such as collectCoverage, collectCoverageFrom, coverageThreshold etc
   for getting exact code coverage with reports.