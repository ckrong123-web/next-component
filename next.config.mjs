import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProduction = process.env.NODE_ENV === 'production';


const isGitHubPages = process.env.GITHUB_PAGES === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', 
    basePath: isGitHubPages ? '/next-component' : '',
    assetPrefix: isGitHubPages ? '/next-component' : '',
    reactStrictMode: false,
    images: {
        unoptimized: true,
    },
    sassOptions: {
        includePaths: [
            path.join(__dirname, 'src/styles'),
        ],
        sourceMap: true,
        prependData: `
                  @use "@/styles/abstracts/_variables.scss" as var;
                  @use "@/styles/abstracts/_mixins.scss" as mix;
                  @use "@/styles/abstracts/_functions.scss" as func;
        `,
    },
    webpack: (config) => {
        config.resolve.alias = {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, "./"),
        "@img": path.resolve(__dirname, "./public/img"),
        };
        
        config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
        });

        return config;
    },
};

export default nextConfig;
