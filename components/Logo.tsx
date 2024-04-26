import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link
      href={"/"}
      className="font-bold text-3xl bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text hover:cursor-pointer"
    >
      FormBuilder
    </Link>
  );
}

export default Logo;
