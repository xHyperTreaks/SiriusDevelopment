const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

module.exports.run = async(client, message, args) => {
    const davet = new Discord.MessageEmbed()
        .setColor(ayarlar.embedrenk)
        .setAuthor("Sirius")
        .setTitle("Sirius")
        .setURL("https://discord.gg/FbJdk9T9pJ")
        .setThumbnail(client.user.avatarURL())
        .setDescription("[Botu Sunucuna Davet Et](https://discord.com/api/oauth2/authorize?client_id=779033089863188494&permissions=8&scope=bot)")
        .setFooter(ayarlar.embedfooter)
        .setTimestamp()
    message.channel.send(davet)
}

module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["davet"],
    permLevel: 0
};

module.exports.help = {
    name: 'davet',
    description: 'Sirius Gecikme',
    usage: 'yardım'
};