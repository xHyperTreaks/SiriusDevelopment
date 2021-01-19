const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')


exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bunun için gerekli iznin yok');
    if (mesaj.length < 1) return message.reply('Ödülü Yazmayı Unuttun ');
    message.delete();
    const embed = new Discord.MessageEmbed()
    .addField('Sunucu İsmi:', message.guild.name , true)    
    .setColor(ayarlar.embedrenk)
    .addField('Ödül', mesaj)
    .addField("Çekilişi Başlatan:", `<@${message.author.id}>`, true)
    .addField("Çekilişin Yapıldığı Kanal:", "<#" + message.channel.id + ">")
    .addField("Çekilişin Yapıldığı Zaman:", message.createdAt)
    .addField('Çekilişi Kazanan', `<@${message.guild.members.cache.random().id}>`)
    .setThumbnail(message.guild.iconURL())
	.setFooter(ayarlar.embedfooter)
    return message.channel.send(embed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 3
  };
  
  exports.help = {
    name: 'çekiliş',
    description: 'embedyaz',
    usage: 'embedyaz'
  };