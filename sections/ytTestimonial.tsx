import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Post {
  title: string;
  author: string;
  video: string;
  tags: string[];
}

export interface Props {
  title?: string;
  description?: string;
  posts?: Post[];
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

export default function YtTestimonial({
  title = "Here's a component for you to showcase your blogposts",
  description = "This subheading is fully editable, remember?",
  posts = [
    {
      title: "Title of blogpost #1",
      author: "Name of the author",
      // material:
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      // image: DEFAULT_IMAGE,
      video: "",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      title: "Title of blogpost #1",
      author: "Name of the author",
      // material:
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      // image: DEFAULT_IMAGE,
      video: "",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      title: "Title of blogpost #1",
      author: "Name of the author",
      // material:
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      // image: DEFAULT_IMAGE,
      video: "",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
  ],
}: Props) {
  return (
    <div class="w-screen mx-auto mb-16">
      <div class="w-screen">
        <div class="flex flex-col lg:flex-row gap-4 justify-center items-center">
          <div class="p-10">
            <h2 class="text-5xl leading-snug text-center font-bold text-primary">
              {title}
            </h2>
            <p class="text-3xl leading-snug text-center font-bold text-primary">
              {description}
            </p>
          </div>
        </div>
        <div class="flex flex-wrap gap-8 items-center justify-center">
          {posts?.map((post) => (
            <div class="border border-secondary rounded-lg overflow-hidden w-[477px]">
              {post.video && (
                <div>
                  <IframeLoader
                    videoLink={post.video}
                    preload={false}
                    width={477}
                    height={311}
                  />
                </div>
              )}
              <div class="p-6 ">
                <div class="w-[477px]">
                  <h3 class="text-2xl uppercase h-20 py-2">{post.title}</h3>
                </div>
                <div class="flex flex-wrap gap-2 pt-2">
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
                <div class="flex flex-wrap gap-2">
                  {post.tags?.map((tag) => (
                    <div class="badge badge-lg badge-primary text-xs">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
