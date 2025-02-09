const nextConfig = {
  trailingSlash: true, // Добавляет слэш в конце URL
  distDir: "out", // Необязательно, но может помочь при экспорте
  eslint: {
    ignoreDuringBuilds: true, // Отключает ESLint во время сборки, если нужно
  },
};

export default nextConfig;
