import Image from 'next/image';
import Link from 'next/link';
import image from './assets/guy-looking.png';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-5">
      <nav className="flex z-10 w-full items-center justify-between font-mono text-sm flex-wrap">
        <h1 className="text-2xl font-bold text-gray-800">Konnect</h1>
        <div className="flex gap-4">
          <Link
            href="/people/Alice"
            className="px-3 py-2 text-gray-700 rounded hover:bg-gray-200"
          >
            Alice
          </Link>
          <Link
            href="/people/Bob"
            className="px-3 py-2 text-gray-700 rounded hover:bg-gray-200"
          >
            Bob
          </Link>
          <button className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Join the Chat
          </button>
        </div>
      </nav>
      <div className="flex mt-20 flex-row items-center ">
        <div className="text-center md:text-left w-1/2 ">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-600">Konnect </span>
            with anyone, anywhere
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Konnect is a simple app that lets you stay connected with friends,
            family, and colleagues.
          </p>
        </div>
        <div className="flex w-1/2 justify-center">
          <Image
            src={image}
            alt="Konnect App Image"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </main>
  );
}
