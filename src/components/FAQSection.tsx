import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const THEME = "#F97A1F";

const faqs = [
  {
    q: "Do I need to form a team before hand?",
    a: "No. Individuals may register on their own and will be matched into teams by the organising committee. If a team has already been formed, members may register together. Teams should consist of 3 to 5 members.",
  },
  {
    q: "What happens if my team has fewer than 3 members?",
    a: "Teams that do not meet the minimum size may be merged with other teams.",
  },
  {
    q: "Do I need to have engineering background to join?",
    a: "No. IdeasJam is open to participants from all disciplines and experience levels, including beginners. The programme is designed to introduce students to design thinking and entrepreneurial skills through workshops and mentorship. In fact, interdisciplinary teams are strongly encouraged.",
  },
  {
    q: "Can my team with an existing start-up join?",
    a: "Yes, existing start-ups can join and increase their reach! However, registered companies are strictly not allowed.",
  },
  {
    q: "If my team was not selected as a Finalist do I have to attend the Finale and Pitch Practice?",
    a: "Attendance is not mandatory. However, participants are encouraged to attend to support the finalist teams and gain insights into pitching and presentation.",
  },
  {
    q: "Is the creation of a prototype required?",
    a: "No, as IdeasJam is an Ideathon. We do not require teams to build a working prototype.",
  },
  {
    q: "Will food be provided during the event?",
    a: "Yes, meals and refreshments will be provided for lunch segments.",
  },
  {
    q: "How will mentorship be conducted?",
    a: "After registration, teams will indicate their preferred mentor(s) and be matched on a first-come, first-served basis. Matched teams are required to schedule and meet their mentor at least twice prior to the preliminary round.",
  },
];

export default function FAQSection() {
  return (
    <section id="faqs" className="py-20 scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left: Title block */}
          <div className="max-w-xl">
            <div
              className="inline-flex items-center gap-2 rounded-full border bg-white/60 px-4 py-2 text-sm"
              style={{ borderColor: `${THEME}33` }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: THEME }}
              />
              <span className="font-medium">Frequently asked questions</span>
            </div>

            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              Frequently asked{" "}
              <span style={{ color: THEME }}>questions</span>
            </h2>

            <p className="mt-4 text-muted-foreground">
              Quick answers to the most common queries about IdeasJam 2026. If
              you still need help, feel free to reach out to the organising
              committee.
            </p>

           
          </div>

          {/* Right: Accordion cards */}
          <div className="w-full">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="overflow-hidden rounded-2xl border bg-white/60 shadow-sm"
                  style={{ borderColor: `${THEME}22` }}
                >
                  <AccordionTrigger
                    className={[
                      "px-5 py-4 text-left no-underline hover:no-underline",
                      "data-[state=open]:bg-white/70",
                      // hide default shadcn chevron icon
                      "[&>svg]:hidden",
                    ].join(" ")}
                  >
                    <div className="flex w-full items-center justify-between gap-4">
                      <span className="text-base font-semibold sm:text-lg">
                        {item.q}
                      </span>

                      <span
                        className="flex h-10 w-10 items-center justify-center rounded-full border"
                        style={{
                          borderColor: `${THEME}33`,
                          backgroundColor: `${THEME}1A`, // ~10%
                        }}
                      >
                        <ChevronDown
                          className="h-5 w-5 transition-transform duration-200 data-[state=open]:rotate-180"
                          style={{ color: THEME }}
                        />
                      </span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-5 pb-5 text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
