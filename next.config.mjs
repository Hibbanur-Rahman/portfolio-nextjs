/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
    basePath:'/portfolio-nextjs',
    assetPrefix: 'https://github.com/Hibbanur-Rahman/portfolio-nextjs/',
    images:{
        unoptimized:true,
    }
};

export default nextConfig;
