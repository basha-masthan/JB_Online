import { Link } from "react-router-dom";
import { blogData } from "@/data/blogData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowRight, BookText } from "lucide-react";
import { useEffect } from "react";

const Blogs = () => {
  const blogs = Object.values(blogData);

  useEffect(() => {
    document.title = "Engineering Study Blog | JB Online Tuitions";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-primary border border-border">
              <BookText className="h-4 w-4" /> Study Resources
            </span>
            <h1 className="mt-6 font-display text-4xl md:text-5xl font-bold text-foreground">
              JB Engineering Blog
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Expert advice, study tips, and guides to mastering your engineering subjects with online tuition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="group flex flex-col justify-between rounded-2xl bg-card border border-border p-8 transition-smooth hover:shadow-md hover:border-primary/30"
              >
                <div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>{blog.date}</span>
                    <span className="w-1 h-1 rounded-full bg-border"></span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                    <Link to={`/blog/${blog.id}`}>
                      {blog.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {blog.excerpt}
                  </p>
                </div>
                
                <div className="mt-auto pt-6 border-t border-border/50 flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">By {blog.author}</span>
                  <Link 
                    to={`/blog/${blog.id}`} 
                    className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blogs;
