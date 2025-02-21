require('dotenv').config();

const integrationJson =async (req, res) =>{
    base_url = 'https://telex-crypto-price-tracker.vercel.app'

    return res.json({
        "data": {
            "date": {
            "created_at": "2025-02-18",
            "updated_at": "2025-02-21"
            },
            "descriptions": {
            "app_name": "Telex Crypto App",
            "app_description":
                `a Telex Interval Integration that automatically posts real-time cryptocurrency price updates to a Telex channel at regular intervals`,
            "app_logo": "https://res.cloudinary.com/drkfpwuxd/image/upload/v1740098440/logo-brand-font-crypto-240c218ef900cc5ce69418df2360d5de_d3y6qu.png",
            "app_url": `${base_url}`,
            "background_color": "#4A90E2",
            },
            "is_active": true,
            "integration_category": "Monitoring & Logging",
            "integration_type": "interval",
            "key_features": [
                "It will track the prices of Bitcoin (BTC), Ethereum (ETH), and Solana (SOL)",
                "along side with their respective 24-hour percentage changes",
                "sends formatted messages to the Telex platform",
                "Useful to crypto traders, enthusiasts, and communities that want to stay updated on market movements without manually checking prices",
            ],
            "author": "James Kehinde",
            "settings": [
            {
                "label": "interval",
                "type": "text",
                "required": true,
                "default": "* * * * *"
            }
            ],
            "is_active": true,
            "version": "1.0.0",
            "tick_url": `${base_url}/tick`,
            "target_url": ``
        }
        
    })
}

module.exports = {integrationJson}


