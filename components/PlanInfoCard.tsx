import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface IPlanInfoCard {
  backGroundColor?: "primary" | "black";
  image?: ImageWidget;
  description?: string[];
  subText?: string;
  totalPrice?: string;
}
const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f";

export default function PlanInfoCard({
  backGroundColor = "primary",
  image = DEFAULT_IMAGE,
  description = [
    "Lorem ipsum",
    "dolor sit amet",
    "consectetur",
    "adipisicing elit.",
  ],
  subText = "",
  totalPrice = "0,00",
}: IPlanInfoCard) {
  return (
    <div
      class={`flex w-[200px] h-[300px] bg-${backGroundColor} rounded-[30px] p-5 flex-col justify-between`}
    >
      <Image
        width={70}
        height={100}
        class="object-cover mx-auto mb-3"
        src={image || ""}
        alt="Plan image"
        decoding="async"
        loading="lazy"
      />
      <ul class="flex flex-col flex-grow">
        {description.map((d) => (
          <li>{d}</li>
        ))}
      </ul>
      <div class={`flex flex-col justify-center items-center gap-2`}>
        <p class={`text-xs w-full text-center`}>{subText}</p>
        <p class={`font-bold`}>{`R$ ${totalPrice}`}</p>
      </div>
    </div>
  );
}
