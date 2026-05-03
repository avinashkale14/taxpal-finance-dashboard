require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/auth.routes");
const transactionRoutes = require("./routes/transaction.routes");
const dashboardRoutes = require("./routes/dashboard.routes");
const budgetRoutes = require("./routes/budget.routes");
const errorMiddleware = require("./middlewares/error.middleware");

const categoryRoutes = require("./routes/category.routes");
const analyticsRoutes = require("./routes/analytics.routes");
const taxRoutes = require("./routes/tax.routes");
const reportRoutes = require("./routes/report.routes");
const deadlineRoutes = require("./routes/deadline.routes");

const app = express();

// ✅ SIMPLE CORS (FINAL FIX)
app.use(cors());

// middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// test route
app.get("/", (req, res) => {
  res.send("TaxPal API is running...");
});

// routes
app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/budgets", budgetRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/taxes", taxRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/deadlines", deadlineRoutes);

// error handler
app.use(errorMiddleware);

module.exports = app;