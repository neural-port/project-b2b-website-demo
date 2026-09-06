import type { NextConfig } from "next";

const isStaticExport = process.env.GITHUB_PAGES === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "project-b2b-website-demo";
const basePath = isStaticExport ? `/${repositoryName}` : "";

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self'; frame-ancestors 'self'; base-uri 'self'; form-action 'self'",
  },
];

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    formats: isStaticExport ? undefined : ["image/avif", "image/webp"],
    unoptimized: isStaticExport,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(isStaticExport && {
    output: "export",
    basePath,
    assetPrefix: basePath,
    trailingSlash: true,
  }),
  ...(!isStaticExport && {
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: securityHeaders,
        },
      ];
    },
  }),
};

export default nextConfig;
