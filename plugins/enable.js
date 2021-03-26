let handler = async (m, { conn, usedPrefix, command, text, args, isROwner }) => {
  let isEnable = /true|enable|(turn)?on/i.test(command)
  let chat = global.DATABASE._data.chats[m.chat]
  let type = (args[0] || '').toLowerCase()
  let isAll = false
  switch (type) {
    case 'welcome':
      chat.welcome = isEnable
      break
    case 'delete':
      chat.delete = isEnable
      break
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'antilink':
      chat.antiLink = isEnable
      break
    case 'badword':
      chat.badWord = isEnable
      break
    case 'alloption':
   //   chat.badWord = isEnable
      chat.antiLink = isEnable
      chat.welcome = isEnable
      chat.delete = isEnable
      break
    default:
      return m.reply(`
List option: welcome | delete | badword | antilink

Contoh:
${usedPrefix}on welcome
${usedPrefix}off welcome
`.trim())
  }
  m.reply(`
*${type}* berhasil di *${isEnable ? 'nyala' : 'mati'}kan* untuk ${isAll ? 'bot ini' : 'chat ini'}
`.trim())
}

handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff))$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler


// MUHAMMAD AFDHAN
