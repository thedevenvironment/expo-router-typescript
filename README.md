![Expo Router Typescript](https://thedevenvironment.com/expo-router-typescript.png)

---

**INTRODUCTION**

This repo is a scaffolding of an Expo application that uses Expo Router and it's file based routing capibilities. It has all the necessary packages needed to just start the application and begin adding routes.

The reason it exists is to mitigate the amount of work needed to add typescript, jest, absolute imports and eslint into the traditional quickstart that the "create-expo-app" CLI command provides.

Two sample screens have been created, so everything will run out of the box. Also a number of useful scripts have been created in the package.json that allow the ability to run, build, test, lint and serve the application.

---

**FOLDER STRUCTURE**

- `src`: The main directory of the application.

  - `app`: Folder based routing directory.

  - `assets`: Images, fonts, sounds, etc.

  - `components`: Reusable React components.

  - `config`: Shared configuration values.

  - `hooks`: Reusable hooks.

  - `types`: Global and local typings.

  - `utils`: Helpers and reusable methods.

---

**GETTING STARTED**

```bash
# Clone Repo
git clone git@github.com:thedevenvironment/expo-router-typescript.git
```

```bash
# Install Dependencies
npm run setup
```

```bash
# Start The Dev Server
npm run dev

# Press 's' to switch to dev build
# Press 'a' to open Android simulator
# Press 'i' to open iOS simulator
# Press 'w' to open web browser
```

---

**LEARN MORE**

[Expo Documentation](https://docs.expo.dev/tutorial/introduction/)

[Expo Router Documentation](https://expo.github.io/router/docs/)

[React Navigation Documentation](https://reactnavigation.org/docs/getting-started)
