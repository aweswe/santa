const partners = [
  "Tata Group",
  "Reliance Industries",
  "Infosys",
  "Wipro",
  "HCL Technologies",
  "Tech Mahindra",
  "Bajaj Auto",
  "Maruti Suzuki",
  "Asian Paints",
  "Godrej",
  "ITC Limited",
  "Hindustan Unilever",
];

export const PartnersMarquee = () => {
  return (
    <section className="py-12 bg-secondary/30 border-y border-border overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-8 md:px-12 py-4 mx-2 border border-border/50 rounded-lg bg-background/50"
            >
              <span className="text-lg md:text-xl font-display font-bold text-foreground/70 whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
