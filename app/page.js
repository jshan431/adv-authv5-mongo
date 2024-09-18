import Link from 'next/link';
export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center m-4">
      <h1 className="my-3 text-3xl">Landing Page</h1>
      <Link className='text-3xl underline' href="/products">
        All Products
      </Link>
    </div>
  );
}
