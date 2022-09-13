import withTM from "next-transpile-modules";

// use withTM with ESM like so - credit to @mattpocockuk
const nextConfig = withTM(["shared"])({ reactStrictMode: true });

export default nextConfig;
