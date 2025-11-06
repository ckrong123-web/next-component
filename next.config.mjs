/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: ['./src/styles', '*.scss'],
        sourceMap: true,
        prependData: `
                  @use "@/styles/abstracts/_variables.scss" as var;
                  @use "@/styles/abstracts/_mixins.scss" as mix;
                  @use "@/styles/abstracts/_functions.scss" as func;
        `,
    },
    // webpack: (config, { isServer }) => {
    //     // SSR 환경에서 Highcharts 모듈 설정
    //     if (isServer) {
    //         config.externals.push('highcharts');
    //     }

    //     return config;
    // },
    reactStrictMode: false,
};

export default nextConfig;
