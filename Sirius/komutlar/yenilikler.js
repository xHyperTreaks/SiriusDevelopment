const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

module.exports.run = async(client, message, args) => {
    const yardım = new Discord.MessageEmbed()
        .setColor(ayarlar.embedrenk)
        .setAuthor("Sirius")
        .setTitle("Sirius")
        .setURL("https://discord.gg/FbJdk9T9pJ")
        .setThumbnail(client.user.avatarURL())
        .addField("Eklenenler", "`Kayıt Sistemi: .kayıt`")
        .setFooter(ayarlar.embedfooter)
        .setTimestamp()
    message.channel.send(yardım)
}

module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["news"],
    permLevel: 0
};

module.exports.help = {
    name: 'yenilikler',
    description: 'Sirius Yenilikler',
    usage: 'yardım'
};