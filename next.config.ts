import type { NextConfig } from "next";

const deployTarget = process.env.DEPLOY_TARGET;
const isGithubPages = deployTarget === "github-pages";
const isHostingerStatic = deployTarget === "hostinger-static";
const shouldStaticExport = isGithubPages || isHostingerStatic;
const basePath = isGithubPages ? "/Resume-Nextjs" : "";

const nextConfig: NextConfig = {
  ...(shouldStaticExport
    ? {
        output: "export" as const,
        ...(basePath
          ? {
              basePath,
              assetPrefix: basePath,
            }
          : {}),
        trailingSlash: true,
      }
    : {}),
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
