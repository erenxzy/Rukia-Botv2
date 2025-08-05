let handler = async (m, { conn, args }) => {
    let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    let user = global.db.data.users[userId]
    let name = conn.getName(userId)
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length

    let txt = `

╭━━━〔 🌨️ 𝗥𝗨𝗞𝗜𝗔-𝗕𝗢𝗧 𝗩2 - 𝗠𝗘𝗡𝗨 〕━━━╮
┃✎ ¡Hola @${userId.split('@')[0]}!
┃➥ Soy *${botname}*, tu bot virtual.
┃➤ Tiempo activo: *${uptime}*
┃✦ Comandos disponibles: *${totalCommands}*
╰━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🔰 𝗜𝗡𝗙𝗢-𝗕𝗢𝗧 〕━━━╮
> ✦ Muestra el menú principal.  
✎ menu

> ✦ Tiempo activo del bot.  
✎ uptime

> ✦ Verifica el estado actual del bot.  
✎ status

> ✦ Mide la velocidad de respuesta.  
✎ ping

> ✦ Muestra la rapidez de procesamiento.  
✎ speed

> ✦ Obtén el link del script oficial.  
✎ sc

> ✦ Lista del staff oficial.  
✎ staff

> ✦ Información del creador.  
✎ creador

> ✦ Enlaces importantes.  
✎ links

> ✦ Información detallada del bot.  
✎ infobot
╰━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 📜 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗢 〕━━━╮
> ✦ Registrarte en el bot.  
✎ reg

> ✦ Eliminar tu registro.  
✎ unreg

> ✦ Ver tu perfil actual.  
✎ profile

> ✦ Mostrar tu número de serie.  
✎ myns
╰━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 📥 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦 〕━━━╮
> ✦ Descargar música de YouTube.  
✎ play

> ✦ Segunda opción para descargar música.  
✎ play2

> ✦ Descargar audio en MP3 desde YouTube.  
✎ ytmp3

> ✦ Descargar video desde YouTube.  
✎ ytmp4

> ✦ Descargar videos de TikTok.  
✎ tiktok

> ✦ Descargar contenido de Instagram.  
✎ instagram

> ✦ Descargar videos de Facebook.  
✎ facebook

> ✦ Descargar videos de Twitter.  
✎ twitter

> ✦ Descargar canciones de Spotify.  
✎ spotify

> ✦ Descargar archivos de Mediafire.  
✎ mediafire

> ✦ Descargar archivos de Mega.  
✎ mega

> ✦ Descargar archivos de Terabox.  
✎ terabox

> ✦ Descargar aplicaciones APK.  
✎ apk

> ✦ Descargar videos de Pinterest.  
✎ pinvid

> ✦ Clonar un repositorio de GitHub.  
✎ gitclone
╰━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🔍 𝗕𝗨𝗦𝗖𝗔𝗗𝗢𝗥𝗘𝗦 〕━━━╮
> ✦ Buscar información en Google.  
✎ google

> ✦ Buscar imágenes.  
✎ imagen

> ✦ Buscar en Pinterest.  
✎ pinterest

> ✦ Buscar videos en YouTube.  
✎ yts

> ✦ Buscar paquetes en NpmJS.  
✎ npmjs

> ✦ Buscar usuarios/repos en GitHub.  
✎ github

> ✦ Información de animes.  
✎ infoanime
╰━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 ♻️ 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗜𝗗𝗢𝗥𝗘𝗦 〕━━━╮
> ✦ Convertir audio a MP3.  
✎ tomp3

> ✦ Convertir a video.  
✎ tovideo

> ✦ Convertir a enlace.  
✎ tourl

> ✦ Texto a voz.  
✎ tts

> ✦ Convertir a GIF animado.  
✎ togif
╰━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🤖 𝗜𝗔/𝗔𝗥𝗧𝗜𝗙𝗜𝗖𝗜𝗔𝗟 〕━━━╮
> ✦ Hablar con la IA del bot.  
✎ ia

> ✦ Consultar a Gemini IA.  
✎ gemini

> ✦ Crear imágenes con DALL·E.  
✎ dalle

> ✦ Usar Flux IA.  
✎ flux

> ✦ Hablar con Simi.  
✎ simi

> ✦ Hablar con Rukia.  
✎ Rukia

> ✦ Hablar con Iaxzy.  
✎ Iaxzy
╰━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🎌 𝗔𝗡𝗜𝗠𝗘/𝗥𝗘𝗔𝗖𝗜𝗢𝗡 〕━━━╮
> ✦ Generar una waifu aleatoria.  
✎ waifu

> ✦ Abrazar a otro usuario.  
✎ hug

> ✦ Dar un beso.  
✎ kiss

> ✦ Acariciar la cabeza.  
✎ pat

> ✦ Dar una bofetada.  
✎ slap

> ✦ Mostrar enojo.  
✎ angry

> ✦ Mostrar felicidad.  
✎ happy

> ✦ Mostrar tristeza.  
✎ sad

> ✦ Llorar.  
✎ cry

> ✦ Bailar.  
✎ dance

> ✦ Dormir.  
✎ sleep
╰━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🎴 𝗚𝗔𝗖𝗛𝗔𝗦/𝗣𝗘𝗥𝗦𝗢𝗡𝗔𝗝𝗘 〕━━━╮
> ✦ Obtener una waifu random.  
✎ rw

> ✦ Reclamar una waifu.  
✎ claim

> ✦ Ver tu lista de waifus.  
✎ waifus

> ✦ Imagen de tu waifu.  
✎ wimage

> ✦ Info de tu waifu.  
✎ winfo

> ✦ Regalar una waifu.  
✎ regalar

> ✦ Votar por tu waifu favorita.  
✎ votar

> ✦ Top de waifus.  
✎ waifustop
╰━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🖼️ 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦 〕━━━╮
> ✦ Crear sticker.  
✎ sticker

> ✦ Mezclar emojis.  
✎ emojimix

> ✦ Cambiar marca de agua.  
✎ wm

> ✦ Tomar un sticker.  
✎ take

> ✦ Establecer metadatos.  
✎ setmeta

> ✦ Borrar metadatos.  
✎ delmeta

> ✦ Crear sticker con QC.  
✎ qc

> ✦ Convertir sticker a imagen.  
✎ img

> ✦ Crear sticker con texto.  
✎ attp
╰━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 💰 𝗘𝗖𝗢𝗡𝗢𝗠𝗜𝗔/𝗥𝗨𝗞𝗜𝗔 〕━━━╮
> ✦ Ganar coins trabajando.  
✎ work

> ✦ Probar tu suerte.  
✎ suerte

> ✦ Cometer un crimen por coins.  
✎ crime

> ✦ Apostar en la ruleta.  
✎ ruleta

> ✦ Jugar en el casino.  
✎ casino

> ✦ Máquina tragamonedas.  
✎ slot

> ✦ Ver tu saldo.  
✎ cartera

> ✦ Ver tu banco.  
✎ bank

> ✦ Depositar coins.  
✎ depositar

> ✦ Retirar coins.  
✎ retirar

> ✦ Transferir coins a otro usuario.  
✎ transfer

> ✦ Minar para obtener coins.  
✎ minar

> ✦ Comprar ítems.  
✎ buy

> ✦ Reclamar tu recompensa diaria.  
✎ daily

> ✦ Abrir tu cofre diario.  
✎ cofre

> ✦ Recompensa semanal.  
✎ semanal

> ✦ Recompensa mensual.  
✎ mensual

> ✦ Robar coins a alguien.  
✎ robar

> ✦ Robar experiencia.  
✎ robarxp

> ✦ Ver el ranking de riqueza.  
✎ baltop

> ✦ Jugar una aventura.  
✎ aventura

> ✦ Curar tu personaje.  
✎ curar

> ✦ Cazar recompensas.  
✎ cazar

> ✦ Ver tu inventario.  
✎ inventario

> ✦ Entrar a una mazmorra.  
✎ mazmorra

> ✦ Evento especial de Halloween.  
✎ halloween

> ✦ Evento especial de Navidad.  
✎ navidad
╰━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🧰 𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦 〕━━━╮
> ✦ Calculadora rápida.  
✎ calcular

> ✦ Ver el clima actual.  
✎ clima

> ✦ Consultar horarios.  
✎ horario

> ✦ Crear mensaje falso.  
✎ fake

> ✦ Mejorar calidad de imagen.  
✎ hd

> ✦ Buscar letra de una canción.  
✎ letra

> ✦ Ver un link acortado.  
✎ ver

> ✦ Reconocer canciones.  
✎ shazam

> ✦ Captura de pantalla web.  
✎ ss

> ✦ Cambiar tamaño de imágenes.  
✎ tamaño

> ✦ El bot dice tu texto.  
✎ say

> ✦ Convertir todo a documento.  
✎ todoc

> ✦ Traducir textos.  
✎ traducir
╰━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 👤 𝗣𝗘𝗥𝗙𝗜𝗟/𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 〕━━━╮
> ✦ Casarte con alguien.  
✎ marry

> ✦ Divorciarte.  
✎ divorce

> ✦ Establecer género.  
✎ setgenero

> ✦ Eliminar género.  
✎ delgenero

> ✦ Establecer tu cumpleaños.  
✎ setbirth

> ✦ Eliminar cumpleaños.  
✎ delbirth

> ✦ Establecer descripción.  
✎ setdesc

> ✦ Eliminar descripción.  
✎ deldesc

> ✦ Ver la tabla de clasificación.  
✎ lb

> ✦ Ver tu nivel.  
✎ level

> ✦ Estado Premium.  
✎ premium

> ✦ Confesar de forma anónima.  
✎ confesar
╰━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 👥 𝗚𝗥𝗨𝗣𝗢𝗦/𝗖𝗢𝗡𝗙𝗜𝗚 〕━━━╮
> ✦ Mencionar a todos.  
✎ tag

> ✦ Información del grupo.  
✎ gp

> ✦ Crear una línea de texto.  
✎ linea

> ✦ Establecer bienvenida.  
✎ setwelcome

> ✦ Establecer mensaje de despedida.  
✎ setbye

> ✦ Ver link del grupo.  
✎ link

> ✦ Listado de administradores.  
✎ admin

> ✦ Revocar link del grupo.  
✎ revoke

> ✦ Abrir el grupo.  
✎ group open

> ✦ Cerrar el grupo.  
✎ group close

> ✦ Expulsar un usuario.  
✎ kick

> ✦ Añadir un usuario.  
✎ add

> ✦ Promover a admin.  
✎ promote

> ✦ Degradar admin.  
✎ demote

> ✦ Cambiar banner del grupo.  
✎ gpbanner

> ✦ Cambiar nombre del grupo.  
✎ gpname

> ✦ Cambiar descripción del grupo.  
✎ gpdesc

> ✦ Advertir un usuario.  
✎ warn

> ✦ Quitar advertencia.  
✎ unwarn

> ✦ Ver lista de advertencias.  
✎ advlist

> ✦ Encender el bot.  
✎ bot on

> ✦ Apagar el bot.  
✎ bot off

> ✦ Silenciar grupo.  
✎ mute

> ✦ Quitar silencio del grupo.  
✎ unmute

> ✦ Crear una encuesta.  
✎ poll

> ✦ Eliminar un mensaje.  
✎ delete

> ✦ Ver fantasmas del grupo.  
✎ fantasmas

> ✦ Expulsar fantasmas.  
✎ kickfantasmas

> ✦ Invocar usuarios.  
✎ invocar

> ✦ Cambiar emoji del grupo.  
✎ setemoji

> ✦ Expulsar por número de advertencias.  
✎ kicknum
╰━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🔞 𝗡𝗦𝗙𝗪 〕━━━╮
> ✦ Boobjob  
✎ boobjob

> ✦ Eyaculación  
✎ cum

> ✦ Masturbarse  
✎ fap

> ✦ Follar  
✎ follar

> ✦ Footjob  
✎ footjob

> ✦ Sexo explícito  
✎ fuck

> ✦ Agarrar pechos  
✎ grabboobs

> ✦ Manosear  
✎ grop

> ✦ Packs  
✎ pack

> ✦ Penetrar  
✎ penetrar

> ✦ Pussy  
✎ pussy

> ✦ Rule34  
✎ rule34

> ✦ Sexo  
✎ sexo

> ✦ Spank  
✎ spank

> ✦ Chupar pechos  
✎ suckboobs

> ✦ Tetas  
✎ tetas

> ✦ Desnudar  
✎ undress

> ✦ Violar   
✎ violar
╰━━━━━━━━━━━━━━━━━━━━╯

> by RukiaXzyV2 Actualizada 🥷🏻✨



`.trim()

await conn.sendMessage(m.chat, {
    video: { url: 'https://cdn.russellxz.click/a98b9080.mp4' },
    gifPlayback: true,
    caption: txt,
    contextInfo: {
      mentionedJid: [m.sender, userId],
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: channelRD.id,
        newsletterName: channelRD.name,
      },
    }
  },
  {
    quoted: m
  });

}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help']

export default handler

function clockString(ms) {
    let seconds = Math.floor((ms / 1000) % 60)
    let minutes = Math.floor((ms / (1000 * 60)) % 60)
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
    return `${hours}h ${minutes}m ${seconds}s`
}