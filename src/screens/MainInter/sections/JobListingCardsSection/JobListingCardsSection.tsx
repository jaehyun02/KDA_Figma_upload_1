import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const jobListings = [
  {
    title: "Store Staff / 편의점 스태프",
    company: "GS25 • Gangnam Station",
    pay: "₩11,000",
    paySuffix: "/ hr (시급)",
    schedule: "Mon-Fri | 09:00 - 14:00",
    distance: "1.2km away",
    image: "/job-gs25.svg",
    scheduleIcon: "/container-9.svg",
    badges: [
      {
        label: "VISA OK",
        className:
          "bg-[#d8e2ff] text-[#001a41] hover:bg-[#d8e2ff] border-transparent",
      },
      {
        label: "PART-TIME",
        className:
          "bg-[#e7e8e9] text-[#5b4137] hover:bg-[#e7e8e9] border-transparent",
      },
    ],
  },
  {
    title: "Barista / 카페 스태프",
    company: "A Twosome Place • Sinchon",
    pay: "₩12,500",
    paySuffix: "/ hr (시급)",
    schedule: "Sat-Sun | 13:00 - 19:00",
    distance: "3.8km away",
    image: "/job-twosome.svg",
    scheduleIcon: "/container.svg",
    badges: [
      {
        label: "VISA OK",
        className:
          "bg-[#d8e2ff] text-[#001a41] hover:bg-[#d8e2ff] border-transparent",
      },
      {
        label: "URGENT",
        className:
          "bg-[#ffdbce] text-[#370e00] hover:bg-[#ffdbce] border-transparent",
      },
    ],
  },
  {
    title: "Night Staff / 편의점 야간",
    company: "CU Store • Anam-dong",
    pay: "₩13,800",
    paySuffix: "/ hr (Night Diff.)",
    schedule: "Daily | 22:00 - 03:00",
    distance: "0.5km away",
    image: "/job-cu.svg",
    scheduleIcon: "/container-6.svg",
    badges: [
      {
        label: "VISA OK",
        className:
          "bg-[#d8e2ff] text-[#001a41] hover:bg-[#d8e2ff] border-transparent",
      },
    ],
  },
];

export const JobListingCardsSection = (): JSX.Element => {
  return (
    <section className="relative w-full self-stretch px-4 py-0">
      <div className="flex w-full flex-col items-start gap-4">
        {jobListings.map((job) => (
          <Card
            key={`${job.title}-${job.company}`}
            className="w-full rounded-2xl border border-[#e4beb166] bg-white shadow-[0px_1px_2px_#0000000d]"
          >
            <CardContent className="flex flex-col gap-3 p-4">
              <header className="flex items-start justify-between gap-3">
                <div className="flex flex-wrap items-start gap-2">
                  {job.badges.map((badge) => (
                    <Badge
                      key={badge.label}
                      variant="outline"
                      className={`h-auto rounded-full px-2.5 py-0.5 [font-family:'Be_Vietnam_Pro',Helvetica] text-[10px] font-semibold leading-[15px] tracking-[0.50px] ${badge.className}`}
                    >
                      {badge.label}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-auto w-auto shrink-0 rounded-full p-0 hover:bg-transparent"
                  aria-label="Save job"
                >
                  <img
                    className="block shrink-0"
                    alt="Save job"
                    src="/button.svg"
                  />
                </Button>
              </header>
              <article className="flex items-start gap-4 pb-1">
                <div className="flex h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-[#e4beb133] bg-[#edeeef]">
                  <img
                    src={job.image}
                    alt={job.company}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col items-start gap-0.5">
                  <h3 className="[font-family:'Be_Vietnam_Pro',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#191c1d]">
                    {job.title}
                  </h3>
                  <p className="[font-family:'Be_Vietnam_Pro',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#5b4137]">
                    {job.company}
                  </p>
                  <div className="flex flex-wrap items-baseline gap-1 pt-1.5">
                    <span className="[font-family:'Be_Vietnam_Pro',Helvetica] text-xl font-semibold leading-7 tracking-[0] text-[#a73a00]">
                      {job.pay}
                    </span>
                    <span className="[font-family:'Be_Vietnam_Pro',Helvetica] text-xs font-normal leading-4 tracking-[0] text-[#5b4137]">
                      {job.paySuffix}
                    </span>
                  </div>
                </div>
              </article>
              <footer className="flex items-center justify-between gap-3 border-t border-[#e4beb133] pt-3">
                <div className="flex min-w-0 items-center gap-1">
                  <img
                    className="shrink-0"
                    alt="Schedule"
                    src={job.scheduleIcon}
                  />
                  <span className="[font-family:'Be_Vietnam_Pro',Helvetica] text-[11px] font-medium leading-[16.5px] tracking-[0] text-[#5b4137]">
                    {job.schedule}
                  </span>
                </div>
                <p className="shrink-0 [font-family:'Be_Vietnam_Pro',Helvetica] text-[11px] font-semibold leading-[16.5px] tracking-[0] text-[#5b4137]">
                  {job.distance}
                </p>
              </footer>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
