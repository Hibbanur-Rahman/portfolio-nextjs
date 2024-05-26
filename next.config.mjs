/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
    basePath:'/portfolio-nextjs',
    assetPrefix: 'https://github.com/Hibbanur-Rahman/portfolio-nextjs/tree/gh-pages/',
    images:{
        unoptimized:true,
    }
};

export default nextConfig;
