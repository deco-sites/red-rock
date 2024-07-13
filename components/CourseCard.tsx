import { ImagesContacts } from "site/components/SideBarCourse.tsx";
import Image from "apps/website/components/Image.tsx";

export interface ICourseCard {
  courseTitle?: string;
  courseImage?: ImagesContacts;
  onClick: () => void;
}

export default function CourseCard({
  courseTitle,
  courseImage,
  onClick,
}: ICourseCard) {
  return (
    <div class={`flex flex-col gap-3 w-fit h-fit mx-auto`}>
      <Image
        width={250}
        height={250}
        class="object-fit z-10 rounded-[20px] border-primary border-4"
        src={courseImage?.image}
        alt={courseTitle}
        decoding="async"
        loading="lazy"
      />
      <button class={"btn bg-primary rounded-md text-xl"} onClick={onClick}>
        {courseTitle}
      </button>
    </div>
  );
}
