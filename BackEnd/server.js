require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = require('./src/app');

const PORT = process.env.PORT || 3000;

// ✅ Enable CORS so your frontend can access the backend
app.use(cors({
  origin: "https://ai-code-review-frontend-coy2.onrender.com", // your frontend link
  methods: ["GET", "POST"],
}));

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
