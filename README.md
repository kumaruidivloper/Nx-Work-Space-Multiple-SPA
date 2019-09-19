# NxWorkSpacePoc

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are some plugins which you can add to your workspace:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@nx-work-space-poc/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

# My Nx Owrkspace POC DOC


## What is Nx?
Nx: Nx stans for [Nrwl Extentions For Angular]
Nrwl company By the Team of Ex Googlers Also part of angular code team

Nx not replacement of Angular cli this are just extenstion of Angular CLI [add some cappblities of our existing angular projects]

With Nx we can Create workspaces to manage our applications

Also create application & library with it

## Why Nx?
If we want create multiple Applications that share some data or some state we can make use of Nx
Also nx Built very large Enterprice Angular application

Nx is Monorepo so every Application & every library in our code sits in only one repostary

Nx helps with Architecture of our application

Nx Applications are very Easier to Scale


## Old Nrwl 
https://myview.rahulnivi.net/running-multiple-angular-spa-nrwl/

## latest Nrwl
https://www.tutorialslogic.com/blogs/nrwl-nx

## Steps To Creat Nx Works Space
Step1: npm init nx-workspace <workspacename> --preset=angular //Using npm init

Step2:
//Using npm
npm install --dev @nrwl/angular //Adds Angular capabilities
npm install --dev @nrwl/web //Adds Web capabilities
npm install --dev @nrwl/react //Adds React capabilities
npm install --dev @nrwl/node //Adds Node capabilities
npm install --dev @nrwl/express //Adds Express capabilities
npm install --dev @nrwl/nest //Adds Nest capabilities

## Creating an Applications in NX Workspace:
By default apps folder will be empty in NX Workspace, but we can create one by running below command in terminal

//Using npm create Apps
ng g @nrwl/angular:application myapp
ng generate @nrwl/angular:application myapp //Same thing

## Creating an React Applications in NX Workspace:
By default apps folder will be empty in NX Workspace, but we can create one by running below command in terminal

npm install --dev @nrwl/react //Adds React capabilities

//Using npm create Apps
ng g @nrwl/react:application my-reactapp
ng generate @nrwl/angular:application myapp //Same thing

## Creating a Libraries in NX Workspace:
By default libs folder will be empty in NX Workspace, but we can create one by running below command in terminal

//Using npm create Lib
ng g @nrwl/angular:library mylib
ng generate @nrwl/angular:library mylib //Same thing

## To run the App diffrent Port 

//Using npm 
ng serve <appname> <portNumber>

ng serve admin [Default Port 4200]
ng serve myapp --port 4201
ng serve userapp --port 4202

## Generate dependency graph

//Using npm
nx dep-graph

## Convert existing Angular CLI applications to NX Workspace:
We can do this, just navigate to project folder and run below command in terminal

//Using npm
ng add @nrwl/workspace

## Old Nx Workspace Example 

https://github.com/rahulsahay19/Multiple-SPA

Step1: clone Repo
Step2: npm install

ng serve -a=third-client
ng serve -a=second-client -p=4201
ng serve -a=first-client -p=4202

## Folder Usage
![003](https://user-images.githubusercontent.com/30646609/65253068-9f9b5a00-db17-11e9-8a0d-1a7d410fcd97.JPG)

## The Dependency Graph

Looking at package.json, there are a number of scripts that have been added. One that is nice to have is to generate and view a dependency graph of all of the applications and libraries in the workspace. A dependency graph can be generated using the following command: npm run dep-graph

For example, I’ve added my-lib and my-lib2 to the my-first-app. This is the resulting dependency graph:


![004](https://user-images.githubusercontent.com/30646609/65253672-a4acd900-db18-11e9-9987-c73e365c72a8.JPG)


![007](https://user-images.githubusercontent.com/30646609/65254853-8a73fa80-db1a-11e9-84e6-9c605d10e5b0.png)


Here we can see that the my-first-app-e2e (end-to-end) test application is dependent on the my-first-app application. The application is dependent on the libraries my-lib and my-lib2. This is a very simple example. This gains more value as more applications share more libraries.

It is also possible to get the JSON version of the dependency graph which can be used in various creative ways to help automate your workflow. This is all thanks to Nrwl Extensions and the power of Nx Workspaces.

## Nx Workspace 

1: Mono Repo- a single repository for your Angular applications.
2: Same approach used by Google, Facebook, Uber, Twitter for years

## Some Slides

![005](https://user-images.githubusercontent.com/30646609/65257663-2c95e180-db1f-11e9-86a3-a0ad3b3c8cad.JPG)
![004-1](https://user-images.githubusercontent.com/30646609/65257662-2bfd4b00-db1f-11e9-80f7-fb4c52130918.JPG)
![006](https://user-images.githubusercontent.com/30646609/65257664-2c95e180-db1f-11e9-96b4-428ad1214dce.JPG)
![007](https://user-images.githubusercontent.com/30646609/65257666-2c95e180-db1f-11e9-8795-c10009792f9b.JPG)
![008](https://user-images.githubusercontent.com/30646609/65257667-2c95e180-db1f-11e9-8626-a58cc5c5299d.JPG)
![009](https://user-images.githubusercontent.com/30646609/65257668-2d2e7800-db1f-11e9-9fce-ac8af589486e.JPG)
![010](https://user-images.githubusercontent.com/30646609/65257661-2bfd4b00-db1f-11e9-9f55-d507db4946c0.JPG)



