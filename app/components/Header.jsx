import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">NextJS 13.3 Explained</Link>
        </div>
        <div className="links">
          <Link href="/about">About</Link>
          <Link href="/about/team">The Team</Link>
          <Link href="/code/repos">Code</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
