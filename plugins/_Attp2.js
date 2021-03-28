const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType } = require('@adiwajshing/baileys')

let handler  = async (m, { conn, text }) => {
  await m.reply('Sedang membuat...')
  if (text) conn.sendFile(m.chat, 'http://lolhuman.herokuapp.com/api/attp?apikey=761e676c13e7710a48011b2b&text=' + encodeURIComponent(text), 'attp.webp', '', m, false, { asSticker: true })
  else throw 'Teksnya mbah?'
}

handler.command = /^(attp2)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler