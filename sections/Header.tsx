import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Social {
  href: string;
  socialLogo: ImageWidget;
}

interface Props {
  /**
   * @description The description of name.
   */
  title: string;
  logoImage: ImageWidget;
  socialIcons: Social[];
}

export default function HeaderLandingPage({ title = "Capy", logoImage, socialIcons }: Props) {
  return (
    <div class="bg-primary">
      <div class="md:w-[1300px] flex items-center justify-between mx-auto">
        <div class="flex p-2  items-center justify-center">
          <Image
            src={logoImage}
            alt={title || ""}
            width={30}
            height={30}
            class="w-[30px] h-[30px]"
            loading="lazy"
            fetchPriority="low"
          />
          <h1 class="font-bold text-[28px]">{title}</h1>
        </div>
        <div class="flex">
          <nav class="flex mr-5">
            <span class="ml-3">curso 01</span>
            <span class="ml-3">curso 02</span>
            <span class="ml-3">curso 03</span>
            <span class="ml-3">curso 04</span>
          </nav>

          <div class="flex">
            {socialIcons?.map((item) => (
              <a href={item.href} target="blank" class="mr-2">
                <Image
                  src={item.socialLogo}
                  alt={""}
                  width={30}
                  height={30}
                  class="w-[30px] h-[30px]"
                  loading="lazy"
                  fetchPriority="low"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
