export const metadata = {
    title: "Post Page",
    description: "Ini adalah tempat berita-berita terbaru"
}



function PostDetail({ params }: { params: Post }) {
    return (
        <div>
            h1
            PostDetail dengan id ke {params.id[0]}</div>
    )
}

export default PostDetail