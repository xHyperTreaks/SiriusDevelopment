const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

module.exports.run = async(client, message, args) => {
    const ping = new Discord.MessageEmbed()
        .setColor(ayarlar.embedrenk)
        .setAuthor("Sirius")
        .setTitle("Sirius")
        .setURL("https://discord.gg/FbJdk9T9pJ")
        .setThumbnail(client.user.avatarURL())
        .addField("Bot Gecikme Hızı", client.ws.ping + "ms", true)
        .addField("Mesaj Gecikme Hızı", Date.now() - message.createdTimestamp + "ms", true)
        .setFooter(ayarlar.embedfooter)
        .setTimestamp()
    message.channel.send(ping)
}

module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["ping"],
    permLevel: 0
};

module.exports.help = {
    name: 'gecikme',
    description: 'Sirius Gecikme',
    usage: 'yardım'
};