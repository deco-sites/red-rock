import SideBarCourse from "site/components/SideBarCourse.tsx";
import type { Props as IGo } from "site/components/SideBarCourse.tsx";
interface Props {
  /**
   * @description The description of name.
   */
  content?: IGo;
}

export default function Section({ content }: Props) {
  return (
    <div class={`w-full h-full flex`}>
      <SideBarCourse
        titleDesc={content?.titleDesc}
        description={content?.description}
        events={content?.events}
        key={content?.description}
      />
    </div>
  );
}
