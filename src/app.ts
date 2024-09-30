import express from 'express';
import productRouter from './routes/product.route';  // เส้นทางจริงไปยัง router ของคุณ

const app = express();

app.use(express.json()); // Middleware ที่จำเป็น
app.use('/products', productRouter); // ใช้ router

export default app;