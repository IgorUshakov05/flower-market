import eslintPlugin from "@eslint/js"; // Основной пакет для Next.js
import prettier from "eslint-config-prettier"; // Интеграция с Prettier

export default [
  eslintPlugin.nextcore, // Конфигурация Next.js
  prettier, // Отключение конфликтующих правил для Prettier
];
