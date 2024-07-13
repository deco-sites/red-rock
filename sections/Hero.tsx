import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface HeroBlocks {
  label: string;
  image: ImageWidget;
}

export interface Props {
  imageCard: HeroBlocks[];
}

export default function HeroFlats({ imageCard }: Props) {
  return (
    <div class="md:w-[1300px] flex  justify-center items-center  h-[600px] mx-auto">
      {imageCard.map((item, index) => (
        <div
          key={index}
          class="box w-full h-full sm:w-1/2 md:w-1/3 lg:w-1/4 relative group overflow-hidden rounded-md shadow-md transition-transform duration-1000 ease-in-out hover:w-[1024px] mt-10"
        >
          <Image
            width={1024}
            height={500}
            class="absolute inset-0  px-3 w-full h-full object-cover transition-transform duration-1000 ease-in-out hover:scale-110"
            src={item.image}
            alt={item.label}
            loading="lazy"
          />
          <span class="absolute inset-0 flex items-center justify-center text-center text-white text-2xl font-bold  transition-opacity duration-1000 ease-in-out group-hover:opacity-100 group-hover:text-5xl">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}