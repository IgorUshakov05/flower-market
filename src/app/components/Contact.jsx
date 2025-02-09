import React from "react";
import { FaVk, FaTelegram, FaViber, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
    return (
        <div className="max-w-3xl mx-auto py-16 px-6">
            {/* Заголовок */}
            <h1 className="text-4xl font-bold text-gray-900 text-center">Свяжитесь с нами</h1>
            <p className="text-gray-600 text-center mt-2">
                Вы можете позвонить нам или написать в удобном мессенджере.
            </p>

            {/* Блок контактов */}
            <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow">
                <h2 className="text-2xl font-semibold text-gray-900">Наши контакты</h2>
                <p className="text-gray-700 mt-2">Телефон: <a href="tel:+79999999999" className="text-blue-600 hover:underline">+7 999 999 99 99</a></p>
                <p className="text-gray-700">Email: <a href="mailto:info@example.com" className="text-blue-600 hover:underline">info@example.com</a></p>
            </div>

            {/* Социальные сети */}
            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-900 text-center">Мы в мессенджерах</h2>
                <div className="flex justify-center gap-6 mt-4 text-gray-700">
                    <a href="https://vk.com/example" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 flex items-center justify-center">
                        <FaVk size={40} />
                    </a>
                    <a href="https://t.me/example" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 flex items-center justify-center">
                        <FaTelegram size={40} />
                    </a>
                    <a href="viber://chat?number=+79999999999" className="hover:text-blue-600 flex items-center justify-center">
                        <FaViber size={40} />
                    </a>
                    <a href="https://wa.me/79999999999" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 flex items-center justify-center">
                        <FaWhatsapp size={40} />
                    </a>
                </div>
            </div>


        </div>
    );
}
