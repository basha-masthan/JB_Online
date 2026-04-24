import { useParams, Link, Navigate } from "react-router-dom";
import { blogData } from "@/data/blogData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowLeft, Share2 } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const BlogDetail = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const blog = blogData[blogId as keyof typeof blogData];

  useEffect(() => {
    if (blog) {
      document.title = blog.seoTitle;
      
      // Add or update meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', blog.seoDescription);
      
      window.scrollTo(0, 0);
    }
  }, [blog]);

  if (!blog) {
    return <Navigate to="/404" replace />;
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.excerpt,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      // Fallback: could trigger a toast here
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 py-4 max-w-4xl">
          <Link to="/blogs" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to all articles
          </Link>

          <article>
            <header className="mb-12 border-b border-border/50 pb-8">
              <div className="flex items-center gap-4 text-sm font-medium text-primary mb-6">
                <span>{blog.date}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>
                <span>{blog.readTime}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                {blog.title}
              </h1>
              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    JB
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{blog.author}</p>
                    <p className="text-xs text-muted-foreground">Expert Tutors</p>
                  </div>
                </div>
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-secondary"
                >
                  <Share2 className="h-4 w-4" /> Share
                </button>
              </div>
            </header>

            <div 
              className="prose prose-lg md:prose-xl max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80 prose-li:text-muted-foreground mb-16"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            <div className="bg-secondary/30 rounded-2xl p-8 md:p-12 text-center border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to master your subjects?</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our specialized online tuition or home tuition programs in Hyderabad. Get personalized guidance from expert engineering faculty.
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-bold px-8">
                <Link to="/#contact">Enquire Now</Link>
              </Button>
            </div>
          </article>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogDetail;
