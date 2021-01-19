const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("wio.db");

exports.run = async(client, message, args) => {

    let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

    const yardım = new Discord.MessageEmbed()
        .setColor(ayarlar.embedrenk)
        .setAuthor("Sirius Moderasyon Komutları")
        .setTitle("Sirius")
        .setURL("https://discord.gg/FbJdk9T9pJ")
        .setDescription("[Bot'a Oy Ver](https://top.gg/bot/779033089863188494)")
        .addField(prefix + "**sa-as <kapat/aç>**", "Oto Sa-As Cevaplama Sistemini açar kapar.")
        .addField(prefix + "**otorol <@rol/sıfırla>**", "Otorol Sistemini ayarlar sıfırlar.")
        .addField(prefix + "**sayaç <sayı/sıfırla>**", "Sayaç Sistemini ayarlar sıfırlar.")
        .addField(prefix + "**giriş-çıkış <#kanal/sıfırla>**", "Giriş çıkış Sistemini Açar Kapar")
        .addField(prefix + "**sunucu-tanıt**", "Sunucunuzu Destek Sunucumuzda tanıtır.")
        .addField(prefix + "**prefix**", "Prefixi Değişir.")
        .addField(prefix + "**sil**", "Belirli miktarda mesaj siler.")
        .addField(prefix + "**hızlıçekiliş**", "Hızlı Çekiliş başlatır.")
        .addField(prefix + "**çekiliş**", "Gelişmiş Hızlı Çekiliş başlatır.")
        .addField(prefix + "**küfür <aç/kapat>**", "Küfür Engellemeyi açar kapar")
        .addField(prefix + "**reklam <aç/kapat>**", "Reklam Engellemeyi açar kapar")
        .setThumbnail(client.user.avatarURL())
        .setFooter(ayarlar.embedfooter)
        .setTimestamp()
    message.channel.send(yardım)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["moderation", "yardımmoderasyon"],
    permLevel: 0
};

exports.help = {
    name: 'moderasyon',
    description: 'Sirius Yardım',
    usage: 'yardım'
};