const Discord = require('discord.js');
let bot_version = process.env.VERSION;
let bot_sahip = process.env.SAHIP;
const moment = require("moment");
const os = require("os");
require("moment-duration-format");

exports.run = async (client, message, args) => {
    .addField("**Ram kullanımı**",true)
};

exports.help = {
    name: "komut1",
    guildOnly: false, // false olur ise DM'den de kullanılabilir bi hal alır | true olur ise sadece sunucuda kullanılabilir bir halde olur
    aliases: ["i"]
  };
  