const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');

// 1. تهيئة البوت
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// 2. أمر للرد على الرسائل
client.on('messageCreate', (message) => {
  if (message.content === 'V1') {
    message.reply('H E L L O');
  }
});

// 3. خادم ويب (للاستضافة على Railway)
const app = express();
const PORT = 3000;
app.get('/', (req, res) => res.send('🤖 البوت يعمل!'));
app.listen(PORT, () => console.log('✅ الخادم يعمل'));

// 4. تشغيل البوت
require('dotenv').config();
client.login(process.env.DISCORD_TOKEN);