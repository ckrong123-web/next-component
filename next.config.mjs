import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    sassOptions: {
        includePaths: ['./src/styles', '*.scss'],
        sourceMap: true,
        prependData: `
                  @use "@/styles/abstracts/_variables.scss" as var;
                  @use "@/styles/abstracts/_mixins.scss" as mix;
                  @use "@/styles/abstracts/_functions.scss" as func;
        `,
    },
    webpack: (config) => {
    // 1️⃣ alias
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "./"),
      "@img": path.resolve(__dirname, "./public/img"),
    };

    // 2️⃣ 기존 svg loader 제외
    const assetRule = config.module.rules.find(
      (rule) =>
        rule.test &&
        rule.test instanceof RegExp &&
        rule.test.test(".svg")
    );
    if (assetRule) assetRule.exclude = /\.svg$/;

    // 3️⃣ svgr loader 추가
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/, // js/ts에서 import한 svg만
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
