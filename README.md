# Next.js v13 Practice

## OVERVIEW

- This document outlines a comprehensive plan for practicing Next.js v13. The objective of this practice is to develop an online music streaming web application that enables users to play songs from available albums.

## TIMELINE

- Estimate time: **12 days (2023/08/28 - 2023/09/14)**
- Actual time: **13 days (2023/08/28 - 2023/09/15)**

## TEAM SIZE

- 1 developer:
  - [Van Tran](van.tran@asnet.com.vn)

## TARGETS

- Apply Routes
- Apply Data Fetching
- Apply Caching
- Apply Rendering
  - Server Components
  - Client Components
- File Conventions

## TECHNICAL STACK

- Next.js: Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.
- React/React hooks: Hooks are the new feature introduced in the React 16.8 version. It allows you to use state and other React features without writing a class. Hooks are the functions which "hook into" React state and lifecycle features from function components. It does not work inside classes.
- TypeScript: TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- HTML/CSS
- [Mockapi](https://mockapi.io/): MockAPI is a simple tool that lets you easily mock up APIs, generate custom data, and preform operations on it using RESTful interface. MockAPI is meant to be used as a prototyping/testing/learning tool.
- Axios: Axios is a promise-based HTTP Client for node.js and the browser.

## REQUIREMENT DETAILS

- Read more detail requirement in [here](https://vawn.notion.site/Van-Tran-react-next-js13-practice-982e96ee8e364e769590207155944b1a?pvs=4).

## DESIGN

- [Figma](<https://www.figma.com/file/2HlDcj69jH0cIJvhw4X5iX/Musica-(Edited)?type=design&node-id=0%3A1&mode=design&t=rtRXELnR1pJxVz02-1>)

## TASK MANAGEMENT

- [Trello](https://trello.com/invite/b/FKdtBzQU/ATTIcb4d1d2f919d9fb416b0ff8190551078974F94F6/musica-workplace)

## TEXT EDITOR

- [Visual studio code](https://code.visualstudio.com)

## DIRECTORY STRUCTURE

```
├── node_modules
├── public
└── src
    ├── app
    │   ├── albums/[id]
    │   ├── api/revalidate
    │   ├── collection
    │   └── home
    ├── components
    │   ├── AlbumCard
    │   ├── AlbumInfo
    │   ├── Banner
    │   ├── Button
    │   ├── CollectionCards
    │   ├── Loading
    │   ├── MessagePopup
    │   ├── MusicController
    │   ├── Navigation
    │   ├── RowCards
    │   ├── Song
    │   └── Typography
    ├── constants
    ├── hooks
    ├── models
    ├── services
    ├── types
    └── utils
```

## GET STARTED

- Clone project:

  ```bash
  $ git clone git@gitlab.asoft-python.com:van.tran/react-training.git
  ```

- Checkout branch:

  ```bash
  $ git checkout develop
  ```

- Change directory:

  ```bash
  $ cd musica
  ```

- Install packages:

  ```bash
  $ pnpm i
  ```

- Start project

  ```bash
  $ pnpm dev
  ```

- Open browser and and type http://localhost:3000 in address bar

## DEPLOYMENT

- https://musica-app-topaz.vercel.app
