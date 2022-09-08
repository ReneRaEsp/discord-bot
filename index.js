const { Client, GatewayIntentBits } = require('discord.js')

//requerir token
const { token } = require('./config.json')

const superBot = new Client({ intents: GatewayIntentBits.Guilds })

superBot.once('ready', () => {
  console.log('Super bot en linea y listo para iniciar 😎')
})

superBot.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand) return
  const { commandName } = interaction
  if (commandName === 'ping') {
    await interaction.reply('pong pong')
  } else if (commandName === 'nombre') {
    await interaction.reply('René Ramírez')
  } else if (commandName === 'bleach') {
    await interaction.reply('Ichigo Kurosaki')
  }
})

//logueamos con nuestro token
superBot.login(token)
