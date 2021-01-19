const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("wio.db");

module.exports.run = async(client, message, args) => {

    let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

    const yardım = new Discord.MessageEmbed()
        .setColor(ayarlar.embedrenk)
        .setAuthor("Sirius Kayıt Komutları")
        .setTitle("Sirius")
        .setURL("https://discord.gg/FbJdk9T9pJ")
        .setDescription("[Bot'a Oy Ver](https://top.gg/bot/779033089863188494)")
        .addField(prefix + "**kayıt-kanal <#kanal/sıfırla>**", "Kayıt Kanalını Ayarlar Sıfırlar.")
        .addField(prefix + "**erkek-rol <@rol/sıfırla>**", "Erkek Rolünü Ayarlar Sıfırlar.")
        .addField(prefix + "**kadın-rol <@rol/sıfırla>**", "Kadın Rolünü Ayarlar Sıfırlar.")
        .addField(prefix + "**kayıtyetkili <@rol/sıfırla>**", "Kayıt Yetkili Rolünü Ayarlar Sıfırlar.")
        .addField(prefix + "**kayıtsızrol <@rol/sıfırla>**", "Kayıtsız Rolünü Ayarlar Sıfırlar.")
        .addField(prefix + "**kayıt-kadın <@Kişi>**", "Bir Kadını Kayıt eder")
        .addField(prefix + "**kayıt-erkek <@Kişi>**", "Bir Erkeği Kayıt eder")
        .addField(prefix + "**tag ayarla <TAGINIZ>**", "Sunucu Tagınızı Ayarlar")
        .setThumbnail(client.user.avatarURL())
        .setFooter(ayarlar.embedfooter)
        .setTimestamp()
    message.channel.send(yardım)
}

module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["kayit", "yardımkayit"],
    permLevel: 0
};

module.exports.help = {
    name: 'kayıt',
    description: 'Sirius Yardım',
    usage: 'yardım'
};