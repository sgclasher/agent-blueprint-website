import { motion } from "framer-motion";
import { Target, Network, Plug, Compass, Eye, TrendingUp } from "lucide-react";
import arrowsIcon from "@assets/Scribbles Arrows_1754333104123.png";
import starIcon from "@assets/Doodle Star_1754333729253.png";
import integrationIcon from "@assets/Doodle Integration_1754333898680.png";
import contextIcon from "@assets/Context Doodle_1754334074317.png";
import eyeIcon from "@assets/Doodle Eye_1754334335671.png";
import blueprintIcon from "@assets/Doodle Blueprint_1754334483190.png";

const features = [
  {
    icon: Target,
    title: "Strategic AI Alignment",
    description: "Connect your corporate strategic initiatives and business problems directly to AI agent opportunities."
  },
  {
    icon: Network,
    title: "Multi-Model AI Integration",
    description: "Integrates with multiple LLMs to provide comprehensive AI powered analysis and recommendations."
  },
  {
    icon: Plug,
    title: "Enterprise Platform Integration",
    description: "Seamlessly connects with ServiceNow, Salesforce, N8N, Pega, and other popular agentic platforms."
  },
  {
    icon: Compass,
    title: "Agent Blueprints",
    description: "Automatically architect AI agents that solve your most critical business problems and provide measurable value."
  },
  {
    icon: Eye,
    title: "Agent Visualization",
    description: "Visualize how AI agents are constructed, their triggers, tools, and outputs and how they interact."
  },
  {
    icon: TrendingUp,
    title: "Context Driven Advice",
    description: "House and analyze key company data including strategic initiatives, business problems, and technology landscape for tailored, contextual advice."
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
            const isMultiModelFeature = feature.title === "Multi-Model AI Integration";
            const isStrategicAlignmentFeature = feature.title === "Strategic AI Alignment";
            const isEnterpriseIntegrationFeature = feature.title === "Enterprise Platform Integration";
            const isContextDrivenAdviceFeature = feature.title === "Context Driven Advice";
            const isAgentVisualizationFeature = feature.title === "Agent Visualization";
            const isAgentBlueprintsFeature = feature.title === "Agent Blueprints";
            
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
                  {isStrategicAlignmentFeature ? (
                    <img 
                      src={starIcon} 
                      alt="Strategic AI Alignment" 
                      className="w-12 h-12 mb-4 brightness-0 invert"
                      data-testid={`feature-icon-${index}`}
                    />
                  ) : isMultiModelFeature ? (
                    <img 
                      src={arrowsIcon} 
                      alt="Multi-Model AI Integration" 
                      className="w-12 h-12 mb-4 brightness-0 invert"
                      data-testid={`feature-icon-${index}`}
                    />
                  ) : isEnterpriseIntegrationFeature ? (
                    <img 
                      src={integrationIcon} 
                      alt="Enterprise Platform Integration" 
                      className="w-12 h-12 mb-4 brightness-0 invert"
                      data-testid={`feature-icon-${index}`}
                    />
                  ) : isAgentBlueprintsFeature ? (
                    <img 
                      src={blueprintIcon} 
                      alt="Agent Blueprints" 
                      className="w-14 h-14 mb-4 brightness-0 invert contrast-150"
                      data-testid={`feature-icon-${index}`}
                    />
                  ) : isAgentVisualizationFeature ? (
                    <img 
                      src={eyeIcon} 
                      alt="Agent Visualization" 
                      className="w-12 h-12 mb-4 brightness-0 invert"
                      data-testid={`feature-icon-${index}`}
                    />
                  ) : isContextDrivenAdviceFeature ? (
                    <img 
                      src={contextIcon} 
                      alt="Context Driven Advice" 
                      className="w-12 h-12 mb-4 brightness-0 invert"
                      data-testid={`feature-icon-${index}`}
                    />
                  ) : (
                    <Icon className="w-12 h-12 text-primary mb-4" data-testid={`feature-icon-${index}`} />
                  )}
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
