import { Button } from "../../../../components/ui/button";

const actionButtons = [
  {
    alt: "Menu",
    src: "/button-1.svg",
    className: "h-6 w-6",
  },
  {
    alt: "Search",
    src: "/button-3.svg",
    className: "h-6 w-6",
  },
];

export const PrimaryAppBarSection = (): JSX.Element => {
  return (
    <header className="w-full bg-[#f8f9fa] px-4 py-3">
      <div className="grid w-full grid-cols-[24px_minmax(0,1fr)_auto_auto] items-center gap-4">
        <Button
          variant="ghost"
          type="button"
          className="h-auto w-6 min-w-0 p-0 hover:bg-transparent"
          aria-label={actionButtons[0].alt}
        >
          <img
            className={actionButtons[0].className}
            alt={actionButtons[0].alt}
            src={actionButtons[0].src}
          />
        </Button>
        <div className="min-w-0">
          <h1 className="[font-family:'Be_Vietnam_Pro',Helvetica] text-base font-semibold leading-6 tracking-[-0.40px] text-[#ff5c00] whitespace-nowrap">
            AlbaMon
          </h1>
        </div>
        <Button
          variant="ghost"
          type="button"
          className="h-auto rounded-full border border-[#e4beb14c] bg-[#edeeef] px-3 py-1 hover:bg-[#e6e7e8]"
          aria-label="Change language"
        >
          <span className="flex items-center gap-0.5">
            <img className="h-4 w-4 flex-none" alt="Margin" src="/margin.svg" />
            <span className="[font-family:'Be_Vietnam_Pro',Helvetica] text-base font-semibold leading-6 text-[#191c1d]">
              EN
            </span>
          </span>
        </Button>
        <Button
          variant="ghost"
          type="button"
          className="h-auto w-6 min-w-0 p-0 hover:bg-transparent"
          aria-label={actionButtons[1].alt}
        >
          <img
            className={actionButtons[1].className}
            alt={actionButtons[1].alt}
            src={actionButtons[1].src}
          />
        </Button>
      </div>
    </header>
  );
};
