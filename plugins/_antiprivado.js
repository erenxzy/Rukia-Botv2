export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
  if (m.isBaileys && m.fromMe) return true;
  if (m.isGroup) return false;
  if (!m.message) return true;
  
  // Comandos permitidos
  const comandosPermitidos = ['PIEDRA', 'PAPEL', 'TIJERA', 'serbot', 'jadibot'];
  if (comandosPermitidos.some(cmd => m.text.includes(cmd))) return true;
  
  // Excepción para newsletters
  if (m.chat.endsWith('@newsletter')) return true;

  // Configuración
  const botConfig = global.db.data.settings[this.user.jid] || {};

  // Modo antiprivado
  if (botConfig.antiPrivate && !isOwner && !isROwner) {
    try {
      const usuario = `@${m.sender.split('@')[0]}`;
      
      const mensajeBloqueo = `
╭━━━〔 ⚠️ 𝗔𝗖𝗖𝗘𝗦𝗢 𝗥𝗘𝗦𝗧𝗥𝗜𝗡𝗚𝗜𝗗𝗢 〕━━━╮
┃
┃ ✦ Hola ${usuario}
┃ ✦ Los comandos están *desactivados* en chats privados.
┃ ✦ Por seguridad, has sido *bloqueado automáticamente*.
┃
┃ 📌 Para volver a usar el bot:
┃    ✦ Únete al grupo oficial
┃    ✦ Contacta al administrador
┃
┃ 🌐 Más información aquí:
┃    ✦ https://erenxsit.vercel.app
┃
╰━━━〔 ✦ ${global.nombreBot} ✦ 〕━━━╯
      `.trim();

      await conn.sendMessage(m.chat, { 
        text: mensajeBloqueo,
        mentions: [m.sender]
      });

      await this.updateBlockStatus(m.chat, 'block');
      
    } catch (e) {
      console.error('Error en antiprivado:', e);
    }
  }
  
  return false;
}