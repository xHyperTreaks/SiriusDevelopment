const Discord = require("discord.js");
const db = require("wio.db");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Bu komudu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
  let role =
    message.mentions.roles.first() ||
    message.guild.roles.cache.find(r => r.name === args.slice(0).join(" "));
  let prefix =
    (await db.fetch(`prefix_${message.guild.id}`)) || ayarlar.prefix;

  if (args[0] === "kapat" || args[0] === "sıfırla") {
    if (db.fetch(`otoR_${message.guild.id}`)) {
      message.channel.send(`Otorol başarıyla kaldırıldı`);
      db.delete(`otoR_${message.guild.id}`);
      return;
    }
    message.channel.send(`Otorol ayarlanmamış.`);
    return;
  }

  if (!role) {
    return message.reply(
      `Lütfen bir rol etiketleyin örnek: **${prefix}oto-rol-ayarla @rol**`
    );
  }

  db.set(`otoR_${message.guild.id}`, role.id);

  const embed = new Discord.MessageEmbed()
    .setDescription(
      `Otorol başarıyla ayarlandı: **${role.name}**\nOtorRol kapatmak isterseniz **${prefix}otorol kapat** yazmanız yeterlidir.\nŞimdi ise ${prefix}oto-rol-kanal #kanal`
    )
    .setColor(ayarlar.embedren)
    .setFooter(ayarlar.embedfooter);
  message.channel.send({ embed });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oto-rol", "oto-rol-belirle", "otorol", "otorolayarla"],
  permLevel: 0,
  kategori: "sunucu"
};

exports.help = {
  name: "oto-rol-ayarla",
  description: "",
  usage: "oto-rol-ayarla <@rol>"
};
