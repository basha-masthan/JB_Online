import { useParams, Link, Navigate } from "react-router-dom";
import { coursesData } from "@/data/coursesData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, BookOpen, GraduationCap, ArrowRight } from "lucide-react";
import { useEffect } from "react";

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = coursesData[courseId as keyof typeof coursesData];

  useEffect(() => {
    if (course) {
      document.title = course.seoTitle;
      // Scroll to top on navigation
      window.scrollTo(0, 0);
    }
  }, [course]);

  if (!course) {
    return <Navigate to="/404" replace />;
  }

  const Icon = course.icon;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <section className="bg-secondary/30 py-16 md:py-24 border-y border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg mb-6">
                <Icon className="h-8 w-8" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                {course.name}
              </h1>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {course.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground">
                  <a href="/#contact">Enroll in Online Tuition</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white">
                  <a href="https://wa.me/919676623494" target="_blank" rel="noopener noreferrer">
                    Chat with Expert
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
                    <BookOpen className="h-8 w-8 text-primary" /> Overview
                  </h2>
                  <div className="mt-6 prose prose-lg max-w-none text-muted-foreground leading-loose">
                    {course.longDescription}
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
                    <GraduationCap className="h-8 w-8 text-primary" /> What You Will Learn
                  </h2>
                  <div className="mt-8 grid sm:grid-cols-2 gap-4">
                    {course.outcomes.map((outcome, index) => (
                      <div key={index} className="flex gap-3 p-4 rounded-xl bg-secondary/20 border border-border/50">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                        <span className="text-foreground font-medium">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <div className="rounded-2xl border border-border bg-white p-8 shadow-md">
                  <h3 className="text-xl font-bold text-foreground mb-6">Key Subjects Covered</h3>
                  <ul className="space-y-4">
                    {course.subjects.map((subject, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        {subject}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <p className="text-sm text-primary font-medium">
                      Need help with a specific subject? Our online tuition is customized to your needs.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-primary p-8 text-primary-foreground shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Start Learning Today</h3>
                  <p className="text-primary-foreground/80 mb-6">
                    Join hundreds of engineering students mastering their streams with JB Online Tuitions.
                  </p>
                  <Button asChild variant="secondary" className="w-full font-bold">
                    <a href="/#contact">Contact for Home Tuition</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CourseDetail;
