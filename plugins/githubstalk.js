let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {
let user = global.DATABASE._data.users[m.sender]
if (user.prems) {
 if (!text) return conn.reply(m.chat, 'Masukkan Username Github', m)
  await m.reply('*[ WAIT ]* _Searching..._')

    axios.get(`https://videfikri.com/api/github/?username=${text}`)
    .then((res) => {
      imageToBase64(res.data.result.profile_pic)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')
            let str = `
*ID:* ${res.data.result.id}
*Username:* ${res.data.result.username}
*Followers:* ${res.data.result.followers}
*Following:* ${res.data.result.following}
*Repository:* ${res.data.result.public_repository}
*Profile Url:* ${res.data.result.profile_url}

*[ • SGDC-BOT • ]*
`.trim()
     conn.sendFile(m.chat, buf, 'SGDC-BOT.png', str, m)
        })
    })
   } else if (!user.prems) m.reply('*FITUR INI KHUSUS UNTUK USER PREMIUM!*')
}

handler.command = /^(github(stalk)?)$/i
handler.owner = false

handler.botAdmin = false

handler.fail = null

module.exports = handler


// MUHAMMAD AFDHAN