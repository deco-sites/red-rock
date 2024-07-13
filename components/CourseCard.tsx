import Image from "apps/website/components/Image.tsx";

export interface ICourseCard {
  courseTitle?: string;
  courseImage?: string;
  link?: string;
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f";

export default function CourseCard({
  courseTitle = "Curso",
  courseImage = DEFAULT_IMAGE,
  link = "/video",
}: ICourseCard) {
  return (
    <a class={`flex flex-col gap-3 w-fit h-fit mx-auto`} href={link}>
      <Image
        width={250}
        height={250}
        class="object-fit z-10 rounded-[20px] border-primary border-4"
        src={courseImage}
        alt={courseTitle}
        decoding="async"
        loading="lazy"
      />
      <p class={"btn bg-primary rounded-md text-xl"}>{courseTitle}</p>
    </a>
  );
}
