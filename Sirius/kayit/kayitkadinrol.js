const Discord = require("discord.js");
const db = require("wio.db");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  const yetki = new Discord.MessageEmbed()
    .setAuthor(client.user, client.avatarURL)
    .setColor(ayarlar.embedrenk)
    .setFooter(ayarlar.embedfooter)
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
    if (db.fetch(`kayitkadin_${message.guild.id}`)) {
      message.channel.send(`Kadın Rolü Başarıyla Kaldırıldı`);
      db.delete(`kayitkadin_${message.guild.id}`);
      db.delete(`kayitkanal_${message.guild.id}`);
      return;
    }
    message.channel.send(`Kadın rolü ayarlanmamış.`);
    return;
  }

  if (!role) {
    return message.reply(
      `Lütfen bir Kadın rolü etiketleyin örnek: **${prefix}kadin-rol-ayarla @rol**`
    );
  }

  db.set(`kayitkadin_${message.guild.id}`, role.id);

  const embed = new Discord.MessageEmbed()
    .setDescription(`Kadın Rolü başarıyla ayarlandı Sıfırlamak iiçin \`${prefix}kadin-rol-ayarla sıfırla\``)
    .setColor(ayarlar.embedrenk)
    .setFooter(ayarlar.embedfooter)
  message.channel.send({ embed });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayit-kadin-rol-ayarla", "kadın-rol"],
  permLevel: 0,
  kategori: "sunucu"
};

exports.help = {
  name: "kadin-rol-ayarla",
  description: "",
  usage: "kadin-rol <@rol>"
};
