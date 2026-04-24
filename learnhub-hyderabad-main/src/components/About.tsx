import { BookOpen, Heart, Globe } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Easy Way of Learning",
    desc: "Step-by-step guidance, simplified concepts, and engaging sessions that make tough subjects feel effortless.",
  },
  {
    icon: Heart,
    title: "Love Learning — Best Teachers",
    desc: "Friendly, experienced mentors who care about your progress and turn studying into something you actually enjoy.",
  },
  {
    icon: Globe,
    title: "Within Your Reach",
    desc: "An online learning platform plus home tuitions in Hyderabad — quality education wherever you are.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            About Us
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-foreground">
            Why students choose JB Online Tuitions
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We're on a mission to make learning easier, friendlier, and more accessible for every engineering student.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl bg-card border border-border p-8 transition-smooth hover:shadow-md hover:border-primary/20"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-primary border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-foreground">
                {f.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed font-normal">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
