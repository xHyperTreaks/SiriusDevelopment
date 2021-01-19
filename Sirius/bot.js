const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const fs = require('fs');
const db = require('wio.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const snekfetch = require('snekfetch');



const app = express();
app.get("/", (request, response) => {
    console.log(Date.now() + "Hostlandı!");
    response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};


fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});



//kayit komutları
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./kayit/${command}`)];
            let cmd = require(`./kayit/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./kayit/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./kayit/${command}`)];
            let cmd = require(`./kayit/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

fs.readdir('./kayit/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} kayıt komutu yüklenecek.`);
    files.forEach(f => {
        let props = require(`./kayit/${f}`);
        log(`Yüklenen kayit Komutu: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});


// seviye

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./seviye/${command}`)];
            let cmd = require(`./seviye/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./seviye/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./seviye/${command}`)];
            let cmd = require(`./seviye/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

fs.readdir('./seviye/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} kayıt komutu yüklenecek.`);
    files.forEach(f => {
        let props = require(`./seviye/${f}`);
        log(`Yüklenen seviye Komutu: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});



client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};




var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});
//KOMUTLAR BURAYA

client.on('message', async(msg, member, guild) => {
    let i = await db.fetch(`saas_${msg.guild.id}`)
    if (i === 'açık') {
        if (msg.content.toLowerCase() === 'sa') {
            msg.reply('Aleyküm Selam, Hoşgeldin');

        }
    }
});

client.on('message', async(msg, member, guild) => {
    let i = await db.fetch(`saas_${msg.guild.id}`)
    if (i === 'açık') {
        if (msg.content.toLowerCase() === 'selam') {
            msg.reply('Aleyküm Selam, Hoşgeldin');
        }
    }
});

// DM GÖRME

//779052018689507368
client.on("message", msg => {
    if (msg.channel.type === "dm") {
        if (msg.author.id === client.user.id) return;
        const botdm = new Discord.MessageEmbed()
            .setTitle(`Sirius DM Yazışmaları`)
            .setTimestamp()
            .setColor(ayarlar.embedrenk)
            .setThumbnail(msg.author.avatarURL())
            .addField("Gönderen", msg.author.tag)
            .addField("Gönderen ID", msg.author.id)
            .addField("Gönderilen Mesaj", msg.content)
            .setFooter(ayarlar.embedfooter);

        client.channels.cache.get("779052018689507368").send(botdm);
    }
    if (msg.channel.bot) return;
});

//Sayaç

client.on("guildMemberAdd", async member => {
    if (!member.guild) return;
    if (db.fetch(`sayacsayi_${member.guild.id}`)) {
        if (db.fetch(`sayackanal_${member.guild.id}`)) {

            let sayackanal = member.guild.channels.cache.get(db.fetch(`sayackanal_${member.guild.id}`))
            let sayi = db.fetch(`sayacsayi_${member.guild.id}`)

            if (db.fetch(`sayacM_${member.guild.id}`)) mesaj = db.fetch(`sayacM_${member.guild.id}`).replace(`-uye-`, member).replace(`-toplamuye-`, member.guild.memberCount).replace(`-sayi-`, sayi)
            else mesaj = `:inbox_tray: ${member}, Sunucumuza Hoşgeldin! **${sayi}** Kişi Olmamıza **${sayi - member.guild.memberCount}** kişi Kaldı`
            let sayacmesaj = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setDescription(mesaj)

            sayackanal.send(sayacmesaj)
        }
    }
})

// Otorol

client.on("guildMemberAdd", async member => {
    if (!member.guild) return;
    let mutelimi = db.fetch(`muteli_${member.guild.id + member.id}`)
    if (!db.fetch(`otoR_${member.guild.id}`)) return
    if (mutelimi) { return } else {
        if (db.fetch(`otoR_${member.guild.id}`)) {
            if (db.fetch(`otoRK_${member.guild.id}`)) {

                let otorolkanal = member.guild.channels.cache.get(db.fetch(`otoRK_${member.guild.id}`))
                let otorol = member.guild.roles.cache.get(db.fetch(`otoR_${member.guild.id}`))
                member.roles.add(db.fetch(`otoR_${member.guild.id}`))
                let mesaj;
                if (db.fetch(`otorolM_${member.guild.id}`)) mesaj = db.fetch(`otorolM_${member.guild.id}`).replace(`-uye-`, member).replace("-toplamuye-", member.guild.memberCount)
                else mesaj = `:white_check_mark: ${member}, Hoşgeldin ${otorol} adlı rolün verildi!`
                let otorolmesaj = new Discord.MessageEmbed()
                    .setColor(ayarlar.embedrenk)
                    .setDescription(mesaj)

                otorolkanal.send(otorolmesaj)

            } else {

                member.roles.add(db.fetch(`otoR_${member.guild.id}`))

            }


        }
    }
})

client.on("message", async message => {
    if (!message.guild) return;
    if (message.content === ".fake") {
        const yetki = new Discord.MessageEmbed()
            .setAuthor(client.member.membername, client.avatarURL)
            .setColor("RANDOM")
            .setDescription(`Sanırım sen Eyüp değilsin!`)
        if (message.author.id !== "699192947312164884") message.channel.send(yetki);
        message.react(`✅`)
        client.emit(
            "guildMemberAdd",
            message.member || (await message.guild.fetchMember(message.author))
        );
    }
});
client.on("message", async message => {
    if (!message.guild) return;
    if (message.content === ".feyk") {
        const yetki = new Discord.MessageEmbed()
            .setAuthor(client.member.membername, client.avatarURL)
            .setColor("RANDOM")
            .setDescription(`Sanırım sen Eyüp değilsin!`)
        if (message.author.id !== "699192947312164884") return message.channel.send(yetki);
        message.react(`✅`)
        client.emit(
            "guildMemberRemove",
            message.member || (await message.guild.fetchMember(message.author))
        );
    }
});

// Gold Üye

const talked = new Set();
client.on("message", async msg => {

    if (db.has(`gold.${msg.author.id}`)) {
        if (!talked.has(msg.author.id)) {
            const embed = new Discord.MessageEmbed()
                .setAuthor(msg.author.membername)
                .setDescription("<a:kristal:781822931646676992> <@" + msg.author.id + "> Bir Gold Üye Belirdi!")
                .setColor(ayarlar.embedrenk)
            msg.channel.send(embed)
        }
    }

    talked.add(msg.author.id);
    setTimeout(() => {
        talked.delete(msg.author.id);
    }, 60000 * 240);
})

// Oa Kurucum Geldi
const konustu = new Set();
client.on("message", async msg => {
    let prefix;
    if (!msg.guild) return
    if (db.has(`prefix_${msg.guild.id}`) === true) {
        prefix = db.fetch(`prefix_${msg.guild.id}`)
    }

    if (db.has(`prefix_${msg.guild.id}`) === false) {
        prefix = ayarlar.prefix
    }
    if (msg.author.id !== ayarlar.sahip) return;
    if (msg.content.startsWith(prefix)) return
    if (konustu.has(msg.author.id)) {} else {

        const embed = new Discord.MessageEmbed()
            .setAuthor(client.user.username)
            .setColor(ayarlar.embedrenk)
            .setDescription(`<a:kristal:781822931646676992> Açılın bakim Kurucum Geldi <a:kristal:781822931646676992>`)
        msg.channel.send(embed).then(x => x.delete({ timeout: 15000 }))

        konustu.add(msg.author.id);
        setTimeout(() => {
            //msg.delete();
            // Removes the member from the set after a minute
            konustu.delete(msg.author.id);
        }, 60000 * 240); // Şuan 10 dakikadır Değiştirebilirsiniz.
    }
})

client.on("guildMemberAdd", async member => {

    if (db.fetch(`kayitkanal_${member.guild.id}`)) {

        let kayıtkanal = member.guild.channels.cache.get(db.fetch(`kayitkanal_${member.guild.id}`))
        let yetkili = db.fetch(`kayityetkili.${member.guild.id}`)

        const embed = new Discord.MessageEmbed()
            .setColor(ayarlar.embedrenk)
            .setAuthor("Sirius")
            .setDescription("<@" + member + "> Sunucumuza Hoşgeldin!\nKayıt İşleminin Tamamlanması için Lütfen <@&" + yetkili + "> Rolündeki Yetkililerimizi Bekleyiniz")
            .addField("Yetkililer Gelene Kadar Kendimi Tanıtim!", "2020 Yılında Oluşmuş Bir Botum!\nModerasyon/Kayıt/Premium Tüm Özellikler var\nYapımcımı Görmek için: .istatistik")
            .setFooter(ayarlar.embedfooter)
        kayıtkanal.send(embed)

    }


})

client.on("guildMemberAdd", async member => {

    if (db.fetch(`gcK_${member.guild.id}`)) {



        let gcKanal = member.guild.channels.cache.get(db.fetch(`gcK_${member.guild.id}`))

        const embed = new Discord.MessageEmbed()
            .setTitle(":inbox_tray: Sunucuya Giriş")
            .setDescription("Hey millet, <@" + member + "> Aramıza katıldı!\nOnunla Beraber " + member.guild.memberCount + " Kişiyiz!")
            .setColor(ayarlar.embedrenk)
        gcKanal.send(embed)
    }

})

client.on("guildMemberRemove", async member => {

    if (db.fetch(`gcK_${member.guild.id}`)) {



        let gcKanal = member.guild.channels.cache.get(db.fetch(`gcK_${member.guild.id}`))

        const embed = new Discord.MessageEmbed()
            .setTitle(":no_entry_sign: Sunucudan Çıkış")
            .setDescription("Hey millet, <@" + member + "> Aramızdan ayrıldı!\nO Gittikten beri " + member.guild.memberCount + " Kişi kaldık!")
            .setColor(ayarlar.embedrenk)
        gcKanal.send(embed)
    }

})

client.on("message", async message => {

    let sayi = parseInt(db.fetch(`xpverilcek_${message.guild.id}`)) || 2

    let seviye = db.fetch(`seviye.${message.guild.id}.${message.author.id}`) + 1
    let kanal = message.guild.channels.cache.get(db.fetch(`seviyeKanal_${message.guild.id}`))

    let mesaj;
    if (db.fetch(`seviyeM_${message.guild.id}`)) mesaj = db.fetch(`seviyeM_${message.guild.id}`).replace(`-uye-`, `<@${message.author.id}>`).replace("-seviye-", seviye)
    else mesaj = `:white_check_mark: UuUuU <@${message.author.id}> Seviye atladı Yeni Seviyesi: ${seviye}`

    if (message.author.id !== client.user.id) {

        if (db.has(`seviyesistem_${message.guild.id}`)) {


            db.add(`xp.${message.guild.id}.${message.author.id}`, sayi)

            if (db.fetch(`xp.${message.guild.id}.${message.author.id}`) >= 300) {
                if (kanal) {
                    db.set(`xp.${message.guild.id}.${message.author.id}`, 0)
                    db.add(`seviye.${message.guild.id}.${message.author.id}`, 1)
                    kanal.send(mesaj)
                } else {
                    db.set(`xp.${message.guild.id}.${message.author.id}`, 0)
                    db.add(`seviye.${message.guild.id}.${message.author.id}`, 1)
                    message.channel.send(mesaj)
                }
            }
        }
    }

})

client.on("message", async msg => {

    let kufuracik = db.has(`kufurengel.${msg.guild.id}`)

    if (kufuracik) {
        if (!msg.member.hasPermission("ADMINISTRATOR")) {
            const küfür = ["ananı", "oç", "piç", "oc", "anani", "ibne", "it", "orospu", "orusbu", "anani", "pic", "pıc", "pıç", "anneni", "annenı", "sik", "sikim", "sık", "sikiş", "sikerim", "am", "amcık", "amk", "amq", "awq", "kahbe", "oruspu", "siktim", "sq", "sg", "amcık", "aq", "sex", "yarrak", "göt", "sik"]
            let kelimeler = msg.content.toLowerCase().split(' ');
            kelimeler.forEach(kelime => {
                if (küfür.some(küfür => küfür === kelime)) {
                    msg.delete()
                    msg.channel.send("<@" + msg.author.id + "> Bu Sunucu Sirius Bot Tarafından Küfürlerden Korunmakta!")
                    db.add(`küfürengellendi.${msg.guild.id}`, 1)
                }
            })
        }
    }
})

client.on("message", async msg => {

    let reklamacik = db.has(`reklamengel.${msg.guild.id}`)

    if (reklamacik) {
        if (!msg.member.hasPermission("ADMINISTRATOR")) {
            const reklam = [".gq", ".tk", ".com", ".net", ".network", ".ml", ".gg", "http://", "https://", ".vip", ".xyz", ".site", ".design", ".cf", ".wtf", ".at", ".tr", ".de", ".online", ".one", ".shop", ".club", ".ws", ".shop", ".camera", ".cheap", ".org", ".lighting", ".plumbing", ".biz", ".auto", "info", ".guru"]
            if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
                msg.delete()
                msg.channel.send("<@" + msg.author.id + "> Bu Sunucu Sirius Bot Tarafından Reklamlardan Korunmakta!")
                db.add(`reklamengellendi.${msg.guild.id}`, 1)
            }
        }
    }
})


//KOMUTLAR BİTİŞ
client.login(ayarlar.token);