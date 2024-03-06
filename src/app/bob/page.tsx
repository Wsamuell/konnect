import Link from 'next/link';
import MessageTerminal from '../components/MessageTerminal';

export default function Page() {
  return (
    <div>
      <Link href={'/'}>Home</Link>
      <h1>Bob</h1>
      <MessageTerminal sender="Bob" />
    </div>
  );
}
