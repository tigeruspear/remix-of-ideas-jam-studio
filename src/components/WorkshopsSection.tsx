import { MapPin, Calendar, Clock, GraduationCap } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const workshops = [
  {
    number: "01",
    title: "Lean Start-up Concept Workshop",
    description: "Learn the fundamentals of building a successful start-up with minimal resources",
    date: "15 Feb 2026",
    time: "9:00 AM - 11:00 AM",
    location: "NTU LT1A",
    image: "/images/workshop1.jpg", // 请替换为你实际的图片路径
    fullDescription: "This workshop covers the core principles of the lean start-up methodology, including validated learning, build-measure-learn feedback loops, and minimum viable products (MVPs).",
  },
  {
    number: "02",
    title: "Lean Canvas Workshop",
    description: "Master the art of creating effective business model canvases",
    date: "15 Feb 2026",
    time: "11:30 AM - 1:30 PM",
    location: "NTU LT1A",
    image: "/images/workshop2.jpg",
    fullDescription: "Dive deep into the Lean Canvas framework, a one-page business plan template that helps you deconstruct your idea into key assumptions.",
  },
  {
    number: "03",
    title: "Pitching Workshop",
    description: "Develop compelling presentations that win over investors and judges",
    date: "15 Feb 2026",
    time: "2:30 PM - 4:30 PM",
    location: "NTU LT1A",
    image: "/images/workshop3.jpg",
    fullDescription: "Master the art of pitching your startup idea. This workshop covers storytelling techniques and slide design best practices.",
  },
];

const WorkshopsSection = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState<typeof workshops[0] | null>(null);

  return (
    <section id="workshops" className="py-20 bg-[#f4f1ee] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#fde6ad] text-[#f59e0b] px-4 py-1.5 rounded-full border border-[#fcd34d]/50 shadow-sm">
            <GraduationCap className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Learning Opportunities</span>
          </div>
          
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#0f172a] tracking-tight">
            Bootcamp Workshops
          </h2>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 bg-white px-5 py-2 rounded-xl shadow-sm border border-white">
              <Calendar className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-semibold text-gray-700">15 February 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-5 py-2 rounded-xl shadow-sm border border-white">
              <MapPin className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-semibold text-gray-700">NTU LT1A</span>
            </div>
          </div>
        </div>

        {/* List Section - Adjusted for new design */}
        <div className="space-y-6">
          {workshops.map((workshop) => (
            <button
              key={workshop.number}
              onClick={() => setSelectedWorkshop(workshop)}
              className="group w-full flex flex-col md:flex-row items-center bg-white rounded-[40px] p-2 pr-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-orange-100 overflow-hidden"
            >
              {/* Number with Gradient */}
              <div className="flex-shrink-0 w-32 py-8 flex items-center justify-center">
                <span className="text-6xl font-display font-bold bg-gradient-to-b from-orange-300 to-orange-500 bg-clip-text text-transparent opacity-80 group-hover:opacity-100 transition-opacity">
                  {workshop.number}
                </span>
              </div>

              {/* Image Preview */}
              <div className="w-full md:w-48 h-32 overflow-hidden rounded-2xl relative">
                 <img 
                    src={workshop.image} 
                    alt={workshop.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
              </div>
              
              {/* Text Content */}
              <div className="flex-1 text-left px-8 py-4">
                <h3 className="font-display font-bold text-xl text-[#0f172a] mb-1 group-hover:text-orange-600 transition-colors">
                  {workshop.title}
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                  {workshop.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Keep the Dialog as requested */}
      <Dialog open={!!selectedWorkshop} onOpenChange={() => setSelectedWorkshop(null)}>
        <DialogContent className="sm:max-w-md rounded-[30px]">
          <DialogHeader>
            <DialogTitle className="font-display text-xl flex items-center gap-3 pr-6">
              <span className="text-orange-400 text-2xl font-bold">{selectedWorkshop?.number}</span>
              {selectedWorkshop?.title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 mt-4">
             <div className="w-full h-48 rounded-2xl overflow-hidden shadow-inner">
                <img src={selectedWorkshop?.image} className="w-full h-full object-cover" alt="" />
             </div>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-bold">{selectedWorkshop?.date}</span>
              </div>
              <div className="flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-bold">{selectedWorkshop?.time}</span>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed text-sm">
              {selectedWorkshop?.fullDescription}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WorkshopsSection;
