let axios = require("axios");
let handler = async(m, { conn, text }) => {
let user = global.DATABASE._data.users[m.sender]
if (user.prems) {
let [s1, s2] = text.split `|`
    if (!s1) return conn.reply(m.chat, 'Silahkan masukan text1', m)
    if (!s2) return conn.reply(m.chat, 'Silahkan masukan text2', m)

   if (s1 > 10) return conn.reply(m.chat, '*Teks1 Terlalu Panjang!* _Maksimal 10 huruf!_', m)
   if (s2 > 10) return conn.reply(m.chat, '*Teks2 Terlalu Panjang!* _Maksimal 10 huruf!_', m)

  await m.reply('*[ WAIT ]* _Sedang Diproses..._')
let link = 'https://videfikri.com/api/textmaker/8bit/?text1=' + s1 + '&text2=' + s2 

conn.sendFile(m.chat, link, 'SGDC-BOT.png', '*[ • SGDC-BOT • ]*', m)
  } else if (!user.prems) m.reply('*FITUR INI KHUSUS UNTUK USER PREMIUM!*')
}

handler.command = /^(8bit)$/i


handler.admin = false
handler.botAdmin = false

handler.fail = null
// MUHAMMAD AFDHAN

module.exports = handler