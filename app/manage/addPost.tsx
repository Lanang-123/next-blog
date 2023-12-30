'use client'
import { SyntheticEvent, useState } from "react"
import { useRouter } from "next/navigation";
import { useEdgeStore } from "@/lib/edgestore";
import slugify from 'slugify';
import axios from 'axios';


// dUMMY DATA
// {
//     "id": "1",
//         "title": "Pertamina Optimalkan rencana subsidi tepat",
//             "description": "Subsidi tepat akan digencarkan mulai oktober 2022,bersamaan dengan itu pertamina mempersiapkan moment ini dengan sebaik baiknya",
//                 "image": "pertamina.jpeg"
// },
// {
//     "id": "2",
//         "title": "EL Rumi vs Jefri Nichol",
//             "description": "Duel panas artisa el rumi dengan jefri nichol akan berlangsung nanti malam.Saksikan serunya pertandingan itu",
//                 "image": "duel.jpeg"
// },
// {
//     "id": "s8toh",
//         "title": "test",
//             "description": "oke"
// }
// {
// //     "id": "s8toh",
// //         "title": "Survei Terbaru Capres & Cawapres 2024",
// //             "description": "Menurut survei ARCI, elektabilitas Prabowo-Gibran di angka 40,1%. Kemudian disusul Ganjar Pranowo-Mahfud MD 35,9%. Dan pasangan Anies Baswedan-Muhaimin Iskandar di angka 22,2%.Direktur ARCI Baihaki Sirajt membeberkan faktor Prabowo - Gibran unggul di Jatim.Salah satunya migrasi pendukung PDIP yang awalnya memilih Ganjar Pranowo, kini beralih ke Prabowo."
// // }


function addPost() {
    const [judul, setJudul] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [gambar, setGambar] = useState<File>();
    const [modal, setModal] = useState(false);
    const { edgestore } = useEdgeStore();
    const [isMutating, setIsMutating] = useState(false);

    const router = useRouter();

    function generateRandomString(length: number) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }

        return result;
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setGambar(e.target.files[0]);
        }

    };

    const handleModal = () => {
        setModal(!modal);
    }

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        try {
            if (gambar) {
                const res = await edgestore.myPublicImages.upload({ file: gambar });
                const slug = slugify(judul, { lower: true });

                setIsMutating(true);

                const data = {
                    title: judul,
                    description: deskripsi,
                    image: res.url.toString(),
                    slug: slug,
                    thumbNail: res.thumbnailUrl?.toString(),
                }

                axios.post('http://localhost:3000/api/posts', data).then((value) => {
                    setIsMutating(false);
                    setJudul('');
                    setDeskripsi('');
                    setGambar(undefined);
                    router.refresh();
                    setModal(false);
                });
            }
        } catch (error) {
            console.error('Error in handleSubmit:', error);
        }
    };



    return (
        <div>
            <button
                className='btn btn-primary btn-sm w-20'
                onClick={handleModal}>
                Tambah
            </button>

            <input type="checkbox" checked={modal} onChange={handleModal} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="py-2 border border-b-slate-200 border-t-0 border-r-0 border-l-0 ">
                        <h3 className="font-bold text-2xl">
                            Tambah Postingan
                        </h3>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-3">
                        <div className="form-control">
                            <label htmlFor="judul" className="label font-bold">Judul</label>
                            <input
                                type="text"
                                name="judul"
                                id="judul"
                                className="input w-full input-bordered" placeholder="Masukkan judul..."
                                value={judul}
                                onChange={(e) => setJudul(e.target.value)}
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="dekripsi" className="label font-bold">Dekripsi</label>
                            <input
                                type="text"
                                name="dekripsi"
                                id="dekripsi"
                                className="input w-full input-bordered" placeholder="Masukkan deskripsi"
                                value={deskripsi}
                                onChange={(e) => setDeskripsi(e.target.value)}
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="gambar" className="label font-bold">Gambar</label>
                            <input
                                type="file"
                                className="file-input file-input-bordered w-full max-w-full"
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className="modal-action">
                            <button type="button" className="btn" onClick={handleModal}>Batal</button>
                            {!isMutating ? (
                                <button type="submit" className="btn btn-primary">Submit</button>
                            ) : (
                                <button type="button" className="btn btn-loading">Saving...</button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default addPost