# Express js with Next js - Typescript boilerplate for future project

## Features

- **Nodemon**
- **Eslint**
- **Editor config**
- **Type safe with env** ([dot env safe](https://www.npmjs.com/package/dotenv-safe) and [gen env type](https://github.com/benawad/gen-env-types))

## Scripts

```ts
"scripts": {
    // start server in dev and watch mode
    "dev:watch": "nodemon --exec",
    // start server only dev mode
    "dev": "cross-env NODE_ENV=development ts-node --project tsconfig.server.json server/index.ts",
    // start server in production mode
    "start": "link-module-alias && cross-env NODE_ENV=production node dist/index.js",
    // run linter
    "lint": "eslint \"**/*.{ts,tsx}\" --ignore-pattern node_modules/",
    // gen type for env base on file .env then output is .env.example
    "gen-env-example": "npx gen-env-types .env -o src/types/env.d.ts -e .",
    // build server in prod mode
    "build:server": "tsc --project tsconfig.server.json",
    // build next js client in prod mode
    "build:next": "next build",
    // build both server and client
    "build": "npm run build:next && npm run build:server"
},
```
