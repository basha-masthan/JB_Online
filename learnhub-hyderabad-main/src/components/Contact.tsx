import { useState } from "react";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { MapPin, Phone, MessageCircle, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { courses } from "./Courses";

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(80),
  phone: z.string().trim().regex(/^[0-9+\-\s]{7,15}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(255),
  course: z.string().min(1, "Please select a course"),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = enquirySchema.safeParse(form);
    if (!result.success) {
      toast({
        title: "Please check your details",
        description: result.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_0ycgn3k", // Service ID
        "template_drletb8", // Template ID
        {
          from_name: form.name,
          reply_to: form.email,
          phone: form.phone,
          course: form.course,
          message: form.message,
        },
        "MxXCw8AcuhjEEAYrv" // Public Key
      );

      toast({
        title: "Message Sent!",
        description: "We have received your enquiry and will contact you soon.",
      });

      setForm({ name: "", phone: "", email: "", course: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or reach us via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Get In Touch
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-foreground">
            Have questions? Let's talk.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Fill in the form or reach us on WhatsApp — we'll get back to you quickly.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl bg-gradient-hero bg-blueprint p-8 text-primary-foreground shadow-elegant">
              <h3 className="font-display text-2xl font-bold">Visit Our Institute</h3>
              <p className="mt-2 text-primary-foreground/85">
                We're happy to welcome you in person.
              </p>

              <div className="mt-6 space-y-5">
                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <p className="text-primary-foreground/85 text-sm leading-relaxed">
                      Plot No 368, Sathavahana Nagar, Near Sathavahana High School, KPHB, Hyderabad – 500072
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="h-6 w-6 shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">Call</div>
                    <a href="tel:+919676623494" className="text-primary-foreground/85 text-sm">
                      +91 96766 23494
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MessageCircle className="h-6 w-6 shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <a
                      href="https://wa.me/919676623494"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground/85 text-sm hover:underline"
                    >
                      Chat with us instantly
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-2xl bg-card border border-border p-8 shadow-md space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  maxLength={80}
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 9XXXX XXXXX"
                  maxLength={15}
                  className="mt-1.5"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                maxLength={255}
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="course">Course of Interest</Label>
              <Select
                value={form.course}
                onValueChange={(v) => setForm({ ...form, course: v })}
              >
                <SelectTrigger id="course" className="mt-1.5">
                  <SelectValue placeholder="Select a course" />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  {courses.map((c) => (
                    <SelectItem key={c.name} value={c.name}>
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us what you'd like to learn..."
                rows={4}
                maxLength={1000}
                className="mt-1.5"
              />
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  Sending... <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                </>
              ) : (
                <>
                  Send Enquiry <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
