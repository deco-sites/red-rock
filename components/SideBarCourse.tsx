import { ImageWidget, TextArea } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface IEvents {
  mainText?: string;
  link?: string;
  textLink?: string;
}

export interface ImagesContacts {
  image?: ImageWidget;
  link?: string;
}

export interface Props {
  events?: IEvents[];
  titleDesc?: string;
  description?: TextArea;
  contatTitle?: string;
  contacts?: ImagesContacts[];
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f";

export default function SideBarCourse({
  events = [],
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm",
  titleDesc = "Title of description",
  contacts = [],
  contatTitle = "Dúvidas",
}: Props) {
  return (
    <div
      class={`flex w-[320px] rounded-[10px] flex-col gap-2 bg-black px-2 py-3 justify-around pb-4 max-h-[600px] md:w-[400px]`}
    >
      <div class={`flex flex-col gap-2`}>
        <p class="text-xl text-primary font-semibold mx-auto text-center">
          Próximos eventos
        </p>
        <ul class={`w-full flex flex-col gap-1 max-h-[250px] overflow-auto`}>
          {events.map((e) => (
            <li
              class={
                "w-11/12 flex flex-col border-b-2 border-primary pb-2 pt-1 px-2 mx-auto"
              }
            >
              <p class={"font-semibold"}>
                {e.mainText || "Workshop 20/08/2024"}
              </p>
              <a href={e.link || "https://deco.cx/"}>{e.textLink || "Link"}</a>
            </li>
          ))}
        </ul>
      </div>
      <div class={`flex flex-col gap-2 px-2`}>
        <p class="text-xl text-primary font-semibold mx-auto text-center">
          {titleDesc}
        </p>
        <p class="text-secondary mx-auto text-left max-h-[150px] overflow-auto">
          {description}
        </p>
      </div>

      <div class={`flex flex-col gap-2`}>
        <p class="text-xl text-primary font-semibold mx-auto text-center">
          {contatTitle}
        </p>
        <div
          class={`flex gap-2 w-full overflow-auto justify-around px-2 mt-auto`}
        >
          {contacts.map((c) => (
            <a href={c.link || "https://deco.cx/"} target={"_blank"}>
              <Image
                width={50}
                height={50}
                class="object-fit z-10"
                src={c.image || DEFAULT_IMAGE}
                alt={c.link || "Default Logo"}
                decoding="async"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
