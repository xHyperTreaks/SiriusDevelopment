const db = require('wio.db')
const Discord = require('discord.js')

exports.run = async(bot, message, args) => {

    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(':no_entry: Bu komudu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!')
    if (!args[0]) return message.channel.send(':no_entry: SA-AS Sistemini Kapatmak/Açmak için; `.küfür aç veya kapat`')

    if (args[0] == 'aç') {
        db.set(`kufurengel.${message.guild.id}`, 'açık')
        message.channel.send(`✔ Bu Sunucu artık Sirius Tarafından Küfürlerden Korunmakta.`)

    }
    if (args[0] == 'kapat') {
        db.delete(`kufurengel.${message.guild.id}`)
        message.channel.send(`✔ Bu Sunucu artık Sirius Tarafından Küfürlerden Korunmamakta.`)

    }

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["kufur", "küfür-engelle"],
    permLevel: 0
};

exports.help = {
    name: 'küfür',
    description: 'Selamün aleyküm, Aleyküm selam',
    usage: 'sa-as'
};