let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
let user = global.DATABASE._data.users[m.sender]
if (user.prems) {
  if (!text) return
  let cm = copy(m)
  let who
  if (text.includes('@0')) who = '0@s.whatsapp.net'
  else if (m.isGroup) who = cm.participant = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu mbahh!'
  cm.key.fromMe = false
  cm.message[m.mtype] = copy(m.msg)
  let sp = '@' + who.split`@`[0]
  let [fake, ...real] = text.split(sp)
  conn.fakeReply(m.chat, real.join(sp).trimStart(), who, fake.trimEnd(), m.isGroup ? m.chat : false, {
    contextInfo: {
      mentionedJid: conn.parseMention(real.join(sp).trim())
    }
  })
   } else if (!user.prems) m.reply('*FITUR INI KHUSUS UNTUK USER PREMIUM!*')
}
handler.command = /^(fitnah|fakereply|nuduh)$/

module.exports = handler

function copy(obj) {
  return JSON.parse(JSON.stringify(obj))
}
