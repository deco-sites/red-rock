import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  /**
   * @description The description of name.
   */
  name?: string;
  image?: ImageWidget;
  link?: string;
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f";

export default function CheckoutSection({
  image = DEFAULT_IMAGE,
  link = "/courses",
}: Props) {
  return (
    <div class="w-full h-screen flex justify-center items-center px-2 md:p-0">
      <div
        class={
          "w-full md:w-2/3 h-[500px] border rounded-md border-secondary p-4 flex flex-col gap-4 justify-between"
        }
      >
        <div class="w-full h-[100px] ">
          <Image
            width={500}
            height={150}
            class="resized w-full h-full object-contain"
            src={image}
            alt={image}
            decoding="async"
            loading="lazy"
          />
        </div>

        <form class="flex flex-col gap-4">
          <div class="flex gap-5 mx-auto p-2 w-fit">
            <label class={"flex gap-2"}>
              Cartão
              <input
                type="radio"
                id="cartao"
                name="pagamento"
                value={"cartao"}
              />
            </label>
            <label class={"flex gap-2"}>
              Boleto
              <input
                type="radio"
                id="boleto"
                name="pagamento"
                value={"boleto"}
              />
            </label>
            <label class={"flex gap-2"}>
              Pix
              <input type="radio" id="pix" name="pagamento" value={"pix"} />
            </label>
          </div>
          <div class="flex flex-col gap-3">
            <label class="flex gap-3 items-center w-full justify-between">
              Número do Cartão
              <input type={"text"} class={"text-black px-2 py-1 w-2/3"} />
            </label>
            <label class="flex gap-3 items-center  w-full justify-between">
              Nome do titular
              <input type={"text"} class={"text-black px-2 py-1  w-2/3"} />
            </label>
          </div>
        </form>

        <a
          href={link}
          class="text-xl font-bold text-secondary btn mt-auto w-fit mx-auto bg-primary"
        >
          Finalizar Compra
        </a>
      </div>
    </div>
  );
}
