# Expo Router Typescript

@thedevenviroment

[__1. Introduction__](#introduction)

[__2. Folder Structure__](#folder-structure)

[__3. Getting Started__](#getting-started)

[__4. Further Reading__](#further-reading)

---

<a name="#introduction"></a>
## 1. Introduction

This repo is a scaffolding of an `Expo` application that uses `Expo Router` and it's file based routing capibilities. It has all the necessary packages needed to just start the application and begin adding routes.  

The reason it exists is to mitigate the amount of work needed to add typescript, jest, absolute imports and eslint into the traditional quickstart that the `create-expo-app` CLI command provides. 

Two sample screens have been created, so everything will run out of the box. Also a number of useful scripts have been created in the package.json that allow the ability to run, build, test, lint and serve the application. 

<a name="#folder-structure"></a>
## 2. Folder Structure

a. `App` Directory:
- This folder is used at the file based router. Any file that lives here will be converted to a route for the application. [Learn More](https://expo.github.io/router/docs/)

b. `Src` Directory:

- This is where the application logic will live. 

- The `assets` folder hosts images, fonts and base styles.

- The `components` folder is where reusable react components will live. 

- The `hooks` folder has a `useAppLoading` hook that handles the logic of loading assets and displaying the spinner. 

- The `layouts` folder is where the view wrapper logic lives.

- The `screens` Folder maps 1:1 with the routes in the `app` directory. The `/` path points to the `Home.tsx` screen, and then `/second` points to the `Second.tsx` screen. If you don't like this structure, you can move the component logic directly into the .tsx files in the app directly, however this provides a more robust solution.

<a name="#getting-started"></a>
## 3. Getting Started

a. Clone this repo to your local machine:
```
git clone git@github.com:thedevenvironment/expo-router-typescript.git
```

b. Install dependencies:
```
npm ci
```

c. Start the dev server:
```
npm run dev
```

d. When prompted, choose which platform to run on:
- `a` - android
- `i` - ios
- `w` - web

<a name="#further-reading"></a>
## 4. Further Reading:

- [Expo Router Docs](https://expo.github.io/router/docs/)

- [React Navigation Docs](https://reactnavigation.org/docs/getting-started)

- [Expo Docs](https://docs.expo.dev/tutorial/introduction/)
