const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
const db = require('wio.db');
const ayarlar = require("../ayarlar.json");

exports.run = async(client, message, args) => {

    let user;

    if (message.mentions.users.first()) {
        user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    }

    let yetkili = db.fetch(`kayityetkili.${message.guild.id}`)
    let kadınrol = db.fetch(`kayitkadin_${message.guild.id}`)
    let kayitsizrol = db.fetch(`kayitsizrol.${message.guild.id}`)

    const yetki = new Discord.MessageEmbed()
        .setAuthor(client.user.username, client.user.avatarURL())
        .setColor(ayarlar.embedrenk)
        .setFooter(ayarlar.embedfooter)
        .setDescription(`Bu komutu kullanabilmek için <@&${yetkili}> Rolüne sahip olmalısın!`)
    if (!message.member.roles.cache.has(yetkili)) return message.channel.send(yetki)

    if (db.has(`kayitkadin_${message.guild.id}`) === false) return message.channel.send(`Bu ayarı kullanmanız için önce kayıt kadın rolünü ayarlamanız gerek.`)
    if (db.has(`kayitsizrol.${message.guild.id}`) === false) return message.channel.send(`Bu ayarı kullanmanız için önce Kayıtsız rolünü ayarlamanız gerek.`)
    if (db.has(`kayityetkili.${message.guild.id}`) === false) return message.channel.send(`Bu ayarı kullanmanız için önce Kayıt Yetkili rolünü ayarlamanız gerek.`)

    if (args[0]) {
        user.roles.remove(kayitsizrol)
        user.roles.add(kadınrol)
        const embed = new Discord.MessageEmbed()
            .setTitle("Sirius")
            .setURL("https://discord.gg/FbJdk9T9pJ")
            .setDescription("Kayıt Başarılı")
            .addField("Kayıt Eden:", message.author, true)
            .addField("Kayıt Olan", user, true)
            .addField("Verilen Rol:", `<@&${kadınrol}>`)
            .setFooter(ayarlar.embedfooter)
            .setColor(ayarlar.embedrenk)
        return message.channel.send(embed);
    } else {
        return message.channel.send("Lütfen Kayıt Edilcek kişiyi Etiketleyin")
    }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kadın'],
    permLevel: `Yetki gerekmiyor.`
};

exports.help = {
    name: 'kadın-kayıt',
    category: "Kayıt",
    description: 'İstediğiniz kullanıcı hakkında veya komutu kullanan kullanıcı hakkında bilgi verir.',
    usage: '.kullanıcı-bilgi veya .kullanıcı-bilgi <@kişi-etiket>'
};