const db = require('wio.db')
const Discord = require('discord.js')
const ayarlar = require("../ayarlar.json")

exports.run = async(bot, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Bu komudu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')


    let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

    const sayı = parseInt(args[0])

    if (sayı <= 50) {
        if (sayı >= 0) {
            if (db.has(`seviyesistem_${message.guild.id}`)) {
                db.set(`xpverilcek_${message.guild.id}`, args[0])
                const embed = new Discord.MessageEmbed()
                    .setColor(ayarlar.embedrenk)
                    .setFooter(ayarlar.embedfooter)
                    .setDescription("Mesaj Başı Verilcek XP Başarıyla `" + args[0] + "` Olarak ayarlandı")
                message.channel.send(embed)
            } else {
                message.channel.send("Bu Komutu Kullanabilmek için ilk Seviye Sistemini Açman Gerek `" + prefix + "seviye-sistemi aç`")
            }
        } else {
            message.channel.send("<@" + message.author.id + "> En fazla XP değeri 50")
        }
    } else {
        message.channel.send("<@" + message.author.id + "> En fazla XP değeri 50")
    }


}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'xp-ayarla',
    description: 'Selamün aleyküm, Aleyküm selam',
    usage: 'sa-as'
};