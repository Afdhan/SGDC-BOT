let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = m => {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)
  if (chat.antiLink && isGroupLink) {
    m.reply('*_Kick !?_*')
  if (global.opts['restrict']) {
       if (!user.isAdmin) return true
       this.groupRemove(m.chat, [m.sender])
    }
  }
  return true
}

module.exports = handler
