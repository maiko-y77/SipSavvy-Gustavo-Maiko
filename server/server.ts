import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import articleRoutes from "./routes/articleRoutes";
import userRoutes from "./routes/userRoutes";
import loginAuth from "./routes/loginAuth";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("GET request to the homepage");
});

app.get("/users", async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        name: true,
        last_name: true,
        email: true,
        password: true,
        avatar: true,
        role: true,
        email_verified: true,
        followers: true,
        following: true,
      },
    });

    if (!user) {
      res.status(404).json({ error: "No users to display" });
      return;
    }

    res.json(user);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.use("/articles", articleRoutes);
app.use("/user", userRoutes);
app.use("/auth", loginAuth);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/**
 * 
enum Role {
  ADMIN
  WRITER
  READER
}

 */
