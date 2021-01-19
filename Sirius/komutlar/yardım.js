const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

module.exports.run = async(client, message, args) => {
    const yardım = new Discord.MessageEmbed()
        .setColor(ayarlar.embedrenk)
        .setAuthor("Sirius")
        .setTitle("Sirius")
        .setURL("https://discord.gg/FbJdk9T9pJ")
        .setDescription("[Bot'a Oy Ver](https://top.gg/bot/779033089863188494)")
        .addField("**Kullanıcı Komutları (7)**", "Kullanıcıların kullanabilceği Komutlar\n`korona`, `ping`, `istatistik`, `davet`, `profil`, `tag`, `seviye`\n")
        .addField("**Kayıt Komutları (7)**", "Public Sunucuları için Kayıt Komutları\n`kayıt-kanal`, `kadın-rol`, `erkek-rol`, `erkek-kayıt`, `kadın-kayıt`, `kayıtsızrol`, `tag ayarla`, `kayıtyetkili`\n")
        .addField("**Moderasyon Komutları (14)**", "Sunucu sahipleri için komutlar\n`sa-as`, `sunucu-tanıt`, `sil`, `prefix`, `otorol`, `sayaç`, `hızlıçekiliş`, `çekiliş`, `giriş-çıkış`, `seviye-sistemi`, `seviye-kanal`, `xp-ayarla`, `küfür`, `reklam`\n")
        .addField("**Premium Komutları (3)**", "Premium Sunucular için komutlar\n`otorol-mesaj`, `sayaç-mesaj`, `seviye-mesaj`\n")
        .setThumbnail(client.user.avatarURL())
        .setFooter(ayarlar.embedfooter)
        .setTimestamp()
    message.channel.send(yardım)
}

module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["help"],
    permLevel: 0
};

module.exports.help = {
    name: 'yardım',
    description: 'Sirius Yardım',
    usage: 'yardım'
};