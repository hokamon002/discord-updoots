import { Client, Events, GatewayIntentBits, Partials } from "discord.js";
import fs from "fs";
import path from "path";
import { configDotenv } from "dotenv";
configDotenv();

const discord = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
  ],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction],
});

const eventFiles = fs.readdirSync(path.join(__dirname, "events"));

for (const file of eventFiles) {
  import(`./events/${file}`)
    .then((module) => {
      const event = module.default;
      discord.on(event.name, (...args) => event.execute(...args));
    })
    .catch((err) => {
      console.error(`Error importing event file: ${file}`, err);
    });
}

discord.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

discord.login(process.env.DISCORD_SECRET);
