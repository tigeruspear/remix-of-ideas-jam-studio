import { MapPin, Calendar, Clock } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const workshops = [
  {
    number: "01",
    title: "Lean Start-up Concept Workshop",
    description: "Learn the fundamentals of building a successful start-up with minimal resources",
    date: "15 Feb 2026",
    time: "9:00 AM - 11:00 AM",
    fullDescription: "This workshop covers the core principles of the lean start-up methodology, including validated learning, build-measure-learn feedback loops, and minimum viable products (MVPs). You'll learn how to test your business hypotheses quickly and efficiently.",
  },
  {
    number: "02",
    title: "Lean Canvas Workshop",
    description: "Master the art of creating effective business model canvases",
    date: "15 Feb 2026",
    time: "11:30 AM - 1:30 PM",
    fullDescription: "Dive deep into the Lean Canvas framework, a one-page business plan template that helps you deconstruct your idea into key assumptions. Learn how to identify problems, solutions, key metrics, and unique value propositions.",
  },
  {
    number: "03",
    title: "Pitching Workshop",
    description: "Develop compelling presentations that win over investors and judges",
    date: "15 Feb 2026",
    time: "2:30 PM - 4:30 PM",
    fullDescription: "Master the art of pitching your startup idea. This workshop covers storytelling techniques, slide design best practices, handling Q&A sessions, and tips for delivering a confident and memorable pitch.",
  },
];

const WorkshopsSection = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState<typeof workshops[0] | null>(null);

  return (
    <section id="workshops" className="py-20 md:py-28 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Bootcamp Workshops
          </h2>
          
          {/* Event details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-sm border border-border/50">
              <Calendar className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-card-foreground">15 Feb 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-sm border border-border/50">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-card-foreground">NTU</span>
            </div>
          </div>
        </div>

        <ScrollArea className="max-w-2xl mx-auto h-[400px] pr-4">
          <div className="space-y-4">
            {workshops.map((workshop) => (
              <button
                key={workshop.number}
                onClick={() => setSelectedWorkshop(workshop)}
                className="group w-full text-left bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 border border-border/50 flex gap-6 items-start cursor-pointer hover:scale-[1.02]"
              >
                {/* Number */}
                <div className="text-4xl md:text-5xl font-display font-bold text-accent/30 group-hover:text-accent/50 transition-colors">
                  {workshop.number}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display font-bold text-lg text-card-foreground mb-2">
                    {workshop.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {workshop.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Workshop Detail Dialog */}
      <Dialog open={!!selectedWorkshop} onOpenChange={() => setSelectedWorkshop(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-xl flex items-center gap-3">
              <span className="text-accent/50 text-2xl">{selectedWorkshop?.number}</span>
              {selectedWorkshop?.title}
            </DialogTitle>
            <DialogDescription className="sr-only">
              Workshop details
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 mt-4">
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-full">
                <Calendar className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">{selectedWorkshop?.date}</span>
              </div>
              <div className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-full">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">{selectedWorkshop?.time}</span>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              {selectedWorkshop?.fullDescription}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WorkshopsSection;