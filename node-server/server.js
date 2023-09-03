const { PrismaClient } = require('@prisma/client');
import express from express;
import cors from 'cors';

const prisma = new PrismaClient();



const app = express();
app.use(cors());
app.use(express.json());

app.get('/products', async (req, res) => {
    const products = await prisma.products
});