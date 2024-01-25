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
    .setAssetsLargeImage(`mp:attachments/1121028827339030629/1181720003364528249/sad-anime-hug.gif?ex=65821584&is=656fa084&hm=a0944bda9006c2425081cae5b4b267ff3c1202d684f6116c269b47b9c34f376f&`)
    .setAssetsLargeText(`crazy`)
    .addButton(`BRUTAL BEERUS`, `https://discord.gg/C6TWAAWAU9`)
    .addButton(`ZENITSU</3`, `https://discord.gg/CBgvQtYhVf`)
  client.user.setActivity(rpc.toJSON());
  console.log(`${client.user.tag} is ready!`);
});

// Account Token
client.login(mySecret = process.env['token'])

