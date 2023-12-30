import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server"


const prisma = new PrismaClient();


export async function GET() {
    const response = await prisma.post.findMany();
    return NextResponse.json({ status: 200, data: response });
}

export const POST = async (request:Request) => {
    try {
        const { title, description, image, slug, thumbNail } = await request.json();

        const data = { title, description, image, slug, thumbNail };

        const newPost = await prisma.post.create({ data });

        return NextResponse.json({ message: "Data berhasil ditambahkan", data }, { status: 201 });
    } catch (error) {
        console.error('Error in POST:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
};
