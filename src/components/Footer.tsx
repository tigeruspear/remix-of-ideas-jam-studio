import { Instagram, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-10 border-t border-cream/10">
      <div className="container mx-auto px-10">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center text-center">
            
            <h3 className="font-display font-bold text-xl text-cream mb-2">
              
              Ideas<span className="text-accent">Jam</span> 2026
            </h3>

          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-start md:gap-10">
            <div className="flex flex-col items-start text-left md:flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs uppercase tracking-widest text-cream/50">
                  Organised by
                </span>
                <img
                  src="/images/garagelogo.svg"
                  alt="Garage at EEE logo"
                  className="h-20 w-auto"
                />
              </div>
              <p className="text-sm text-cream/80 mb-4">
                Garage@EEE is a student-led maker space in the School of Electrical and Electronic Engineering. {"\n"} 
                
                We provide the environment, materials, and funding for students to develop their ideas, alongside their technical skills. Furthermore, we run creative initiatives to provide opportunities for our ambassadors to enhance other holistic skills. Aided by our strong industry connections and extensive alumni network, Garage@EEE creates not only engineers of today, but thinkers, entrepreneurs, and world leaders of tomorrow.


              </p>

              <p className="text-sm text-cream/60 whitespace-pre-line">
                50 Nanyang Ave, Nanyang Technological University
                {"\n"}
                Singapore, S639798
                {"\n"}
                School of Electrical and Electronic Engineering
                {"\n"}
                S1-B3c-26
              </p>
              
              <div className="flex items-center gap-4 mt-6 mb-6">
                <a
                  href="https://www.instagram.com/garageeeprojects/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-cream/10 flex items-center justify-center text-cream/80 hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://garage-eee.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-cream/10 flex items-center justify-center text-cream/80 hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="w-full md:flex-1">
              <div className="overflow rounded-xl border border-cream/10 bg-cream/5 shadow-sm">
                <iframe
                  title="Garage@EEE Location"
                  src="https://www.google.com/maps/embed/v1/place?q=Garage@EEE,Singapore&key=AIzaSyAwI5NS53NYbpnx3xquHbdMcexNktcjPbo"
                  className="h-80 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen>
                </iframe>
              </div>
            </div>
          </div>
        </div>
          <div className="pt-4 border-t border-cream/10">
            <p className="text-xs text-cream/40">
              © 2026 IdeasJam NTU. All rights reserved.
            </p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
