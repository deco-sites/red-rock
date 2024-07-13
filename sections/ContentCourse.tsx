import SideBarCourse from "site/components/SideBarCourse.tsx";
import type { Props as IGo } from "site/components/SideBarCourse.tsx";
import CourseCard, { ICourseCard } from "site/components/CourseCard.tsx";
interface Props {
  /**
   * @description The description of name.
   */
  content?: IGo;
  classes?: ICourseCard[];
}

export default function Section({ content, classes = [] }: Props) {
  return (
    <div
      class={`flex w-full h-full flex-col-reverse px-6 py-10 gap-5 md:flex-row mb-auto`}
    >
      <SideBarCourse
        titleDesc={content?.titleDesc || "Title"}
        description={content?.description || "Lorem Ipsum"}
        events={content?.events || []}
        key={content?.description || "Lorem Ipsum Key"}
        contacts={content?.contacts || []}
        contatTitle={content?.contatTitle || "Contact"}
      />
      <div class={`w-full flex flex-wrap px-6 gap-7`}>
        {classes.map((cls) => (
          <CourseCard
            key={cls.courseTitle}
            courseTitle={cls.courseTitle}
            courseImage={cls.courseImage}
            link={cls.link || "/video"}
          />
        ))}
      </div>
    </div>
  );
}
