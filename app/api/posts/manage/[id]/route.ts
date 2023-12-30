import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server"


const prisma = new PrismaClient();

export async function DELETE(request:Request,{params} : {params:{id:string}}) {
    const post = await prisma.post.delete({
        where: {
            id:Number(params.id)
        }
    });

    return NextResponse.json({message:"Data berhasil dihapus"},{status:200});
}

export async function PATCH(request:Request,{params}:{params:{id:string}}) {
    try {
        const { title, description, image, slug, thumbNail } = await request.json();

        const data = { title, description, image, slug, thumbNail };

        const post = await prisma.post.update({
            where: {
                id: Number(params.id)
            },
            data
        });

        return NextResponse.json({ message: "Data berhasil diupdate", post }, { status: 200 });
    } catch (error) {
        console.error('Error in POST:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
