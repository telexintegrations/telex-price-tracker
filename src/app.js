const express = require('express')
const app = express()
const port  = 3300
const cors = require('cors');
const { updateCryptoPrices } = require('./telex-func');
const { integrationJson } = require('./telex-integration');

app.use(express.json())
app.use(cors())

app.get('/integration.json', integrationJson)
 
app.post('/tick', async (req, res) => {
  
  const { channel_id, return_url, settings } = req.body;

  if (!return_url) {
    console.log("❌ No return_url provided!");
    return res.status(400).json({ error: "return_url is required" });
  }

  // Fetch crypto prices
  try {
    // Prepare data in Telex webhook format
    await updateCryptoPrices(return_url);

  } catch (error) {
    console.error("❌ Failed to fetch crypto data:", error);

    return res.status(500).json({ error: "Failed to process request" });
  }
});

// Catch 404 errors
app.use((req, res, next) => {
  res.status(404).json({ error: "Not Found", message: `Route ${req.originalUrl} not found` });
});

// Global error handler for catching all errors
app.use((error, req, res, next) => {
  console.error("❌ Internal Server Error:", error);
  res.status(500).json({ error: "Internal Server Error", message: error.message });
});

app.listen(port, (err)=>{
  if(err) throw err;
  console.log('Server is running on port', port)
})

