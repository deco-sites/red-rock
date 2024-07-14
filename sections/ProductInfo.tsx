import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  href: string;
  text: string;
}

export interface Props {
  title?: string;
  /** @format textarea */
  description?: string;
  image?: ImageWidget;
  cta?: CTA;
  disableSpacing?: {
    top?: boolean;
    bottom?: boolean;
  };
  id?: string;
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f";

export default function ProductInfo({
  title = "Here's an intermediate size heading you can edit",
  description = "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  id = "1",
  image = DEFAULT_IMAGE,
  disableSpacing,
  cta = { href: "/", text: "Change me" },
}: Props) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm" id={id}>
      <div
        class={`flex flex-col gap-12 md:gap-20 text-left items-center z-10 ${
          disableSpacing?.top ? "" : "pt-12 lg:pt-28"
        } ${disableSpacing?.bottom ? "" : "pb-12 lg:pb-28"}`}
      >
        <div class="w-full h-full md:max-h-[350px] border border-secondary rounded-lg overflow-hidden">
          <Image
            width={1300}
            height={350}
            class="object-cover z-10 "
            src={image}
            alt={image}
            decoding="async"
            loading="lazy"
          />
        </div>
        <div class="w-full space-y-2 md:space-y-4 md:max-w-xl gap-4 z-10">
          <p class="text-4xl leading-snug">{title}</p>
          <p class="leading-normal">{description}</p>
          <div class="flex gap-3 pt-4">
            <a
              href={cta.href}
              class="btn btn-primary text-base font-semibold text-secondarybtn-outline"
            >
              {cta.text}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
