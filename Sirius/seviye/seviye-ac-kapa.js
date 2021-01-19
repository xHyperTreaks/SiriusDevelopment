const db = require('wio.db')
const Discord = require('discord.js')
const ayarlar = require("../ayarlar.json")

exports.run = async(bot, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Bu komudu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
    if (!args[0]) return message.channel.send(':no_entry: Seviye Sistemini Kapatmak/Açmak için; `.seviye-sistemi aç/kapat`')

    let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

    if (args[0] == 'aç') {
        if (!db.has(`seviyesistem_${message.guild.id}`)) {
            db.set(`seviyesistem_${message.guild.id}`, 'açık')
            const embed = new Discord.MessageEmbed()
                .setColor(ayarlar.embedrenk)
                .setDescription("Seviye Sistemi başarıyla açıldı.\nEğer Sistemi Kapatmak istiyorsanız " + prefix + "seviye-sistemi kapat")
                .setFooter(ayarlar.embedfooter)
            message.channel.send(embed)
        } else {
            message.channel.send("Seviye Sistemi Zaten Açık!")
        }

    }
    if (args[0] == 'kapat') {
        if (db.has(`seviyesistem_${message.guild.id}`)) {
            db.delete(`seviyesistem_${message.guild.id}`)
            const embed = new Discord.MessageEmbed()
                .setColor(ayarlar.embedrenk)
                .setDescription("Seviye Sistemi başarıyla kapatıldı.\nEğer Sistemi açmak istiyorsanız " + prefix + "seviyesistemi aç")
                .setFooter(ayarlar.embedfooter)
            message.channel.send(embed)

        } else {
            message.channel.send("Seviye Sistemi Zaten Kapalı!")
        }
    }

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["seviye-sistem"],
    permLevel: 0
};

exports.help = {
    name: 'seviye-sistemi',
    description: 'Selamün aleyküm, Aleyküm selam',
    usage: 'sa-as'
};