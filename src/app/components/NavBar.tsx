"use client";

import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-black">
        <Link href="/">MyApp3</Link>
      </div>
      <ul className="flex justify-center items-center space-x-8">
        <li>
          <Link href="/anotherPage" className="text-gray-800 hover:text-black">
            Page2
          </Link>
        </li>
        <li>
          <Link href="/register" className="text-gray-800 hover:text-black">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
