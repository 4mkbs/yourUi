import Link from "next/link";
import { ArrowLeft, Ghost } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="relative">
        <div className="absolute -inset-8 bg-primary/20 blur-[100px] rounded-full"></div>
        <Ghost className="w-32 h-32 text-primary animate-bounce relative z-10 mx-auto mb-8" strokeWidth={1} />
      </div>
      
      <h1 className="text-7xl font-black text-white mb-4 tracking-tighter">
        404
      </h1>
      
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
        Page Not Found
      </h2>
      
      <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10">
        The design, component, or page you're looking for seems to have vanished into the digital void.
      </p>
      
      <Link 
        href="/"
        className="btn-primary flex items-center gap-2 py-3 px-6 rounded-xl font-semibold shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-1"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Homepage
      </Link>
    </div>
  );
}
