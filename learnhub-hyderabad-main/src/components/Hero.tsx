import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-learning.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-soft pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="container relative mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-foreground border border-border">
            <Sparkles className="h-4 w-4 text-accent" /> Online & Home Tuitions in Hyderabad
          </span>
          <h1 className="mt-6 font-display text-4xl md:text-6xl font-extrabold leading-tight text-foreground">
            Meet New & Interesting{" "}
            <span className="text-primary">
              Teachers Nearby
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
            Love Learning. Discover the easiest, friendliest way to master your engineering subjects with the best teachers — anytime, anywhere.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#courses">
                Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-background">
              <a href="#about">Learn More</a>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md pt-6 border-t border-border/50">
            <div>
              <div className="font-display text-3xl font-bold text-primary">8+</div>
              <div className="text-sm font-medium text-muted-foreground">Departments</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-primary">100%</div>
              <div className="text-sm font-medium text-muted-foreground">Best Teachers</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm font-medium text-muted-foreground">Support</div>
            </div>
          </div>
        </div>

        <div className="relative lg:ml-auto w-full max-w-lg">
          <div className="absolute -inset-4 bg-primary/5 rounded-3xl -z-10 transform rotate-3 transition-transform hover:rotate-6"></div>
          <img
            src={heroImage}
            alt="Student learning online with JB Online Tuitions"
            width={1280}
            height={1024}
            className="relative rounded-2xl shadow-xl border border-border bg-background"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
