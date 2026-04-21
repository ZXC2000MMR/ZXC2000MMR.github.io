const { Telegraf } = require('telegraf');

// Вставь сюда токен от BotFather
const bot = new Telegraf('8798183630:AAH9CKB5b_tb2rzWjxOFyLTydz6VdL0ifJY');

// Ссылка на твое опубликованное приложение
const webAppUrl = 'https://zxc2000mmr.github.io/'; 

bot.start((ctx) => {
    ctx.reply('Привет! Нажми на кнопку ниже, чтобы открыть помощника Dota 2:', {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Открыть Mini App", web_app: { url: webAppUrl } }
                ]
            ]
        }
    });
});

// Обработка данных, если ты нажал кнопку tg.sendData в приложении
bot.on('web_app_data', (ctx) => {
    ctx.reply(`Получены данные из приложения: ${ctx.webAppData.data.text()}`);
});

bot.launch();
console.log('Бот запущен!');