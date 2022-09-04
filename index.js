const axios = require('axios').default;
const TelegramBot = require('node-telegram-bot-api');

// Link to bot: http://t.me/crypto_market_index_bot
const token = '5700748033:AAGQyrFDmtvaC9RDtL8Df5DDDuKK-fs34qs';
const bot = new TelegramBot(token, { polling: true });

// Example of axios request: const response = await axios.get('url'); url can be taken from source in readme
