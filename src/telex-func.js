const axios = require('axios');
require('dotenv').config();

const TELEX_WEBHOOK_URL = process.env.TELEX_WEBHOOK_URL;
const COINS = ['bitcoin', 'ethereum', 'solana'];

async function fetchCryptoPrices() {
    try {
        const response = await axios.get(
            `https://api.coingecko.com/api/v3/simple/price?ids=${COINS.join('%2C')}&vs_currencies=usd&include_24hr_change=true&x_cg_demo_api_key=${process.env.COIN_GECKO_API_KEY}`
        );        
        return response.data;
    } catch (error) {
        console.error('Error fetching crypto prices:', error);
        return null;
    }
}

async function sendToTelex(message, return_url) {
    try {
        const data = {
            "event_name": "🚀 Crypto Market Update 🚀",
            "message": `${message}`,
            "status": "success",
            "username": "price_tracker"
        };

        await axios.post(return_url, JSON.stringify(data)); 
        console.log('Message sent to Telex');
    } catch (error) {
        console.error('Error sending message to Telex:', error);
    }
} 

async function updateCryptoPrices(return_url) {
    const prices = await fetchCryptoPrices();    
    if (!prices) return; 

    let message = '';
    COINS.forEach((coin) => {
        const price = prices[coin]['usd'];
        const change = prices[coin]['usd_24h_change'].toFixed(2);
        message += `${coin.toLowerCase()}::: $${price} (${change}% 24h)\n`;
    });

    await sendToTelex(message, return_url);
}


module.exports = { updateCryptoPrices }
