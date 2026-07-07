import { ToggleGroup, ToggleGroupItem } from "../../../../components/ui/toggle-group";

const categories = [
  {
    value: "fnb",
    label: ["F&B / 식음", "료"],
    imageSrc: "/background-3.svg",
    imageAlt: "F&B category",
  },
  {
    value: "store",
    label: ["Store / 매", "장"],
    imageSrc: "/background.svg",
    imageAlt: "Store category",
  },
  {
    value: "tutor",
    label: ["Tutor / 과", "외"],
    imageSrc: "/background-2.svg",
    imageAlt: "Tutor category",
  },
  {
    value: "all",
    label: ["All / 전체"],
    imageSrc: "/background-1.svg",
    imageAlt: "All category",
  },
];

export const JobCategoryFilterSection = (): JSX.Element => {
  return (
    <section
      aria-label="Job category filter"
      className="relative w-full py-2"
    >
      <div className="w-full overflow-x-auto">
        <ToggleGroup
          type="single"
          defaultValue="all"
          aria-label="Select job category"
          className="flex min-w-max items-start justify-between gap-6 px-1"
        >
          {categories.map((category) => (
            <ToggleGroupItem
              key={category.value}
              value={category.value}
              aria-label={category.label.join(" ")}
              className="h-auto min-w-[72px] flex-col gap-2 rounded-none bg-transparent p-0 text-[#5b4137] hover:bg-transparent hover:text-[#5b4137] data-[state=on]:bg-transparent data-[state=on]:text-[#5b4137]"
            >
              <img
                className="h-14 w-14 shrink-0"
                alt={category.imageAlt}
                src={category.imageSrc}
              />
              <span className="text-center [font-family:'Be_Vietnam_Pro',Helvetica] text-base font-normal leading-5 tracking-[0] text-[#5b4137]">
                {category.label.map((line, index) => (
                  <span key={`${category.value}-${index}`}>
                    {line}
                    {index < category.label.length - 1 && <br />}
                  </span>
                ))}
              </span>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    </section>
  );
};