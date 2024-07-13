import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import { VideoWidget } from "apps/admin/widgets.ts";
import { useSection } from "deco/hooks/useSection.ts";

/**
 * @title {{Title}}
 */
export interface Item {
    Title: string;
    Video?: VideoWidget;
    YoutubeVideo?: string;
    Image?: ImageWidget;
    ImageAlt?: string;
    chosenMidia?: 'Video' | 'Youtube video' | 'Image';

    /** @format rich-text */
    Text?: string;
}

export interface Props {
    items?: Item[];

    /** @hide true */
    selectedContent?: number;

    /** @hide true */
    renderContent?: boolean;
}

export default function ContentSelector({ items, selectedContent = 0, renderContent }: Props) {

    function getYoutubeVideoId(link: string) {
        if (link.includes('embed/')) return link.split('embed/')[1];
        return link.split("v=")[1].split("&")[0];
    }

    const content = items &&
        <div>
            <h2 class="text-4xl font-semibold text-center">{items[selectedContent].Title}</h2>

            {items[selectedContent].chosenMidia == 'Video'
                && items[selectedContent].Video && <div class="max-w-[1000px] max-h-[600px]">
                    <video
                        width="1441"
                        height="720"
                        class="w-full h-full object-cover rounded-xl mt-4"
                        controls
                    >
                        <source src={items[selectedContent].Video} type="video/mp4" />
                        <object data="" width="320" height="240">
                            <embed width="320" height="240" src={items[selectedContent].Video} />
                        </object>
                    </video>
                </div>}

            {items[selectedContent].chosenMidia == 'Youtube video' && items[selectedContent].YoutubeVideo && <div class="h-[60vw] w-[100vw] md:w-[50vw] md:h-[35vw]  xl:w-[1000px] xl:h-[600px]">
                <iframe
                    class="w-full h-full"
                    width="1000"
                    height="1000"
                    src={`https://www.youtube.com/embed/${getYoutubeVideoId(items[selectedContent].YoutubeVideo)}`}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen">
                </iframe>
            </div>}

            {items[selectedContent].chosenMidia == 'Image' && items[selectedContent].Image &&
                <div class="max-h-[600px] overflow-hidden">
                    <Image
                        src={items[selectedContent].Image}
                        alt={items[selectedContent].ImageAlt || ""}
                        width={1000}
                        class="h-full object-cover"
                    />
                </div>}

            {items[selectedContent].Text && <p class="mt-4"
                dangerouslySetInnerHTML={{ __html: items[selectedContent].Text }}
            >
            </p>}
        </div>

    if (renderContent) return content;

    return (
        <section>
            <div class="max-w-[1440px] flex flex-wrap md:flex-nowrap justify-between gap-4 mx-auto">
                <ul class="bg-primary-content min-w-[360px] rounded-xl p-4 flex md:flex-col overflow-x-scroll md:overflow-x-hidden">
                    {items && items.map((item, index) => (
                        <li class={`text-xl p-3 border-b last:border-0 border-primary min-w-64`}>
                            <button
                                hx-trigger="click"
                                hx-get={useSection({ props: { selectedContent: index, renderContent: true } })}
                                hx-target="#content"
                                class="w-full text-left transition-transform duration-300 hover:scale-110"
                            >
                                {item.Title}

                            </button>
                        </li>
                    ))}
                </ul>
                <div id="content">
                    {content}
                </div>
            </div>
        </section>
    )
}
