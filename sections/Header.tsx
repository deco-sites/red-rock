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
  courses?: string[];
}

export default function HeaderLandingPage({ title = "Capy", logoImage, socialIcons, courses }: Props) {
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
          <nav class="flex mr-5 gap-3">
            {courses?.map((course) => (
              <span>{course}</span>
            ))}
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
