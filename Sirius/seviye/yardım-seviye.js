const db = require('wio.db')
const Discord = require('discord.js')
const ayarlar = require("../ayarlar.json")


exports.run = async(bot, message, args) => {

    let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

    const embed = new Discord.MessageEmbed()
        .setTitle("Seviye Yardım")
        .setDescription("Seviye Sistemi")
        .addField(prefix + "seviye-sistemi <aç/kapat>", "Seviye Sistemini açar/kapar")
        .addField(prefix + "seviye", "Seviyene Kartını Gösterir")
        .addField(prefix + "seviye-kanal <#kanal/kapat>", "Seviye Log Kanalını açar/kapar")
        .addField(prefix + "seviye-mesaj", "Seviye Mesaj Ayarlar (Sadece Premium)")
        .addField(prefix + "xp-ayarla", "Mesaj Başı XP ayarlar")
        .setColor(ayarlar.embedrenk)
        .setFooter(ayarlar.embedfooter)
    message.channel.send(embed)
}




exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["help-rank"],
    permLevel: 0
};

exports.help = {
    name: 'yseviye',
    description: 'Selamün aleyküm, Aleyküm selam',
    usage: 'sa-as'
};