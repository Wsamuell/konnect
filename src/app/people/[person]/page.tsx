import Link from 'next/link';
import MessageTerminal from '@/app/components/MessageTerminal';

export default function Page({ params }: { params: { person: string } }) {
  return (
    <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
      <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
        <Link href={'/'}>
          <h1 className="text-2xl font-bold text-gray-800">Konnect</h1>
        </Link>
        <div className="relative flex items-center space-x-4">
          <div className="relative">
            <span className="absolute text-green-500 right-0 bottom-0">
              <svg width="20" height="20">
                <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
              </svg>
            </span>
            <div className="flex justify-center items-center text-5xl text-gray-700 bg-slate-50 rounded-full border-4 w-10 sm:w-16 h-10 sm:h-16">
              {params.person[0]}
            </div>
          </div>
          <div className="flex flex-col leading-tight">
            <div className="text-2xl mt-1 flex items-center">
              <span className="text-gray-700 mr-3">{params.person}</span>
            </div>
          </div>
        </div>
      </div>
      <MessageTerminal sender={params.person} />
    </div>
  );
}
