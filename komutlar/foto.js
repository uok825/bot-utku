const Discord = require('discord.js');
let bot_version = process.env.VERSION;
let bot_sahip = process.env.SAHIP;
const moment = require("moment");
const cheerio = require("cheerio");
const os = require("os");
const request = require("request");
const {get} = require("snekfetch");
require("moment-duration-format");

exports.run = async (client, message, args) => {
  const msg = new Discord.MessageEmbed()
    get('https://aws.random.cat/meow').then(response => {
      message.channel.send({files: [{attachment: response.body.file, name: `cat.${response.body.file.split('.')[2]}`}]});
      console.log('random cat picture');
      })
      } catch (e) {
            console.log('error!');
            }
          };
  return message.channel.send(msg);
};

exports.help = {
  name: "foto",
  guildOnly: false, // false olur ise DM'den de kullanılabilir bi hal alır | true olur ise sadece sunucuda kullanılabilir bir halde olur
  aliases: ["i"]
};




