import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Feature {
  label: string;
}

export interface Card {
  icone: ImageWidget;
  cardTitle: string;
  featureList: Feature[];
  price: string;
  buttonText: "FREE" | "GET STARTED";
}

export interface Props {
  /**
   
@description The description of name.*/
  title?: string;
  subtitle?: string;
  itemCard: Card[];
}
export default function Section({ title, subtitle, itemCard }: Props) {
  return (
    <div class="bg-accent p-24">
      <div class="md:w-[1300px] mx-auto flex flex-col items-center　">
        <p class="text-4xl text-secondary font-bold text-center">{title}</p>
        <p class="text-xl text-secondary font-medium pt-5 text-center">
          {subtitle}
        </p>
        <div class="flex pt-10 gap-20 justify-center">
          {itemCard.map((item) => (
            <div class=" border border-primary rounded-xl p-8 bg-secondary w-11/12 md:w-72 flex flex-col items-center">
              <Image
                width={80}
                height={80}
                class="w-[80px] h-[80px] object-cover mx-auto"
                src={item.icone}
                alt={item.cardTitle}
                decoding="async"
                loading="lazy"
              />
              <h3 class="text-primary text-2xl font-semibold text-center pt-4">
                {item.cardTitle}
              </h3>
              <ul class="w-full pt-5">
                {item.featureList.map((itemList) => (
                  <li class="text-neutral border-b-2 last:border-0 border-accent leading-loose w-full">
                    {itemList.label}
                  </li>
                ))}
              </ul>
              <p class="text-right text-primary text-4xl font-semibold pt-5">
                {item.price}
              </p>
              <a class="btn btn-primary mt-5">{item.buttonText}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}