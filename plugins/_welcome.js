export async function before(m, { conn }) {
  if (!m.isGroup || !m.messageStubType || !m.messageStubParameters) return;

  // ← Esta línea verifica si la bienvenida está activada
  if (!db.data.chats[m.chat].welcome) return;

  const groupMetadata = await conn.groupMetadata(m.chat);
  const participants = m.messageStubParameters || [];
  const date = new Date();
  const fecha = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  for (const user of participants) {
    let name = await conn.getName(user);
    let pp = await conn.profilePictureUrl(user, 'image').catch(() =>
      'https://files.catbox.moe/l1210e.jpg'
    );
    const taguser = '@' + user.split('@')[0];

    // BIENVENIDA
    if (m.messageStubType === 27 || m.messageStubType === 31) {
      await conn.sendMessage(m.chat, {
        text: `💫 ¡Bienvenido ${taguser} al grupo *${groupMetadata.subject}*!\n\n> 📝 Nombre: *${name}*\n> 🆔 ID: ${user}\n> 📆 Fecha: ${fecha}\n\n> Puedes Usar.help Para Ver La Lista De Comando 📜`,
        mentions: [user],
        contextInfo: {
          externalAdReply: {
            title: `𝙉𝙀𝙒 𝙈𝙀𝙈𝘽𝙀𝙍 𝙓𝙕𝙔`,
            body: `${name} 𝙎𝙚 𝘼 𝙐𝙣𝙞𝙙𝙤 ✨`,
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
        text: `🕊️ ${taguser} ha salido del grupo *${groupMetadata.subject}*.\n\n📝 Nombre: *${name}*\n🆔 ID: ${user}\n📆 Fecha: ${fecha}\n\n> ¡Buena suerte en tu camino!`,
        mentions: [user],
        contextInfo: {
          externalAdReply: {
            title: `𝘽𝙔𝙀 𝙈𝙀𝙈𝙀𝘽𝙀𝙍 𝙓𝙕𝙔`,
            body: `${name} 𝙎𝙚 𝙁𝙪𝙚 🕊️`,
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