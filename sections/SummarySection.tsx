import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
}

export interface ISummarySection {
  title?: string;
  /** @format textarea */
  description?: string;
  tagline?: string;
  image?: ImageWidget;
  placement?: "left" | "right";
  cta?: CTA[];
  disableSpacing?: {
    top?: boolean;
    bottom?: boolean;
  };
  mainTitle?: string;
}

const PLACEMENT = {
  left: "flex-col md:flex-row-reverse",
  right: "flex-col md:flex-row",
};

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f";

export default function SummarySection({
  description = "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  image = DEFAULT_IMAGE,
  placement = "left",
  disableSpacing,
  mainTitle = "Título",
  cta = [
    { id: "change-me-1", href: "/", text: "Change me" },
    { id: "change-me-2", href: "/", text: "Change me" },
  ],
}: ISummarySection) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm md:px-10">
      <div
        class={`flex justify-center ${
          PLACEMENT[placement]
        } gap-12 md:gap-14 text-left items-center z-10 ${
          disableSpacing?.top ? "" : "pt-10 lg:pt-28"
        } ${disableSpacing?.bottom ? "" : "pb-12 lg:pb-28"}`}
      >
        <div class="w-full md:w-fit rounded-md overflow-hidden">
          <Image
            width={250}
            height={400}
            class="object-cover z-10"
            src={image}
            alt={image}
            decoding="async"
            loading="lazy"
          />
        </div>
        <div class="w-full md:w-2/3 space-y-2 md:space-y-4 md:max-w-xl gap-4 z-10 p-3 md:p-0 md:mb-auto">
          <p class={"text-2xl font-bold text-center"}>{mainTitle}</p>
          <p class="leading-normal">{description}</p>
          <div class="flex gap-3 pt-4 justify-end">
            {cta?.map((item) => (
              <a
                key={item?.id}
                id={item?.id}
                href={item?.href}
                target={item?.href.includes("http") ? "_blank" : "_self"}
                class={`font-normal btn btn-primary `}
              >
                <p class="text-secondary">{item?.text}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
