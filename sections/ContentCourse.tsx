import SideBarCourse from "site/components/SideBarCourse.tsx";
import type { Props as IGo } from "site/components/SideBarCourse.tsx";
interface Props {
  /**
   * @description The description of name.
   */
  name?: IGo;
}

export default function Section({ name }: Props) {
  return (
    <div class={`w-full h-full flex`}>
      <SideBarCourse capy={name?.capy} />
    </div>
  );
}
