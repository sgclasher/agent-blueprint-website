import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-center items-center"
        >
          <div className="text-center">
            <h3 className="text-xl font-bold" data-testid="footer-logo">
              Agent Blueprint
            </h3>
            <p className="text-gray-400 mt-2" data-testid="footer-copyright">
              © 2025 Agent Blueprint. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
