import { GraduationCap, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/90 pt-16 pb-8">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-xl text-background">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-hero text-primary-foreground">
              <GraduationCap className="h-5 w-5" />
            </span>
            JB Online Tuitions
          </div>
          <p className="mt-4 text-sm text-background/70 leading-relaxed">
            Meet new and interesting teachers nearby. Online & home tuitions across engineering streams in Hyderabad.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-background">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#home" className="hover:text-primary-glow transition-smooth">Home</a></li>
            <li><a href="#about" className="hover:text-primary-glow transition-smooth">About</a></li>
            <li><a href="#courses" className="hover:text-primary-glow transition-smooth">Courses</a></li>
            <li><a href="#contact" className="hover:text-primary-glow transition-smooth">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-background">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-background/70">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
              Plot No 368, Sathavahana Nagar, Near Sathavahana High School, KPHB, Hyderabad – 500072
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 shrink-0 mt-0.5" />
              <a href="tel:+919676623494" className="hover:text-primary-glow transition-smooth">+91 96766 23494</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 pt-6 border-t border-background/10 text-center text-sm text-background/60">
        © {new Date().getFullYear()} JB Online Tuitions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
