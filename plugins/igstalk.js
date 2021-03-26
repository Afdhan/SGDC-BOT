let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {

 if (!text) return conn.reply(m.chat, 'Masukkan Username Instagram', m)
  await m.reply('*[ WAIT ]* _Sedang Diproses.._')

    axios.get(`https://mhankbarbar.herokuapp.com/api/stalk?username=${text}`)
    .then((res) => {
      imageToBase64(res.data.Profile_pic)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')
            let str = `
*Nama:* ${res.data.Name}
*Username:* ${res.data.Username}
*Followers:* ${res.data.Jumlah_Followers}
*Following:* ${res.data.Jumlah_Following}
*Bio:* ${res.data.Biodata}

*[ • SGDC-BOT • ]*
`.trim()
     conn.sendFile(m.chat, buf, 'SGDC-BOT.png', str, m)
        })
    })
}

handler.command = /^(igstalk)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

//  MUHAMMAD AFDHAN