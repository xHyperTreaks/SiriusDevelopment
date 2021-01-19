const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (bot, message , args) => {
   let mesaj = args.slice(0).join(' ');
   if (mesaj.length < 1) return message.reply('Ne çekilişi olucak onuda yazman lazım.');
   const embed = new Discord.MessageEmbed()
  .setColor(ayarlar.embedrenk)
  .addField('Ödül' , `${mesaj}`)
  .addField('Kazanan:', "<@" + message.guild.members.cache.random().id + ">")
  .setFooter(ayarlar.embedfooter)
  return message.channel.send(embed);
    }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["hızlıçekiliş"],
  permLevel: 2
};

exports.help = {
  name: 'hçekiliş',
  description: 'çekilişyap.',
  usage: 'çekilişyap'
};
