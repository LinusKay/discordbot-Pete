const { Client, Events, GatewayIntentBits, ActivityType } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
    client.user.setPresence({
        status: "dnd",  //You can show online, idle....
        activities: [{ name: `Kickin' it.`, type: ActivityType.Custom }],
    });
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;
    if(message.mentions.has(client.user)) {
        message.reply("Get real.");
    }
    else {
        const random = Math.random();
        if (random <= 0.05) {
            message.reply("Get real.");
        }
    }
});

client.login(token);
