import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold" data-testid="footer-logo">
              Agent Blueprint
            </h3>
            <p className="text-gray-400 mt-2" data-testid="footer-copyright">
              © 2024 NowGentic. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              data-testid="footer-linkedin"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              data-testid="footer-twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              data-testid="footer-email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
