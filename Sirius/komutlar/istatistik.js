const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("wio.db")


module.exports.run = async(client, message, args) => {
    const ping = new Discord.MessageEmbed()
        .setColor(ayarlar.embedrenk)
        .setAuthor("Sirius")
        .setTitle("Sirius")
        .setURL("https://discord.gg/FbJdk9T9pJ")
        .setThumbnail(client.user.avatarURL())
        .addField("Sunucu Sayısı", client.guilds.cache.size)
        .addField("Kullanıcı Sayısı", `${client.guilds.cache
          .reduce((a, b) => a + b.memberCount, 0)
          .toLocaleString()}`)
        .addField("Veri Kullanımı", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(1))
        .addField("Bu Sunucuda Engelledim Küfür Sayısı", db.fetch(`küfürengellendi.${message.guild.id}`) || 0)
        .addField("Bu Sunucuda Engelledim Reklam Sayısı", db.fetch(`reklamengellendi.${message.guild.id}`) || 0)
        .addField("Geliştiriciler", "<@" + ayarlar.sahip + "> | ♚ Âxzÿl.xll ϟ#0001 | 588414969364873236")
        .setFooter(ayarlar.embedfooter)
        .setTimestamp()
    message.channel.send(ping)
}

module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["i"],
    permLevel: 0
};

module.exports.help = {
    name: 'istatistik',
    description: 'Sirius İstatistik',
    usage: 'yardım'
};