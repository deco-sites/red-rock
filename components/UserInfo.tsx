import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface ImagePlan {
  image?: ImageWidget;
  planName?: string;
  userEmail?: string;
  expirateDate?: string;
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f";

export default function UserInfo({
  planName = "Premium",
  userEmail = "sL5k0@example.com",
  expirateDate = "10/10/2024",
  image = DEFAULT_IMAGE,
}: ImagePlan) {
  return (
    <div
      class={`flex border-b-primary border-b-4 pb-4 pt-6 px-2 placeholder-slate-700 gap-4 mx-auto items-center`}
    >
      <div class="flex flex-col gap-1 bg-primary px-1 py-2 rounded-[20px] w-[150px] h-[150px] items-center justify-center md:ml-16">
        <Image
          width={100}
          height={100}
          class="object-fit p-1"
          src={image}
          alt="Profile"
          decoding="async"
          loading="lazy"
        />
        <p class={`text-sm md:text-base`}>
          Plano <span class={`lowercase`}>{planName}</span>
        </p>
      </div>
      <div>
        <p>{`E-mail: ${userEmail}`}</p>
        <p>{`Plano: ${planName}`}</p>
        <p>{`Vencimento do plano: ${expirateDate}`}</p>
      </div>
    </div>
  );
}
