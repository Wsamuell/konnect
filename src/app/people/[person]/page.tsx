import Link from 'next/link';
import MessageTerminal from '@/app/components/MessageTerminal';

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <Link href={'/'}>Home</Link>
      <h1>{params.id}</h1>
      <MessageTerminal sender={params.id} />
    </div>
  );
}
