'use client'
import { useState } from "react"
import { useRouter } from "next/navigation";
import { useEdgeStore } from "@/lib/edgestore";
import axios from "axios";


function DeletePost(post: Post) {

    const [modal, setModal] = useState(false);
    const [isMutating, setIsMutating] = useState(false);

    const router = useRouter();


    const handleModal = () => {
        setModal(!modal);
    }

    const handleDelete = async (id: string) => {

        try {
            setIsMutating(true);
            await axios.delete('http://localhost:3000/api/posts/manage/' + id);
            setIsMutating(false);


            router.refresh();
            setModal(false);
        } catch (error) {
            console.error('Error in handleSubmit:', error);
        }
    };



    return (
        <div>
            <button
                className="btn btn-secondary btn-xs w-12"
                onClick={handleModal}>
                Hapus
            </button>

            <input type="checkbox" checked={modal} onChange={handleModal} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-xl text-center">
                        Apakah kamu yakin menghapus data ini ?
                    </h3>
                    <div className="modal-action">
                        <button type="button" className="btn" onClick={handleModal}>Batal</button>
                        {!isMutating ? (
                            <button type="button" onClick={() => handleDelete(post.id)} className="btn btn-primary">Hapus</button>
                        ) : (
                            <button type="button" className="btn btn-loading">Deleting...</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeletePost