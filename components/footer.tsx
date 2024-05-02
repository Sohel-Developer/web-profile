import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} <span className="font-semibold"> <Link target="_blank" href={'https://www.linkedin.com/in/sohel-developer/'} > Sohel Rana.</Link></span>  All rights reserved.
      </small>
      {/* <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p> */}
    </footer>
  );
}
