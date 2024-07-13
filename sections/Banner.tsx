import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
    title: string;
    backgroundImage: ImageWidget;
}

export default function Banner({ title, backgroundImage }: Props) {
    return <section class="max-w-[1440px] mx-auto my-4 rounded-xl border-4 border-primary min-h-32 overflow-hidden relative flex justify-center items-center">
        <div class="max-h-32 w-full absolute top-0 left-0 -z-50">

            <Image
                width={1440}
                src={backgroundImage}
                alt="background image"
                class="object-cover"
            />
        </div>

        <div class="bg-primary-content bg-opacity-80 min-h-20 rounded-3xl px-8 pt-4">
            <h1 class="text-center text-secondary text-4xl font-bold border-b-4 border-primary">{title}</h1>
        </div>
    </section>
}