import { BookOpen, Heart, Globe } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Easy Way of Learning",
    desc: "Step-by-step guidance, simplified concepts, and engaging sessions that make tough subjects feel effortless.",
    bgClass: "bg-blue-50/50 hover:bg-blue-50 border-blue-100",
    iconClass: "bg-blue-100 text-blue-600 border-blue-200 group-hover:bg-blue-600 group-hover:text-white",
  },
  {
    icon: Heart,
    title: "Love Learning — Best Teachers",
    desc: "Friendly, experienced mentors who care about your progress and turn studying into something you actually enjoy.",
    bgClass: "bg-rose-50/50 hover:bg-rose-50 border-rose-100",
    iconClass: "bg-rose-100 text-rose-600 border-rose-200 group-hover:bg-rose-600 group-hover:text-white",
  },
  {
    icon: Globe,
    title: "Within Your Reach",
    desc: "An online learning platform plus home tuitions in Hyderabad — quality education wherever you are.",
    bgClass: "bg-emerald-50/50 hover:bg-emerald-50 border-emerald-100",
    iconClass: "bg-emerald-100 text-emerald-600 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white",
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
              className={`group rounded-2xl border p-8 transition-smooth shadow-sm hover:shadow-md ${f.bgClass}`}
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-xl border group-hover:text-white transition-smooth ${f.iconClass}`}>
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
