import { Button } from "../../../../components/ui/button";

const introContent = {
  title: "Recommended for You",
  subtitle: "회원님을 위한 맞춤 추천",
  actionLabel: "View All",
  actionIconSrc: "/container-7.svg",
  actionIconAlt: "View all",
};

export const RecommendedJobsIntroSection = (): JSX.Element => {
  return (
    <section className="w-full border-t border-[#e7e7e7] bg-white px-4 py-3">
      <div className="flex w-full items-center justify-between gap-4">
        <header className="flex min-w-0 flex-col items-start">
          <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-base font-semibold leading-6 tracking-[0] text-[#191c1d]">
            {introContent.title}
          </h2>
          <p className="[font-family:'WenQuanYi_Zen_Hei-Medium',Helvetica] text-base font-medium leading-6 tracking-[0] text-[#5b4137]">
            {introContent.subtitle}
          </p>
        </header>
        <Button
          type="button"
          variant="ghost"
          className="h-auto shrink-0 gap-1 p-0 hover:bg-transparent"
        >
          <span className="[font-family:'Be_Vietnam_Pro',Helvetica] text-base font-semibold leading-6 tracking-[0] text-center text-[#a73a00]">
            {introContent.actionLabel}
          </span>
          <img
            className="h-4 w-4 shrink-0"
            alt={introContent.actionIconAlt}
            src={introContent.actionIconSrc}
          />
        </Button>
      </div>
    </section>
  );
};
