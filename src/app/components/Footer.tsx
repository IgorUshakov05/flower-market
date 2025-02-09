import Link from "next/link";
import React from "react";
import { FaVk, FaTelegram, FaViber, FaPhone, FaWhatsapp } from "react-icons/fa";
export default function Footer() {
  return (
    <div>
      <footer className="flex flex-col space-y-10 justify-center m-10">
        <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
          <Link className="hover:text-gray-900" href="/">
            Главная
          </Link>
          <Link className="hover:text-gray-900" href="/catalog">
            Каталог
          </Link>
          <Link className="hover:text-gray-900" href="/">
            О нас
          </Link>
          <a className="hover:text-gray-900" href="/contact">
            Контакты
          </a>
        </nav>

        <div className="flex justify-center space-x-5">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaVk size={30} />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram size={30} />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPhone size={30} />
          </Link>
          <Link
            href="https://messenger.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaViber size={30} />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={30} />
          </Link>
        </div>
        <p className="text-center text-gray-700 font-medium">
          &copy; {new Date().getFullYear()} Все права защищены
        </p>
      </footer>
    </div>
  );
}
