import { ImagesContacts } from "site/components/SideBarCourse.tsx";
import Image from "apps/website/components/Image.tsx";

export interface ICourseCard {
  courseTitle?: string;
  courseImage?: ImagesContacts;
  link: string;
}

export default function CourseCard({
  courseTitle,
  courseImage,
  link,
}: ICourseCard) {
  return (
    <a class={`flex flex-col gap-3 w-fit h-fit mx-auto`} href={link}>
      <Image
        width={250}
        height={250}
        class="object-fit z-10 rounded-[20px] border-primary border-4"
        src={courseImage?.image || ""}
        alt={courseTitle}
        decoding="async"
        loading="lazy"
      />
      <p class={"btn bg-primary rounded-md text-xl"}>{courseTitle}</p>
    </a>
  );
}
