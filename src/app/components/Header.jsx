import { Waves } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <Link href={'/'} className="flex items-center">
          <Waves className="h-8 w-8 text-gray-900" />
        </Link>

        {/* Навигация */}
        <div className="flex gap-x-12">
          <a
            href="/#buy"
            className="text-sm font-medium text-gray-900 hover:text-gray-600 max-sm:hidden"
          >
            Купить
          </a>
          <Link
            href="/catalog"
            className="text-sm font-medium text-gray-900 hover:text-gray-600 "
          >
            Каталог
          </Link>
          <a
            href="/#rating"
            className="text-sm font-medium text-gray-900 hover:text-gray-600 max-sm:hidden"
          >
            Отзывы
          </a>
          <Link
            href={"/contact"}
            className="text-sm font-medium text-gray-900 hover:text-gray-600"
          >
            Контакты
          </Link>
        </div>
      </nav>
    </header>
  );
}
