import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BookOpen, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center relative overflow-hidden bg-[#0A192F] py-20 mt-16 md:mt-20">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px] animate-pulse delay-700"></div>
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 flex flex-col items-center text-center">
          {/* Cool 3D Animatic 404 Text */}
          <div className="relative group perspective-1000 cursor-default">
            <h1 
              className="text-[8rem] md:text-[14rem] leading-none font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 animate-bounce duration-[3000ms]"
              style={{
                textShadow: '3px 3px 0 #0f172a, 6px 6px 0 #1e3a8a, 9px 9px 0 #06b6d4, 15px 15px 20px rgba(6, 182, 212, 0.4)'
              }}
            >
              404
            </h1>
          </div>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white mb-6 tracking-wide drop-shadow-lg">
            PAGE NOT AVAILABLE
          </h2>
          
          <p className="text-lg md:text-xl text-cyan-100/80 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            Oops! It looks like you've drifted into uncharted territory. 
            The page you're looking for at <br />
            <span className="inline-block mt-2 text-cyan-400 bg-cyan-950/60 px-3 py-1.5 rounded-lg font-mono border border-cyan-800/50 shadow-inner">
              jbonlinetuitions.in{location.pathname}
            </span> <br />
            doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-lg">
            <Link 
              to="/" 
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-lg hover:scale-105 hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all duration-300 w-full sm:w-auto justify-center border border-cyan-400/50"
            >
              <Home size={22} />
              Return to Home
            </Link>
            
            <Link 
              to="/blogs" 
              className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-cyan-500/50 text-cyan-300 hover:bg-cyan-900/40 hover:border-cyan-300 hover:text-cyan-200 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <BookOpen size={22} />
              Read Our Blogs
            </Link>
          </div>
          
          <div className="mt-16">
            <p className="text-sm md:text-base text-cyan-500/60 font-bold tracking-[0.2em] uppercase">
              JB Online Tuitions — Engineering Excellence
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default NotFound;
