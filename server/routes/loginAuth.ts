import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const router = express.Router();

router.post("/login/:email", async (req: Request, res: Response) => {
  const { email } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { email: String(email) },
    });

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;