import prismaConnection from "../lib/prisma";
import { seedUser } from "./seed/UserSeeder";

async function main(){
    await seedUser();
}

main()
    .then(() => {
        console.log("Seeding completed successfully.");
    })
    .catch((e) => {
        console.error("Seeding failed:", e);
    })
    .finally(async () => {
        await prismaConnection.$disconnect();
    });
