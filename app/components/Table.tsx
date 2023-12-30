import React from 'react'
import Image from "next/image"
import AddPost from "../manage/addPost"
import DeletePost from '../manage/deletePost'
import UpdatePost from '../manage/updatePost'

const getPosts = async () => {
    // next: {
    //     revalidate: 5
    // }
    const response = await fetch('http://localhost:3000/api/posts', {
        cache: 'no-store'
    });
    return response.json();
}

async function Table() {
    const posts = await getPosts()
    return (
        <div className='flex flex-col gap-3'>
            <AddPost />
            <div className='bg-white rounded-md shadow-md max-w-6xl py-2'>
                <h1 className='font-semibold text-slate-800 ml-3 text-xl'>Table Post</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='font-bold text-md'>
                                    No
                                </th>
                                <th className='font-bold text-md'>Gambar</th>
                                <th className='font-bold text-md'>Judul</th>
                                <th className='font-bold text-md'>Deskripsi</th>
                                <th className='font-bold text-md'>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.data.map((post: Post, index: number) => (
                                <tr>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="mask w-20 h-20 flex items-center">
                                            <Image
                                                src={post.image}
                                                alt="image"
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        {post.title}
                                    </td>
                                    <td>{post.description}</td>
                                    <th className='flex justify-center items-center gap-3 mt-5'>
                                        <UpdatePost {...post} />
                                        <DeletePost  {...post} />
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table