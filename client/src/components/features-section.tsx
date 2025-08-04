import { motion } from "framer-motion";
import { Target, Network, Plug, Compass, Eye, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Strategic AI Alignment",
    description: "Link corporate strategic initiatives and business problems directly to AI opportunities with end-to-end understanding of value delivery."
  },
  {
    icon: Network,
    title: "Multi-Model AI Integration",
    description: "Technology-agnostic platform that integrates with multiple LLMs and AI models to provide the best solutions for your specific needs."
  },
  {
    icon: Plug,
    title: "Enterprise Platform Integration",
    description: "Connect to popular enterprise platforms like ServiceNow, Salesforce, N8N, and Pega where AI agents can be built and deployed."
  },
  {
    icon: Compass,
    title: "Intelligent Agent Design",
    description: "Design AI agents based on business problems and identify the optimal technical platform for implementation."
  },
  {
    icon: Eye,
    title: "Agent Visualization",
    description: "Visualize how AI agents are constructed, their triggers, tools, and outputs across your enterprise ecosystem."
  },
  {
    icon: TrendingUp,
    title: "Strategic Intelligence",
    description: "House and analyze key company data including strategic initiatives, business problems, and current enterprise systems."
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="features-title">
            Platform Capabilities
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="features-description">
            Discover how Agent Blueprint transforms your business strategy into intelligent AI solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
                data-testid={`feature-card-${index}`}
              >
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-primary mb-4" data-testid={`feature-icon-${index}`} />
                  <h3 className="text-2xl font-semibold mb-4" data-testid={`feature-title-${index}`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed" data-testid={`feature-description-${index}`}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
