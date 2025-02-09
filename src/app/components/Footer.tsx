import Link from "next/link";
import React from "react";
import { FaVk, FaTelegram, FaViber, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col space-y-10 items-center m-10">
      {/* Навигация */}
      <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        <Link className="hover:text-gray-900" href="/">
          Главная
        </Link>
        <Link className="hover:text-gray-900" href="/catalog">
          Каталог
        </Link>
        <Link className="hover:text-gray-900" href="/about">
          О нас
        </Link>
        <Link className="hover:text-gray-900" href="/contact">
          Контакты
        </Link>
      </nav>

      {/* Контакты */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Свяжитесь с нами
        </h3>
        <div className="flex justify-center gap-5 text-gray-700">
          <Link
            style={{ width: "22px" }}
            href="tel:+79999999999"
            className="hover:text-blue-600 flex justify-center items-center"
          >
            <FaPhone size={22} />
          </Link>
          <Link
            href="https://vk.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 flex justify-center items-center"
          >
            <FaVk size={30} />
          </Link>
          <Link
            href="https://t.me/example"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 flex justify-center items-center"
          >
            <FaTelegram size={30} />
          </Link>
          <Link
            href="viber://chat?number=+79999999999"
            className="hover:text-blue-600 flex justify-center items-center"
          >
            <FaViber size={30} />
          </Link>
          <Link
            href="https://wa.me/79999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 flex justify-center items-center"
          >
            <FaWhatsapp size={30} />
          </Link>
        </div>
      </div>

      {/* Копирайт */}
      <p className="text-center text-gray-700 font-medium">
        &copy; {new Date().getFullYear()} Все права защищены
      </p>
    </footer>
  );
}
