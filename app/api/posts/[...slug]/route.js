import prisma from "@/prisma/prisma.js"

export async function GET(request) {
    try {
        let slug = request.url.split("posts/")[1];

        const response = await prisma.post.findMany();

        // Cari posting berdasarkan slug
        const post = await response.find((post) => post.slug.toLowerCase() === slug.toLowerCase());


        if (!post) {
            return Response.json({ status: 404, error: "Post not found" });
        }

        return Response.json({ status: 200, data: post });
    } catch (error) {
        console.error("Error:", error);
        return Response.json({ status: 500, error: "Internal Server Error" });
    }
}