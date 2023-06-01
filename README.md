# discord-updoots
A discord bot tracking all the good boys in the discord chat

## Features
* **Updoot Tracking**: The bot tracks the number of positive and negative emojis for each user, similar to reddit's karma syste
* **Role Assignment**: Automatically assigns each user to a role depending on the amout of updoots they have
* **Persistence**: Uses redis to store and retreive user stores **_blazingly fast_**

## Setup
To run the discord bot locally, follow these steps:
1. Clone the repository

```
git clone https://github.com/hokamon002/discord-updoots
```

2. Install the dependencies

```
npm install
```

3. Set up the required environment variables found in .env.example
4. Start the bot

```
npm start
```

## TODOs
* Create slash commands to programitically create the data structure used for indexing roles  
  Right now, names are hardcoded, and those names are long (and weird)
* Create slash command to look up a user's updoots
* Enable this bot to be used among multiple servers
  * will need guild id and member id to create unique keys
