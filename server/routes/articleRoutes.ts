import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const articles = await prisma.article.findMany(
      {
        include: {
          author: true,
        },
        orderBy: {
          date_created: 'desc',
        },
      }
    );
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const article = await prisma.article.findUnique({
      where: { id: String(id) },
      include: {
        author: true,
      },
    });

    if (!article) {
      res.status(404).json({ error: "Article not found" });
      return;
    }

    res.json(article);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  const { title, content, status, cover_img, authorId, slug } = req.body;
  // function slugify({ str }: { str: String }) {
  //   return str
  //      .toLowerCase()
  //      .trim()
  //      .replace(/[^\w\s-]/g, "")
  //      .replace(/[\s_-]+/g, "-")
  //      .replace(/^-+|-+$/g, "");
  //  }
  // const slug = slugify(title);
  try {
    const newArticle = await prisma.article.create({
        data: {
            title: title,
            content: content,
            status: status,
            cover_img: cover_img,
            author: {
              connect: {
                id: authorId,
              },
            },
            slug,
        }
    });
    console.log(newArticle)
    res.json(newArticle);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content, status, cover_img, slug } = req.body;
  try {
    const updatedArticle = await prisma.article.update({
      where: { id: String(id) },
      data: {
        title,
        content,
        status,
        cover_img,
        slug,
      },
    });

    res.json(updatedArticle);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.article.delete({
      where: { id: String(id) },
    });

    res.json({ message: "Article deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
