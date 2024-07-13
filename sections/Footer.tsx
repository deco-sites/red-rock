import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  logo?: {
    src?: ImageWidget;
    alt?: string;
    href?: string;
  };
  copyright?: string;
}

export default function Footer({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
    href: "",
  },
  copyright = "© 2024 deco.cx. All rights reserved.",
}: Props) {

  return (
    <footer class="bg-primary">
      <div class="flex justify-between min-h-6 px-4 sm:px-10 max-w-[1440px] mx-auto">
        <p>{copyright}</p>
        {logo.src && <a href={logo.href} class="h-6">
          <Image
            src={logo.src}
            alt={logo.alt || ""}
            width={100}
            class="h-full"
          />
        </a>}
      </div>
    </footer>
  );
}
