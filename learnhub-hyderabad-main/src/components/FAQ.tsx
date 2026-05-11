import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Which is the best online tuition for BTech students?",
    answer: "JB Online Tuitions offers specialized online tuitions for BTech students. We focus on expert-led classes for CSE, ECE, EEE, Mechanical, and Civil Engineering subjects, combining practical examples with syllabus-oriented teaching.",
  },
  {
    question: "Can I learn engineering subjects online effectively?",
    answer: "Absolutely! Our online classes use interactive digital whiteboards, real-time code sharing (for programming), and 3D diagrams (for core subjects) to ensure you understand complex engineering concepts better than in traditional classrooms.",
  },
  {
    question: "Do online tuitions help backlog students?",
    answer: "Yes, we provide targeted coaching specifically designed to help students clear their backlogs. Our expert faculty simplifies difficult topics and focuses on important exam-oriented concepts to ensure you pass with confidence.",
  },
  {
    question: "What engineering branches do you cover?",
    answer: "We cover all major branches including Computer Science (CSE), Electronics and Communication (ECE), Electrical and Electronics (EEE), Mechanical, Civil, and Metallurgical Engineering.",
  },
  {
    question: "Are the classes live or pre-recorded?",
    answer: "We offer live interactive classes so you can ask doubts in real-time. Additionally, we provide access to recorded sessions for revision purposes.",
  }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-background relative overflow-hidden" id="faq">
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -z-10" />
      
      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our online BTech tuition programs.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }) }} />
    </section>
  );
}
