const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <html>
      <head>
        <title>Your Web View</title>
      </head>
      <body style="margin: 0; padding: 0;">
        <iframe width="100%" height="100%" src="https://axocoder.vercel.app/" frameborder="0" allowfullscreen></iframe>
      </body>
    </html>`);
});

server.listen(3000, () => {
  console.log('Server Online because of Axo Coder ✅!!');
});
require('dotenv').config();
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Self Bot Rich Presence working');
});
app.listen(process.env.PORT, () => {
  console.log('Self Bot Rich Presence working on port ' + process.env.PORT);
});

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  checkUpdate: false
});

client.on('ready', async () => {
  const rpc = new Discord.RichPresence({
    startTimestamp: Date.now()
  })
    .setApplicationId('1110523342479425636')
    .setType('STREAMING')
    .setURL(`https://www.youtube.com/watch?v=S2TaAcwC_zI`)
    .setDetails(`it's been too long`)
    .setName(`it's been too long`)
    .setState(`How strange to dream of you even when I am wide awake!`)
    .setParty({
      max: 5,
      current: 4,
      id: Discord.getUUID(),
    })
    .setAssetsLargeImage(`mp:attachments/1221347787002875934/1326199596346642482/desecpk-a459c3dd-3eb3-42cb-bc39-ecf8a09b1416.png?ex=677e8f1f&is=677d3d9f&hm=294541506b917193a5c4bf706997646b06314195afa3de6899142486c3576220&=&format=webp&quality=lossless&width=350&height=350`)
    .setAssetsLargeText(`crazy`)
    .addButton(`BRUTAL BEERUS`, `https://discord.gg/C6TWAAWAU9`)
    .addButton(`ZENITSU</3`, `https://discord.gg/CBgvQtYhVf`);

  client.user.setActivity(rpc.toJSON());
  console.log(`${client.user.tag} is ready!`);
});

// Account Token
client.login(mySecret = process.env['token'])

