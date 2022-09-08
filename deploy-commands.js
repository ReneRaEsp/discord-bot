const { SlashCommandBuilder, Routes } = require('discord.js')
const { REST } = require('@discordjs/rest')

const { clientId, guildId, token } = require('./config.json')

const commands = [
  new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Responde con un pong'),
  new SlashCommandBuilder()
    .setName('nombre')
    .setDescription('Responde con un nombre'),
  new SlashCommandBuilder()
    .setName('bleach')
    .setDescription('Responde con el protagonista de bleach'),
].map((command) => command.toJSON())

const rest = new REST({
  version: '10',
}).setToken(token)

const deployCommands = async () => {
  try {
    await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
      body: commands,
    })
    console.log('Commands deployed sucessfully')
  } catch (e) {
    console.log('Error', e)
  }
}

deployCommands()
