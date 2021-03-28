let axios = require("axios");
let handler = async(m, { conn, text }) => {

  await m.reply('*[ WAIT ]* _Sedang Diproses..._')
let link = 'http://lolhuman.herokuapp.com/api/random/kanna?apikey=761e676c13e7710a48011b2b'

conn.sendFile(m.chat, link, 'SGDC-BOT.png', 'No Colay:v\n\n*[ • SGDC-BOT • ]*', m)
}

handler.command = /^(kanna|randomkanna)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler


//   MUHAMMAD AFDHAN