export async function before(m, { conn }) {
  if (!m.isGroup || !m.messageStubType || !m.messageStubParameters) return;

  // Verifica si el welcome está activado
  if (!db.data.chats[m.chat].welcome) return;

  const groupMetadata = await conn.groupMetadata(m.chat);
  const participants = m.messageStubParameters || [];
  const date = new Date();
  const fecha = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  const memberCount = groupMetadata.participants.length; // Contador de miembros

  for (const user of participants) {
    let name = await conn.getName(user);
    let pp = await conn.profilePictureUrl(user, 'image').catch(() =>
      'https://files.catbox.moe/l1210e.jpg'
    );
    const taguser = '@' + user.split('@')[0];

    // BIENVENIDA
    if (m.messageStubType === 27 || m.messageStubType === 31) {
      await conn.sendMessage(m.chat, {
        image: { url: pp },
        caption: 
`╭━━━〔 🌸 𝑾𝑬𝑳𝑪𝑶𝑴𝑬 🌸 〕━━━╮
✦ Hola ${taguser}  
✦ Bienvenido a *${groupMetadata.subject}*  
✦ 📝 Nombre: *${name}*
✦ 🆔 ID: ${user}
✦ 📆 Fecha: ${fecha}
✦ 👥 Eres el miembro #${memberCount}
╰━━━━━━━━━━━━━━━━━━━━━╯

> Usa *.help* para ver la lista de comandos 📜`,
        mentions: [user],
        footer: "Rukia-Bot ✨",
        buttons: [
          { buttonId: ".reglas", buttonText: { displayText: "📜 Ver Reglas" }, type: 1 },
          { buttonId: ".menu", buttonText: { displayText: "📌 Ver Menú" }, type: 1 }
        ],
        headerType: 4,
        contextInfo: {
          externalAdReply: {
            title: "𝙉𝙀𝙒 𝙈𝙀𝙈𝘽𝙀𝙍 𝙍𝙐𝙆𝙄𝘼",
            body: `${name} se ha unido ✨`,
            thumbnailUrl: pp,
            mediaType: 1,
            renderLargerThumbnail: true,
            sourceUrl: pp
          }
        }
      });
    }

    // DESPEDIDA
    if (m.messageStubType === 28 || m.messageStubType === 32) {
      await conn.sendMessage(m.chat, {
        image: { url: pp },
        caption: 
`╭━━━〔 🕊️ 𝑫𝑬𝑺𝑷𝑬𝑫𝑰𝑫𝑨 🕊️ 〕━━━╮
✦ ${taguser} ha salido de *${groupMetadata.subject}*
✦ 📝 Nombre: *${name}*
✦ 🆔 ID: ${user}
✦ 📆 Fecha: ${fecha}
╰━━━━━━━━━━━━━━━━━━━━━╯

> ¡Buena suerte en tu camino!`,
        mentions: [user],
        footer: "Rukia-Bot ✨",
        buttons: [
          { buttonId: ".menu", buttonText: { displayText: "📌 Ver Menú" }, type: 1 }
        ],
        headerType: 4,
        contextInfo: {
          externalAdReply: {
            title: "𝘽𝙔𝙀 𝙈𝙀𝙈𝘽𝙀𝙍 𝙍𝙐𝙆𝙄𝘼",
            body: `${name} se fue 🕊️`,
            thumbnailUrl: pp,
            mediaType: 1,
            renderLargerThumbnail: true,
            sourceUrl: pp
          }
        }
      });
    }
  }
}