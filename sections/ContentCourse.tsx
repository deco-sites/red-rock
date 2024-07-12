import SideBarCourse from "site/components/SideBarCourse.tsx";
import type { Props as IGo } from "site/components/SideBarCourse.tsx";
interface Props {
  /**
   * @description The description of name.
   */
  name?: IGo;
}

const st = "border border-red-500";
export default function Section({ name }: Props) {
  return (
    <div class={`w-full h-full ${st} bg-primary`}>
      <p>{name?.capy || "Capy"}</p>
    </div>
  );
}
