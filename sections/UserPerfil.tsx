import UserInfo, { ImagePlan } from "site/components/UserInfo.tsx";
import PlanInfoCard, { IPlanInfoCard } from "site/components/PlanInfoCard.tsx";

interface Props {
  /**
   * @description The description of name.
   */
  title?: string;
  userInfo?: ImagePlan;
  subPlan?: string;
  userPlan: IPlanInfoCard[];
}

export default function Section({
  title = "Meu Perfil",
  userInfo,
  subPlan = "Planos",
  userPlan = [],
}: Props) {
  return (
    <div class="p-6">
      <p
        class={`text-4xl font-bold border-b-4 border-primary pb-5 w-fit px-10 mx-auto md:px-32`}
      >
        {title}
      </p>
      <UserInfo
        expirateDate={userInfo?.expirateDate}
        planName={userInfo?.planName}
        userEmail={userInfo?.userEmail}
        image={userInfo?.image}
        key={userInfo?.userEmail}
      />
      <p class={`text-2xl font-bold w-fit mx-auto mt-6 mb-5`}>{subPlan}</p>
      <div class={`flex flex-wrap gap-8 justify-center`}>
        {userPlan.map((p, i) => (
          <PlanInfoCard
            key={i}
            image={p.image}
            backGroundColor={p.backGroundColor}
            description={p.description}
            subText={p.subText}
            totalPrice={p.totalPrice}
          />
        ))}
      </div>
    </div>
  );
}
