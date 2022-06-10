import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar: NextPage = () => {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a
          className="home"
          style={{ color: router.pathname === '/' ? 'teal' : 'tomato' }}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          className="about"
          style={{ color: router.pathname === '/about' ? 'teal' : 'tomato' }}
        >
          About
        </a>
      </Link>
    </nav>
  );
};

export default NavBar;
