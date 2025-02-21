# Telex Crypto Price Tracker

## 📌 Overview
The **Telex Crypto Price Tracker** is a Telex Interval Integration that automatically posts real-time cryptocurrency price updates to a Telex channel at regular intervals. It fetches crypto prices from the **CoinGecko API** and sends updates to a Telex webhook.

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
├── 📄 src                  # Main Express server
    ├── 📄 app.js 
    ├── 📄 telex-func.js               # Crypto fetching and webhook handler
    ├── 📄 telex-integration.js      # Integration metadata
    ├── 📄 .env                        # Environment variables
    ├── 📄 package.json                # Dependencies and scripts
    ├── 📄 .gitignore                  # Dependencies and scripts
├── 📄 vercel.json                     # Vercel configuration
└── 📄 README.md                   # Project documentation
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/telex-crypto-price-tracker.git
cd telex-crypto-price-tracker/src
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the project root and add:
```sh
COIN_GECKO_API_KEY=<Your_CoinGecko_API_Key>
```

### 4️⃣ Run the Server
```sh
node app.js
```
The server will start on `http://localhost:3300`

---

## 🛠 API Endpoints

### 🔹 Fetch Integration Details
**GET** `/integration.json`
#### **Response:**
```json
{
  "data": {
    "app_name": "Telex Crypto App",
    "app_description": "Automatically posts real-time cryptocurrency price updates",
    "key_features": [
      "Tracks BTC, ETH, SOL prices",
      "Includes 24-hour price changes",
      "Sends updates to Telex platform"
    ],
    "author": "James Kehinde",
    "version": "1.0.0",
    "tick_url": "https://telex-crypto-price-tracker.vercel.app/tick"
  }
}
```

### 🔹 Trigger Crypto Price Update
**POST** `/tick`
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
  "message": "Crypto price update sent to Telex"
}
```

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
🔗 **GitHub:** [github.com/Jhamis-hack](https://github.com/Jhamis-hack)  

