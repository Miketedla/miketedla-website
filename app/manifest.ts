import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mike Tedla",
    short_name: "Mike Tedla",
    description: "DJ & Eventpartner",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/branding/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}