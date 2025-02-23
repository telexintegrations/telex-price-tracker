# Telex Crypto Price Tracker

## 📌 Overview
The **Telex Crypto Price Tracker** is a Telex Interval Integration that automatically posts real-time cryptocurrency price updates to a Telex channel at regular intervals. It fetches crypto prices from the **CoinGecko API** and sends updates to a Telex webhook via the channels return_url.

This integration is useful for **crypto traders, enthusiasts, and communities** who want to stay updated on market movements without manually checking prices.

---

## 🚀 Features
- Tracks the **real-time prices** of Bitcoin (BTC), Ethereum (ETH), and Solana (SOL).
- Includes **24-hour percentage change** for each tracked cryptocurrency.
- Sends **formatted messages** to the Telex platform via /tick enpoint return_url.
- Provides a **REST API** for fetching integration details and triggering updates.
- Designed for **automated interval execution**.

---

## ⚙️ Tech Stack
- **Backend:** Node.js, Express.js
- **External API:** CoinGecko API
- **Deployment:** Vercel
- **Package Manager:** npm

---

## 📂 Project Structure
```sh
📁 telex-crypto-price-tracker
├── 📄 src                         # Main Express folder
    ├── 📄 app.js                      # Main Express server
    ├── 📄 telex-func.js               # Crypto fetching and webhook handler
    ├── 📄 telex-integration.js        # Integration metadata
    ├── 📄 .env                        # Environment variables
    ├── 📄 package.json                # Dependencies and scripts
    ├── 📄 .gitignore                  # Dependencies and scripts
├── 📄 vercel.json                 # Vercel configuration
└── 📄 README.md                   # Project documentation
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/telex-price-tracker.git
cd telex-price-tracker/src
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Navigate to CoinGecko developers home page and get a demo api-key

Create a `.env` file in the project root and add:
```sh
COIN_GECKO_API_KEY=<Your_CoinGecko_API_Key>
```

---

### 4️⃣ Run the Server
```sh
npm run dev
```
The server will start on `http://localhost:3300`

---

### 5️⃣ Create A Channel On Telex:

Navigate to telex. Follow their documentation `http://telex.im/` to configure your app and create a new channel. Name it "crypto-price-update".

![alt text](https://res.cloudinary.com/drkfpwuxd/image/upload/v1740311564/Screenshot_2025-02-23_125152_e6vu9i.png)

---

## 🛠 API Endpoints

### 🔹 Fetch Integration Details
**GET** `/integration.json`
#### **Response:**
```json
{
  "data": {
    "date": {
      "created_at": "2025-02-18",
      "updated_at": "2025-02-21"
    },
    "descriptions": {
      "app_name": "Telex Crypto App",
      "app_description": "a Telex Interval Integration that automatically posts real-time cryptocurrency price updates to a Telex channel at regular intervals",
      "app_logo": "https://res.cloudinary.com/drkfpwuxd/image/upload/v1740098440/logo-brand-font-crypto-240c218ef900cc5ce69418df2360d5de_d3y6qu.png",
      "app_url": "https://telex-price-tracker1.vercel.app",
      "background_color": "#4A90E2"
    },
    "is_active": true,
    "integration_category": "Monitoring & Logging",
    "integration_type": "interval",
    "key_features": [
      "It will track the prices of Bitcoin (BTC), Ethereum (ETH), and Solana (SOL)",
      "along side with their respective 24-hour percentage changes",
      "sends formatted messages to the Telex platform",
      "Useful to crypto traders, enthusiasts, and communities that want to stay updated on market movements without manually checking prices"
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
    "version": "1.0.0",
    "tick_url": "https://telex-price-tracker1.vercel.app/tick",
    "target_url": ""
  }
}
```

---
### 6️⃣ Connect your application:
Copy the "fetch integration.json url" `http://localhost:3300/integration.json` and paste in the "add new integration" url space in the telex App section.

![alt text](https://res.cloudinary.com/drkfpwuxd/image/upload/v1740311564/Screenshot_2025-02-23_124458_yj3irv.png)



---
### 🔹 Trigger Crypto Price Update
**POST** `/tick`

Telex will automatically make POST request to your /tick endpoint and update the response in the newly created telex channel.
#### **Request Body:**
```json
{
  "channel_id": "12345",
  "return_url": "https://your-telex-webhook.com",
  "settings": {}
}
```
#### **Response:**
```json
{
  "status": "success",
  "message": "Message sent to Telex"
}

```
![alt text](https://res.cloudinary.com/drkfpwuxd/image/upload/v1740311565/Screenshot_2025-02-23_125215_dtrwlc.png)
---

## 🛠 Deployment
### **1️⃣ Deploying to Vercel**
This project is set up with GitHub Actions to automatically deploy to **Vercel** when new changes are pushed to `main`.

If deploying manually:
```sh
npm install -g vercel
vercel --prod
```

---

## 👨‍💻 Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes and commit (`git commit -m "Added new feature"`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a **Pull Request**

---

## 📝 License
This project is licensed under the **MIT License**.

---

## 📬 Contact
📧 **Email:** jameskehinde101@gmail.com  
🔗 **GitHub:** [github.com/Jhaemis-hack](https://github.com/Jhaemis-hack)  

