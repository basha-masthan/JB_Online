import {
  Zap,
  FlaskConical,
  Code2,
  Radio,
  Terminal,
  Cog,
  Building2,
  Hammer,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const courses = [
  { name: "Electrical & Electronics Engineering", icon: Zap, short: "EEE" },
  { name: "Chemical Engineering", icon: FlaskConical, short: "Chemical" },
  { name: "Computer Science Engineering", icon: Code2, short: "CSE" },
  { name: "Electronics & Communication", icon: Radio, short: "ECE" },
  { name: "C & Python (Open for Everyone)", icon: Terminal, short: "C & Python" },
  { name: "Mechanical Engineering", icon: Cog, short: "Mechanical" },
  { name: "Civil Engineering", icon: Building2, short: "Civil" },
  { name: "Metallurgical & Material Science", icon: Hammer, short: "Metallurgy" },
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 md:py-28 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Courses Offered
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-foreground">
            Pick your stream, master your subject
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Expert tuitions across 8 engineering departments — plus programming for everyone.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((c) => (
            <div
              key={c.name}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border p-6 transition-smooth hover:-translate-y-2 hover:shadow-elegant hover:border-primary/40"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-hero opacity-0 group-hover:opacity-10 transition-smooth" />

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-gradient-hero group-hover:text-primary-foreground transition-smooth">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground min-h-[3.5rem]">
                {c.name}
              </h3>
              <Button asChild variant="ghost" size="sm" className="mt-2 px-0 hover:bg-transparent hover:text-primary">
                <a href="#contact">
                  Enroll Now <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
