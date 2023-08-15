# Get-Party

[![licence mit](https://img.shields.io/badge/licence-MIT-blue.svg)](./LICENSE)

Este é um projeto pessoal desenvolvido a fim de aprender principalmente sobre construção de APIs com NodeJS e ser uma porta de entrada para o desenvolvimento back-end.

## Technologies used

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
<br>
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
<br>
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

## Run on my machine

### Requirements

- [Node LTS](https://nodejs.org/en)
  - Using [npm](https://docs.npmjs.com/cli/v9/configuring-npm/install) or [yarn](https://classic.yarnpkg.com/en/docs/install)
- Is required a clusther on the [MongoDB](https://www.mongodb.com/)
  - Step By Step...
    - [Sign Up](https://account.mongodb.com/account/register) or [SIgn In](https://account.mongodb.com/account/login)
    - Into Projects tab, create a new Project
    - Into Database tab, create a Clusther
    - recommended Settings
      - Shared > AWS or Google Cloud > Create a Clusther
    - Save Connections info, as: HOST, USERNAME and PASSWORD.
- Google and Github authentication credentials are also required
  - Get Google credentials...
    - Into [APIs and Active Services](https://console.cloud.google.com/projectselector2/apis/dashboard?organizationId=0&supportedpurview=project) create a new project
    - Into Credentials tab, Create Credentials > OAuth client id > Web Application
      - Name: `Get-Party`
      - Authorized JavaScript Sources: `http://localhost:3000`
      - Authorized Redirect URIs: `http://localhost:3000/api/auth/callback/google`
      - Save the `Client Id` and the `CLient Secret Key`
  - Get Github credentials...
    - Into Github, click on the Picture Profile and go Settings
    - Developer Settings > [OAuth Apps](https://github.com/settings/developers) > New OAuth Apps
    - Application name: `Get-Party`
    - Homepage URL: `http://localhost:3000`
    - Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
    - Save the `Client Id` and the `CLient Secret Key`

### Clone the Repository `https://github.com/kevensouzz/get-party.git`
### Setup
- Environment Variables
  - `cd ./backend` > `yarn` or `npm install` | `npm i` to install backend dependencies
    - create a `.env` file into backend root
    - Inside this .env file you must put the MongoDb connection info...

```js
        DB_HOST="your host"
        DB_USER="your username"
        DB_PASSWORD="your password"
```

  - `cd ./frontend` > `yarn` or `npm install` | `npm i` to install frontend dependencies
    - create a `.env` file into frontend root
    - Inside this .env file you must put the `NEXTAUTH SECRET`, `GOOGLE CREDENTIALS INFO` and `GITHUB CREDENTIALS INFO`...

```js
        NEXTAUTH_SECRET="put a secret code to your nextauth connection"

        GOOGLE_ID="Google Client Id"
        GOOGLE_SECRET="Google Client Secret Key"

        GITHUB_ID="Github Client Id"
        GITHUB_SECRET="Github Client Secret Key"
```

### Run

- /backend > `yarn app` or `npm run app`
- /frontend > `yarn dev` or `npm run dev`

---

<p align="center" >
  XD
</p>
