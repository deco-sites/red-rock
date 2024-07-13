import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  /**
   * @description The description of name.
   */
  name?: string;
  image?: ImageWidget;
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f";

export default function CheckoutSection({
  name = "Capy",
  image = DEFAULT_IMAGE,
}: Props) {
  return (
    <div class="w-full h-screen flex justify-center items-center px-2 md:p-0">
      <div
        class={
          "w-full md:w-2/3 h-[500px] border rounded-md border-secondary p-4 flex flex-col"
        }
      >
        <div class="w-full border border-secondary h-[100px]">
          <Image
            width={500}
            height={100}
            class="resized w-full h-full object-cover"
            src={image}
            alt={image}
            decoding="async"
            loading="lazy"
          />
        </div>

        <form>
          <label>Boleto</label>
          <input type="radio" id="boleto" name="boleto" />
        </form>
      </div>
    </div>
  );
}
