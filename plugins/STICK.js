let imageToBase64 = require('image-to-base64');
const { sticker } = require('../lib/sticker')
let axios = require("axios");
const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn, text }) => {
 /* let stiker = false
  try {*/
await m.reply('*[ WAIT ]* _Sedang Diproses..._')

        axios.get(`https://api.xteam.xyz/sticker/stickerly?q=${text}&APIKEY=abba3220ce4a347f`).then((res) => {
        let b = JSON.parse(JSON.stringify(res.data.result.stickerlist));
        let cc =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cc)
        .then(
            (response) => {
	let buf = Buffer.from(response, 'base64')
	
   // stiker = await sticker(buf, false, global.packname, global.author)
// let spn = encodeURIComponent(buf)
  //} finally {
   /* if (stiker)*/ conn.sendMessage(m.chat, buf, MessageType.sticker, { quoted: m })
   //else throw '*Kesalahan Pada Saat Mengonversi!*'
     }
        )
        .catch(
            (error) => {
                console.log(error); 
            }
        )
    
    });
    }
handler.command = /^(ssearch)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler

// MUHAMMAD AFDHAN
