export interface Props {
  /**
   * @description The description of name Go.
   */
  capy?: string;
}

const st = "border border-red-500";

export default function SideBarCourse({ capy = "Tuffy" }: Props) {
  return (
    <div class={`w-[200px] h-[500px] ${st} rounded-[20px]`}>
      <p class="text-xl text-primary font-semibold mx-auto text-center">
        Próximos eventos
      </p>
      <ul>
        <li>Tuff</li>
        <li>Tuff</li>
        <li>Tuff</li>
        <li>Tuff</li>
        <li>{capy}</li>
      </ul>
    </div>
  );
}
