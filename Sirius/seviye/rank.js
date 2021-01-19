const db = require('wio.db')
const Discord = require('discord.js')
const ayarlar = require("../ayarlar.json")

exports.run = async(bot, message, args) => {

    let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
    if (!db.fetch(`seviyesistem_${message.guild.id}`)) return message.channel.send("Bu Komutu Kullanabilmek için ilk Seviye Sistemini Açman Gerek `" + prefix + "seviye-sistemi aç`");

    let kullanıcı;

    if (message.mentions.users.first()) {
        kullanıcı = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    } else {
        kullanıcı = message.author;
    }
    const embed = new Discord.MessageEmbed()
        .setColor(ayarlar.embedrenk)
        .setFooter(ayarlar.embedfooter)
        .setThumbnail(kullanıcı.avatarURL())
        .setTitle(kullanıcı.username + " Kişisinin Seviye Bilgileri")
        .addField("Seviye:", db.fetch(`seviye.${message.guild.id}.${kullanıcı.id}`) || 0, true)
        .addField("XP: ", db.fetch(`xp.${message.guild.id}.${kullanıcı.id}`) || 0, true)
    message.channel.send({ embed })
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["seviye"],
    permLevel: 0
};

exports.help = {
    name: 'rank',
    description: 'Selamün aleyküm, Aleyküm selam',
    usage: 'sa-as'
};