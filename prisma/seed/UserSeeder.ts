import prismaConnection from "../../lib/prisma";
import bcrypt from "bcrypt";

export async function seedUser() {
    const hashedPassword = await bcrypt.hash("password", 10);

    await prismaConnection.datauser.create({
        data: {
            id: "user-1",
            name: "John Doe",
            email: "john.doe@example.com",
            password: hashedPassword,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    });
}
