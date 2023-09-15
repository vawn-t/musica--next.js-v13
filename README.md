# Next.js v13 Practice

## OVERVIEW

- This document outlines a comprehensive plan for practicing Next.js v13. The objective of this practice is to develop an online music streaming web application that enables users to play songs from available albums.

## TIMELINE

- Estimate time: **12 days (2023/08/28 - 2023/09/14)**
- Actual time: **12 days (2023/08/28 - 2023/09/14)**

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

- [Next.js (version 13)](https://nextjs.org/docs)
- React
- TypeScript
- [SWR](https://swr.vercel.app/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- Deploy environment:
  - [Vercel](https://vercel.com/): (Vercel's frontend cloud gives developers frameworks, workflows, and infrastructure to build a faster, more personalized web)
  - [Render](https://render.com/) (Render is a unified cloud to build and run all your apps and websites with free TLS certificates, a global CDN, DDoS protection, private networks, and auto deploys from Git):
    - Server: [Strapi](https://strapi.io/) (Strapi is the next-gen headless CMS, open-source, javascript, enabling content-rich experiences to be created, managed and exposed to any digital device.)
    - Database: [Cloudinary](https://cloudinary.com/) (Streamline media management and improve user experience by automatically delivering images and videos, enhanced and optimized for every user.)

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
