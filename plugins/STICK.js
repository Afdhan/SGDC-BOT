let imageToBase64 = require('image-to-base64');
let axios = require("axios");
const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn, text }) => {

await m.reply('*[ WAIT ]* _Sedang Diproses..._')

        let url = 'https://api.xteam.xyz/sticker/stickpack?q=' + text + '&APIKEY=abba3220ce4a347f'
axios.get(url)
      .then((result) => {
        let b = JSON.parse(JSON.stringify(result.data));
        let cewek =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cewek)
        .then(
            (response) => {
	let buf = Buffer.from(response, 'base64');
    let spn = encodeURIComponent(buf)
    conn.sendFile(m.chat, spn, 'sponge.webp', '', m, false, { asSticker: true })
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
