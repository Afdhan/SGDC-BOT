let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {
  await m.reply('*[ WAIT ]* _Searching..._')

    axios.get('https://api.zeks.xyz/api/darkjokes?apikey=apivinz')
    .then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')
            let str = `Dark Ajg`

     conn.sendFile(m.chat, buf, 'Nyenye_SGDC-BOT.jpg', str, m)
        })
    })
}

handler.command = /^(darkjoke(s)?)$/i
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
