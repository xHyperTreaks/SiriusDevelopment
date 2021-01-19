const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

const ms = require("ms");
const db = require("wio.db");
exports.run = async(client, message, args) => {
    let cooldown = 8.64e7, // 24 Saat
        amount = Math.floor(Math.random() * 1000) + 4000;

    let lastDaily = await db.fetch(`gunluk_${message.guild.id}`);
    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily));

        const pinkcode = new Discord.MessageEmbed()
            .setThumbnail(client.user.avatarURL())
            .setDescription(
                "Bu Komutu Sadece `24 Saatte` Bir Kullanabilirsin:no_entry:"
            )
            .setColor(0x00ffff);
        return message.channel.send(pinkcode);
    } else {
        const pinkcode = new Discord.MessageEmbed()
            .setThumbnail(client.user.avatarURL())
            .setTitle("Başarılı :white_check_mark:")
            .setDescription(
                "**Sunucunuz Başarıyla** [Sunucumda](https://discord.gg/FbJdk9T9pJ) **Tanıtıldı.**\n**24 Saat Sonra Tekrar Sunucunuzu Tanıtabilirsiniz:bekle:**"
            )
            .setColor(ayarlar.embedrenk);
        message.channel.send(pinkcode);
        message.channel.createInvite({ maxAge: 0 }).then(invite => {
            const pinkcode = new Discord.MessageEmbed()
                .setThumbnail(client.user.avatarURL())
                .addField(`Tanıtılan Sunucunun Sahibi`, message.author.tag, true)
                .addField(`Tanıtılan Sunucun İsmi`, message.guild.name, true)
                .addField(
                    `Tanıtılan Sunucudaki Üye Sayısı`,
                    message.guild.members.size,
                    true
                )
                .addField(`Tanıtılan Sunucu Davet Linki`, invite.url, true)
                .setColor(ayarlar.embedrenk)
                .setThumbnail(message.guild.iconURL);
            client.channels.cache.get("779049940252884992").send(pinkcode);
            db.set(`gunluk_${message.guild.id}`, Date.now());
        });
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["sunucu-tanıt"],
    permLevel: 0
};

exports.help = {
    name: "sunucutanıt",
    description: "Sunucunuzu Tanıtır.",
    usage: "sunucutanıt"
};