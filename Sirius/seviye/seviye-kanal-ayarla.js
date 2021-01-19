const db = require('wio.db')
const Discord = require('discord.js')
const ayarlar = require("../ayarlar.json")

exports.run = async(bot, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Bu komudu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')

    let kanal = message.mentions.channels.first() || message.guild.channels.cache.find(c => c.name === args.slice(0).join(' '))

    let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

    if (db.has(`seviyesistem_${message.guild.id}`)) {
        if (kanal) {
            db.set(`seviyeKanal_${message.guild.id}`, kanal.id)
            const embed = new Discord.MessageEmbed()
                .setColor(ayarlar.embedrenk)
                .setFooter(ayarlar.embedfooter)
                .setDescription("Seviye Sistemi Kanalı Başarıyla <#" + kanal + "> ayarlandı\nSeviye Kanalı Kapatmak için  `" + prefix + "seviye-kanal kapat`")
            message.channel.send(embed)
        } else {
            message.channel.send("Bir kanal etiketlemelisin")
        }

    } else {
        message.channel.send("Bu Komutu Kullanabilmek için ilk Seviye Sistemini Açman Gerek `" + prefix + "seviye-sistemi aç`")
    }

    if (args[0] === "kapat") {
        db.delete(`seviyeKanal_${message.guild.id}`)
        message.channel.send("Seviye Log Kanalı Başarıyla Kapatıldı!")
    }




}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["seviye-kanal"],
    permLevel: 0
};

exports.help = {
    name: 'seviye-log',
    description: 'Selamün aleyküm, Aleyküm selam',
    usage: 'sa-as'
};