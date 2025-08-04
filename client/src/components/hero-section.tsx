import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            data-testid="hero-title"
          >
            Link Strategy to{" "}
            <span className="gradient-text">AI Opportunities</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
            data-testid="hero-description"
          >
            Agent Blueprint connects your corporate strategic initiatives and key business problems to actionable AI opportunities through our multi-model AI-powered platform.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/25"
              data-testid="button-get-started"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("features")}
              className="border-gray-600 hover:border-white text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-transparent hover:bg-white/5"
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
