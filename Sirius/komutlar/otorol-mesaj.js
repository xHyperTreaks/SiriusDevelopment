const db = require('wio.db');
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = (client, message, args, func) => {
    let sd = db.fetch(`premium.${message.guild.id}`)
    if (!sd) return message.channel.send(`Bu komutu sadece premium sunucular `)
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Bu komudu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!');
    const x = args.slice(0).join(' ');
    let preffix = db.fetch(`otorolM_${message.guild.id}`)

    if (args[0] === "sıfırla") {
        if (!preffix) {
            message.channel.send('Ayarlanmayan Şeyi Sıfırlayamazsın.')
            return
        }

        db.delete(`otorolM_${message.guild.id}`)
        message.channel.send('Otorol mesajı Başarıyla Sıfırlandı. ')
        return
    }

    if (!args[0]) {
        const embed = new Discord.MessageEmbed()
            .setTitle("Sirius")
            .setURL("https://discord.gg/FbJdk9T9pJ")
            .setAuthor("Otorol Mesaj Ayarlama")
            .addField("Kullanım:", ".otorol-mesaj MESAJ")
            .addField("Değişkenler:", "-uye- | Üye\n-toplamuye- | Toplam Üye Sayısı")
            .setColor(ayarlar.embedrenk)
            .setFooter(ayarlar.embedfooter)
        return message.channel.send(embed)
    }
    db.set(`otorolM_${message.guild.id}`, x)
    message.channel.send(`Otorol mesajını başarı ile \`${x}\` olarak ayarlandı.`)

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'otorol-mesaj',
    description: 'Bota eklenmesini istediğiniz şeyi tavsiye etmenizi sağlar',
    usage: 'prefix <prefix>'
};