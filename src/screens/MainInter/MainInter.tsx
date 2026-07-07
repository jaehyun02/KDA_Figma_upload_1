import { Button } from "../../components/ui/button";
import { GlobalVisaModeBannerSection } from "./sections/GlobalVisaModeBannerSection";
import { JobCategoryFilterSection } from "./sections/JobCategoryFilterSection";
import { JobListingCardsSection } from "./sections/JobListingCardsSection";
import { PrimaryAppBarSection } from "./sections/PrimaryAppBarSection";
import { PrimaryBottomNavigationSection } from "./sections/PrimaryBottomNavigationSection";
import { RecommendedJobsIntroSection } from "./sections/RecommendedJobsIntroSection";

export const MainInter = (): JSX.Element => {
  return (
    <main className="w-full min-w-[390px] bg-[#f8f9fa]">
      <div className="relative mx-auto flex w-full flex-col bg-[#f8f9fa] shadow-[0px_25px_50px_-12px_#00000040]">
        <header className="w-full bg-[#f8f9fa]">
          <PrimaryAppBarSection />
        </header>
        <section className="flex w-full flex-col gap-4 px-0 pb-[110px] pt-4">
          <GlobalVisaModeBannerSection />
          <JobCategoryFilterSection />
          <RecommendedJobsIntroSection />
          <JobListingCardsSection />
        </section>
        <div className="pointer-events-none fixed bottom-[110px] right-6 z-40">
          <Button
            type="button"
            className="pointer-events-auto h-auto rounded-full bg-[#ff5c00] px-5 py-3.5 text-[#521800] shadow-[0px_8px_10px_-6px_#0000001a,0px_20px_25px_-5px_#0000001a] hover:bg-[#ff5c00]/90"
          >
            <span className="flex items-center gap-2">
              <img
                className="relative shrink-0"
                alt="Container"
                src="/container-3.svg"
              />
              <span className="[font-family:'Be_Vietnam_Pro',Helvetica] text-center text-sm font-semibold leading-5 tracking-[0] whitespace-nowrap">
                WRITE
              </span>
            </span>
          </Button>
        </div>
        <footer className="fixed bottom-0 left-0 z-30 w-full bg-[#f8f9fa]">
          <PrimaryBottomNavigationSection />
        </footer>
      </div>
    </main>
  );
};
