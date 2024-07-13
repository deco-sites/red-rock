import { useSection } from "deco/hooks/useSection.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { AppContext } from "../apps/site.ts";

/**
 * @title {{text}}
 */
export interface MenuItem {
  text: string;
  href?: string;
}

export interface IImage {
  url: ImageWidget;
  alt?: string;
}

export interface Props {
  Logo?: IImage;
  Title?: string;
  DefaultUserImage?: IImage;
  MenuItems?: MenuItem[];

  /** @hide true */
  displayMenu?: boolean;
}
const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f";

const defaultImage: IImage = {
  url: DEFAULT_IMAGE,
  alt: "Default Logo",
};
export const loader = async (props: Props, req: Request, _ctx: AppContext) => {
  const form = await req.formData().catch(() => null);
  return {
    ...props,
    removeForm: form?.get("modalState") === "on",
  };
};

export default function HtmxHeader({
  Logo,
  Title = "Título",
  DefaultUserImage = defaultImage,
  MenuItems = [],
  displayMenu,
  removeForm,
}: Awaited<ReturnType<typeof loader>>) {
  if (removeForm) return <div></div>;
  if (displayMenu) {
    return (
      <ul class="absolute top-16 left-0 flex justify-end w-full ">
        <div class="bg-primary-content rounded-xl p-4 min-w-40 z-50 flex flex-col">
          {MenuItems.map((item, index) => (
            <a
              href={item.href || ""}
              class="border-b last:border-0 border-primary p-3 transition-transform duration-300 hover:scale-110"
            >
              {item.text}
            </a>
          ))}
        </div>
      </ul>
    );
  }

  return (
    <header class="bg-primary">
      <div class="min-h-16 text-secondary flex items-center justify-between px-4 relative max-w-[1440px] mx-auto">
        <div class="flex items-center gap-2">
          {Logo && (
            <div class="h-14">
              <Image
                width={80}
                src={Logo.url}
                alt={Logo?.alt || ""}
                class="h-full"
              />
            </div>
          )}
          <h1 class="text-4xl font-bold">{Title}</h1>
        </div>
        <div class="flex relative">
          {DefaultUserImage && (
            <div class="h-14">
              <Image
                width={56}
                src={DefaultUserImage.url}
                alt={DefaultUserImage.alt || ""}
                class="h-full rounded-full object-cover"
              />
            </div>
          )}
          <label
            hx-trigger="click"
            hx-post={useSection({ props: { displayMenu: true } })}
            hx-target="#modal"
            hx-include="[id=modalState]"
            htmlFor="modalState"
            class="cursor-pointer"
          >
            <svg
              width="56px"
              height="56px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              class="bi bi-three-dots-vertical fill-current text-secondary"
            >
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </label>
          <div id="modal" />
          <input
            name="modalState"
            type="checkbox"
            class="hidden"
            id="modalState"
          />
        </div>
      </div>
    </header>
  );
}
