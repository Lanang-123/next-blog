'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { Libre_Franklin } from 'next/font/google';



function Card({ data }: { data: Post }) {
    const dateObject = new Date(data.createdAt);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = dateObject.toLocaleDateString('id-ID', options);


    return (
        <div className="card max-w-md glass">
            <figure>
                <Image src={data.image}
                    alt='image'
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    width={1920}
                    layout="responsive"
                    height={100}
                    style={
                        { width: '100%' }
                    }
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-white">{data.title}</h2>
                <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faClock} className="w-4 h-4 text-pink-300" />
                    <p className='text-sm text-pink-300'>
                        {formattedDate}
                    </p>
                </div>
                <p className='text-gray-300 line-clamp-3'>{data.description}</p>
                <div className="card-actions justify-end">
                    <Link href={`/detail/${data.slug}`} className="btn btn-sm btn-secondary">
                        Lihat Detail
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card