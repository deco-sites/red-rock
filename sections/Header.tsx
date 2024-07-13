import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";

export interface CTA {
  image: ImageWidget;
  href?: string;
}

export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    links: {
      label?: string;
      url?: string;
    }[];
    buttons: CTA[];
  };
}

export default function Header({
  logo = {
    src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  navigation = {
    links: [
      { label: "Home", url: "/" },
      { label: "About us", url: "/" },
      { label: "Princing", url: "/" },
      { label: "Contact", url: "/" },
    ],
    buttons: [],
  },
}: Nav) {
  return (
    <>
      <div class="h-28"></div>
      <nav
        class={`drawer drawer-end fixed top-0 w-full z-50 bg-primary text-secondary`}
      >
        <input id="mobile-drawer-nav" type="checkbox" class="drawer-toggle" />

        {/* main content */}
        <div
          class={`drawer-content container lg:px-0 px-4 flex gap-8 items-center justify-between py-4 `}
        >
          <a href="/">
            <Image src={logo.src || ""} width={67} height={67} alt={logo.alt} />
          </a>
          <div
            id="navContainer"
            class={`hidden items-center justify-between lg:flex w-full pr-2.5`}
          >
            <div
              id="navItemsContainer"
              class={`relative flex gap-10 items-center py-2 pr-8 `}
            >
              <div
                id="sharedHover"
                class="bg-primary rounded-full absolute -z-10 opacity-0 transition-all duration-300 ease-in-out"
              ></div>
              <ul class="flex gap-10">
                {navigation.links.map((link) => (
                  <li>
                    <a
                      href={link.url}
                      aria-label={link.label}
                      class="link no-underline text-secondary py-2.5 px-3.5 rounded-full transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ul class="flex gap-3">
            {navigation.buttons?.map((item) => (
              <a
                href={item?.href ?? "#"}
                target={item?.href?.includes("http") ? "_blank" : "_self"}
                class={`font-normal text-secondary font-medium rounded-full min-h-10 text-lg hover:bg-secondary hover:text-primary `}
              >
                <Image width={67} src={item.image || ""} />
              </a>
            ))}
          </ul>

          <label
            htmlFor="mobile-drawer-nav"
            class="flex lg:hidden btn btn-ghost drawer-button"
          >
            <Icon id="Bars3" size={24} strokeWidth={0.1} />
          </label>
        </div>

        {/* sidebar */}
        <aside class="drawer-side z-50">
          {/* Close when clicking on overlay */}
          <label
            htmlFor="mobile-drawer-nav"
            aria-label="close sidebar"
            class="drawer-overlay"
          />

          <div class="flex flex-col gap-8 min-h-full w-80 bg-accent text-secondary p-4 ">
            <div>
              <ul class="menu">
                {navigation?.links.map((link) => (
                  <li>
                    <a
                      href={link.url}
                      aria-label={link.label}
                      class="no-underline text-secondary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </nav>
    </>
  );
}
