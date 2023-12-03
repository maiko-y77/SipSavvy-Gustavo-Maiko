import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        id: 'desc',
      },
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id: String(id) },
      include: {
        Articles: {
          include: {
            author: true,
          },
        },
      },
    });

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.json(user);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/new", async (req: Request, res: Response) => {
  const data = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        username: data.username,
        name: data.name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        avatar: data.avatar,
        role: data.role,
        email_verified: data.email_verified,
        followers: [],
        following: [],
      },
    });
    console.log(user);
    res.json(user);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

  res.json(data);
});

export default router;
