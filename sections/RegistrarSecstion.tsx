import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  /**
   * @description The description of name.
   */
  title: string;
  image?: ImageWidget;
  description: string;
}

export default function Section({ title = "Capy", image, description }: Props) {
  return (
    <div class="flex items-center justify-center w-screen h-screen">
      <div
        class="flex flex-col items-center justify-center mx-6 md:mx-auto my-auto  md:w-[400px] h-[650px] md:border-2 
      md:border-primary rounded-3xl"
      >
        <div class="flex p-8 items-center justify-center  ">
          <Image
            width={40}
            height={40}
            class="mx-auto my-auto pr-4"
            src={image || ""}
            alt={description}
            decoding="async"
            loading="lazy"
          />

          <p class="font-semibold text-primary text-4xl"> {title} </p>
        </div>

        <form class="items-center justify-center p-8 ">
          <label class="text-xl" for="email">
            Email
          </label>
          <input
            class=" rounded-[10px] w-full  text-neutral p-3  mt-2 mb-5 text-base"
            id="email"
            type="email"
            name="email"
            placeholder=" Digite seu email"
          />

          <label for="password" class="text-xl ">
            Senha
          </label>
          <input
            class="rounded-[10px] w-full text-neutral mt-2 mb-5 p-3 text-base"
            id="password"
            type="password"
            name="password"
            placeholder=" Digite sua senha"
          />

          <label for="password" class="text-xl mt-5">
            Confirme sua senha
          </label>
          <input
            class="rounded-[10px] w-full text-neutral mt-2 p-3 text-base"
            id="password"
            type="password"
            name="password"
            placeholder=" Redigite sua senha"
          />
        </form>

        <a
          href="/courses"
          class="btn btn-sm btn-primary grid items-center justify-center mx-auto mt-[20px]
          rounded-[10px] w-[200px] text-secondary text-[20px]"
        >
          Registrar
        </a>

        <a
          href="./login"
          class="grid items-center justify-center text-secondary p-4"
        >
          Login
        </a>
      </div>
    </div>
  );
}
