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
    <div>
      <Image
        width={40}
        height={40}
        class=""
        src={image}
        alt={description}
        decoding="async"
        loading="lazy"
      />
      <p class=""> {title} </p>
      <form>
        <label for="email" class="w-1">
          Email
        </label>
        <input
          style="display: block;"
          id="email"
          type="email"
          name="email"
          placeholder=" Digite seu email"
        />

        <label for="password">Senha</label>
        <input
          style="display: block;"
          id="password"
          type="password"
          name="password"
        />
        <button class="btn btn-sm btn-primary">Login</button>
        <a>Registrar</a>
      </form>
    </div>
  );
}
