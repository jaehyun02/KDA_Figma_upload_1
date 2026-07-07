import { Card, CardContent } from "../../../../components/ui/card";

const bannerAssets = {
  badgeIcon: "/container-3.svg",
  backgroundShape: "/container-10.svg",
  statusIcon: "/container-8.svg",
};

export const GlobalVisaModeBannerSection = (): JSX.Element => {
  return (
    <section className="w-full">
      <Card className="relative w-full overflow-hidden rounded-[28px] border-0 bg-[#ff5c00] shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a]">
        <CardContent className="relative flex min-h-[122px] flex-col items-start gap-1 p-5">
          <img
            className="pointer-events-none absolute -right-4 -top-4 h-[106px] w-[100px] select-none"
            alt=""
            aria-hidden="true"
            src={bannerAssets.backgroundShape}
          />
          <header className="relative z-10 flex w-full items-center gap-2">
            <img
              className="h-auto w-auto shrink-0"
              alt=""
              aria-hidden="true"
              src={bannerAssets.badgeIcon}
            />
            <p className="opacity-90 [font-family:'Be_Vietnam_Pro',Helvetica] text-[11px] font-semibold leading-[16.5px] tracking-[1.10px] text-[#521800]">
              GLOBAL MODE ON
            </p>
          </header>
          <div className="relative z-10 flex w-full flex-col items-start">
            <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-2xl font-bold leading-[30px] text-[#521800]">
              D-2 Student Visa
            </h2>
          </div>
          <div className="relative z-10 flex w-full items-end justify-between gap-4">
            <p className="max-w-[240px] opacity-90 [font-family:'Be_Vietnam_Pro',Helvetica] text-sm font-medium leading-5 text-[#521800]">
              Matching international-friendly jobs
            </p>
            <img
              className="mb-0.5 mr-1 h-7 w-5 shrink-0"
              alt=""
              aria-hidden="true"
              src={bannerAssets.statusIcon}
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
