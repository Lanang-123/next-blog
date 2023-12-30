import Image from 'next/image'
import Card from './components/Card'


async function getPosts() {
  const res = await fetch('http://localhost:3000/api/posts',{
        cache: 'no-store'
  });
  const data = res.json();
  return data;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className='pb-20'>
      <h1 className='text-white text-xl font-bold'>Berita Terupdate</h1>
      <div className="mt-2 grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2 lg:gap-8">
        {posts.data.map((post: Post) => (
          <Card key={post.id} data={post} />
        ))}
      </div>
    </main>
  )
}
