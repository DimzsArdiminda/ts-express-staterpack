import { Request, Response } from "express";
import prismaConnection from "../lib/prisma";

export const getListUser = async (req: Request, res: Response) => {
    try {
        const listUser = await prismaConnection.datauser.findMany();
        res.status(200).json(listUser);
    } catch (error) {
        res.status(500).json({ error: "Gagal ambil data", detail: error });
    }
};
