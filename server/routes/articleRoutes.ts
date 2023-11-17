import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const articles = await prisma.article.findMany();
        res.json(articles);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const article = await prisma.article.findUnique({
            where: { id: String(id) },
        });

        if (!article) {
            res.status(404).json({ error: 'Article not found' });
            return;
        }

        res.json(article);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/', async (req: Request, res: Response) => {
    const { title, content, status, cover_img } = req.body;
    try {
        const newArticle = await prisma.article.create({
            data: {
                title,
                content,
                status,
                cover_img,
            },
        });

        res.json(newArticle);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, content, status, cover_img } = req.body;
    try {
        const updatedArticle = await prisma.article.update({
            where: { id: String(id) },
            data: {
                title,
                content,
                status,
                cover_img,
            },
        });

        res.json(updatedArticle);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await prisma.article.delete({
            where: { id: String(id) },
        });

        res.json({ message: 'Article deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;