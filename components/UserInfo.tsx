import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface ImagePlan {
  image?: ImageWidget;
  planName?: string;
  userEmail?: string;
  expirateDate?: string;
}

export default function UserInfo({
  planName = "Premium",
  userEmail = "sL5k0@example.com",
  expirateDate = "10/10/2024",
}: ImagePlan) {
  return (
    <div
      class={`flex border-b-primary border-b-4 pb-4 pt-6 px-2 placeholder-slate-700 gap-4 mx-auto items-center`}
    >
      <div class="flex flex-col gap-5 bg-primary px-1 py-2 rounded-[20px] w-[150px] h-[150px] items-center justify-center md:ml-16">
        <Image
          width={100}
          height={100}
          class="object-fit"
          src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04"
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
