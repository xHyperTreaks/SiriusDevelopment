const Discord = require("discord.js");
const db = require("wio.db");
const ayarlar = require("../ayarlar.json");

module.exports.run = async(client, message, args) => {

    let sunucu = message.guild.id

    if (db.has(`premium.${sunucu}`)) {
        const embed = new Discord.MessageEmbed()
            .setColor(ayarlar.embedrenk)
            .setAuthor("Sirius Premium Kontrol")
            .setTitle("Sirius")
            .addField("Sunucu: ", message.guild.name, true)
            .addField("Premium Durum: ", "Bu Sunucu Premium", true)
            .setURL("https://discord.gg/FbJdk9T9pJ")
            .setThumbnail(client.user.avatarURL())
            .setFooter(ayarlar.embedfooter)
            .setTimestamp()
        message.channel.send(embed)
    } else {
        const embed = new Discord.MessageEmbed()
            .setColor(ayarlar.embedrenk)
            .setAuthor("Sirius Premium Kontrol")
            .setTitle("Sirius")
            .addField("Sunucu: ", message.guild.name, true)
            .addField("Premium Durum: ", "Bu Sunucu Premium Değil", true)
            .setURL("https://discord.gg/FbJdk9T9pJ")
            .setThumbnail(client.user.avatarURL())
            .setFooter(ayarlar.embedfooter)
            .setTimestamp()
        message.channel.send(embed)
    }
}

module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["premiumk", "premiumkontrol"],
    permLevel: 0
};

module.exports.help = {
    name: 'prekontrol',
    description: 'Sirius Yardım',
    usage: 'yardım'
};