const Discord = require("discord.js");
const db = require("wio.db");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  const yetki = new Discord.MessageEmbed()
    .setAuthor(client.user, client.avatarURL)
    .setColor(ayarlar.embedrenk)
    .setDescription(
      `Bu komutu kullanabilmek için Yönetici yetkisine sahip olmalısın!`
    )
    .setFooter(ayarlar.embedfooter);
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(yetki);

  let role =
    message.mentions.roles.first() ||
    message.guild.roles.cache.find(r => r.name === args.slice(0).join(" "));
  let prefix =
    (await db.fetch(`prefix_${message.guild.id}`)) || ayarlar.prefix;

  if (args[0] === "kapat" || args[0] === "sıfırla") {
    if (db.fetch(`kayiterkek_${message.guild.id}`)) {
      message.channel.send(`Erkek Rolü Başarıyla Kaldırıldı`);
      db.delete(`kayiterkek_${message.guild.id}`);
      db.delete(`kayitkanal_${message.guild.id}`);
      return;
    }
    message.channel.send(`Erkek rolü ayarlanmamış.`);
    return;
  }

  if (!role) {
    return message.reply(
      `Lütfen bir erkek rolü etiketleyin örnek: **${prefix}erkek-rol-ayarla @rol**`
    );
  }

  db.set(`kayiterkek_${message.guild.id}`, role.id);

  const embed = new Discord.MessageEmbed()
    .setDescription(`Erkek Rolü başarıyla ayarlandı Sıfırlamak iiçin \`${prefix}erkek-rol-ayarla sıfırla\``)
    .setColor(ayarlar.embedrenk)
    .setFooter(ayarlar.embedfooter)
  message.channel.send({ embed });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayit-erkek-rol-ayarla", "erkek-rol"],
  permLevel: 0,
  kategori: "sunucu"
};

exports.help = {
  name: "erkek-rol-ayarla",
  description: "",
  usage: "erkek-rol <@rol>"
};
