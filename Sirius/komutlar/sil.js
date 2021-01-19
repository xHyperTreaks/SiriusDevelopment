const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(':no_entry: Bu komudu kullanabilmek için `Mesajları Yönet` yetkisine sahip olmalısın!')
    if (!args[0] || isNaN(args[0])) return message.reply(`Temizlenecek mesaj miktarını belirtmelisin! (İstediğin kadar)`);

    let sayi = parseInt(args[0])

    if (sayi <= 300) {
        message.channel.bulkDelete(args[0])
        message.channel.send("<@" + message.author.id + "> " + sayi + "  Adet Mesaj Başarı İle Uzaya Fırlatıldı. :rocket:")
    } else {
        message.channel.send("<@" + message.author.id + "> En Fazla 300 Mesaj Silebilirsiniz!")
    }

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["temizle", "sil"],
    permLevel: 0
};

exports.help = {
    name: 'temizle',
    description: 'Belirtilen miktarda mesajı temizler. (Sınırsız)',
    usage: 'temizle <miktar>',
    kategori: 'yetkili'
};