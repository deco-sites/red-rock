export interface IEvents {
  mainText?: string;
  link?: string;
  textLink?: string;
}

export interface Props {
  /**
   * @description The description of name Go.
   */
  events?: IEvents[];
  description?: string;
  titleDesc?: string;
}

const st = "border border-red-500";

export default function SideBarCourse({
  events = [],
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm",
  titleDesc = "Title of description",
}: Props) {
  return (
    <div class={`w-[400px] h-[500px] ${st} rounded-[10px]`}>
      <p class="text-xl text-primary font-semibold mx-auto text-center">
        Próximos eventos
      </p>
      <ul class={`w-full`}>
        {events.map((e) => (
          <li class={"w-full flex-col"}>
            <p>{e.mainText || "Workshop 20/08/2024"}</p>
            <a href={e.link || "https://deco.cx/"}>{e.textLink || "Link"}</a>
          </li>
        ))}
      </ul>
      <div>
        <p class="text-xl text-primary font-semibold mx-auto text-center">
          {titleDesc}
        </p>
        <p class=" text-secondary mx-auto text-center">{description}</p>
      </div>
    </div>
  );
}
