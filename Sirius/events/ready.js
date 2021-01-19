const chalk = require('chalk');
const db = require('wio.db')
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json")
module.exports = client => {
  var prefix = ayarlar.prefix
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus(`dnd`);
   var oyun = [
        `🌐 ${prefix}yardım | fsnhost.com`,
        `📢 ${prefix}yenilikler | fsnhost.com`,
        `😷 Corona komutu!  fsnhost.com`,  
        `💡 ${prefix}davet | Beni ekleyin | fsnhost.com`,
        `👨 ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcı! fsnhost.com`,
        `🌍 ${client.guilds.cache.size} Sunucuda Hizmet! | fsnhost.com`,
    ];
    setInterval(function() {
        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
        client.user.setActivity(oyun[random]);
        }, 2 * 2500);
        let girisembed = new Discord.MessageEmbed()
        .setAuthor(client.user.username, client.user.avatarURL())
        .setColor(ayarlar.embedrenk)
        .setDescription(`${client.guilds.cache.size} sunucuya hizmet vermek için tekrar başladım.`)
        .setFooter(ayarlar.embedfooter)
      //client.channels.cache.get(`779304740424908820`).send(girisembed)
}