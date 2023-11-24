import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const router = express.Router();

router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id: String(id) },
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

export default router;