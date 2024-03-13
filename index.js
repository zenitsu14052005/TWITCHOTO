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
  const rpc = new Discord.RichPresence()
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
    .setAssetsLargeImage(`mp:attachments/1178850195233063003/1217581881470750851/2ecb86d208eff8ec407dac3c09256c7b.gif?ex=66048c7e&is=65f2177e&hm=0e586cb343ecd43b4b5c9967de5b7c343741781c404aacdd326d01de80caa792&`)
    .setAssetsLargeText(`crazy`)
    .addButton(`BRUTAL BEERUS`, `https://discord.gg/C6TWAAWAU9`)
    .addButton(`ZENITSU</3`, `https://discord.gg/zenni-realm-873124938435944488`)
  client.user.setActivity(rpc.toJSON());
  console.log(`${client.user.tag} is ready!`);
});

// Account Token
client.login(mySecret = process.env['token'])

