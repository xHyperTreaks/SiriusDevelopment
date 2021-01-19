const db = require('wio.db')
const Discord = require('discord.js')

exports.run = async(bot, message, args) => {

    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(':no_entry: Bu komudu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!')
    if (!args[0]) return message.channel.send(':no_entry: SA-AS Sistemini Kapatmak/Açmak için; `.reklam aç veya kapat`')

    if (args[0] == 'aç') {
        db.set(`reklamengel.${message.guild.id}`, 'açık')
        message.channel.send(`✔ Bu Sunucu artık Sirius Tarafından Reklamlardan Korunmakta.`)

    }
    if (args[0] == 'kapat') {
        db.delete(`reklamengel.${message.guild.id}`)
        message.channel.send(`✔ Bu Sunucu artık Sirius Tarafından Reklamlardan Korunmamakta.`)

    }

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["reklam-engelle"],
    permLevel: 0
};

exports.help = {
    name: 'reklam',
    description: 'Selamün aleyküm, Aleyküm selam',
    usage: 'sa-as'
};