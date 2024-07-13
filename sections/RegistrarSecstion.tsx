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
    <div
      class="grid items-center justify-center mx-auto mt-[250px] space-x-2 w-[400px] h-[500px] border-[5px] 
    border-primary rounded-[35px]"
    >
      <Image
        width={40}
        height={40}
        class="grid items-center justify-center mx-auto my-auto space-x-2 "
        src={image}
        alt={description}
        decoding="async"
        loading="lazy"
      />

      <p class="grid items-center justify-center mt-[40px]"> {title} </p>

      <form class="grid items-center justify-center ">
        <label for="email">Email</label>
        <input
          class="space-x-2 rounded-[10px]"
          style="display: block;"
          id="email"
          type="email"
          name="email"
          placeholder=" Digite seu email"
        />

        <label for="password">Senha</label>
        <input
          class="rounded-[10px]"
          style="display: block;"
          id="password"
          type="password"
          name="password"
          placeholder=" Digite sua senha"
        />

        <label for="password">Confirmar senha</label>
        <input
          class="rounded-[10px]"
          style="display: block;"
          id="password"
          type="password"
          name="password"
          placeholder=" Redigite sua senha"
        />

        <button class="btn btn-sm btn-primary grid items-center justify-center mx-auto mt-[20px] rounded-[10px] w-[200px]">
          Registrar
        </button>
        <a class="grid items-center justify-center">Login</a>
      </form>
    </div>
  );
}
