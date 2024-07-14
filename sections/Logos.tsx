export interface Logo {
  titleBrands?: string;
}

export interface Props {
  title?: string;
  logos?: Logo[];
}

const IMG_PLACEHODLER = Array(30).fill(0).map(() => ({
  titleBrands: "Lorem Ipsom"
}));

export default function Logos({
  title = "Edit this heading however you want",
  logos = IMG_PLACEHODLER,
}: Props) {
  const slideContent = (
    <div class="flex items-center gap-20">
      {logos?.map((logo) => {
        return (
          <p class="text-4xl font-bold uppercase">{logo.titleBrands}</p>
        );
      })}
    </div>
  );
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 py-6 lg:py-14">
      <div class="flex flex-col gap-12">
        <p class="text-center text-lg">{title}</p>
        <div class="relative w-full overflow-hidden h-11">
          <div class="animate-sliding absolute top-0 left-0 flex flex-nowrap h-11">
            {slideContent}
          </div>
        </div>
      </div>
    </div>
  );
}
