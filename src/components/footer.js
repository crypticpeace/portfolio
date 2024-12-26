import React from 'react';
import { Instagram, Github, Linkedin, Mail, MessageSquare, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-gray-800 text-white rounded-lg">
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="w-full bg-gray-700 hover:bg-gray-600 py-4 text-sm text-center transition-colors"
      >
        <div className="flex items-center justify-center gap-2">
          <ArrowUp size={16} />
          Back to top
        </div>
      </button>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Get to Know Me */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get to Know Me</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/about" className="hover:text-white hover:underline">About Me</a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-white hover:underline">Portfolio</a>
              </li>

            </ul>
          </div>

          {/* Connect With Me */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Me</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.instagram.com/aman47jain/"
                  className="flex items-center gap-2 text-gray-300 hover:text-white"
                >
                  <Instagram size={20} />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919490233611"
                  className="flex items-center gap-2 text-gray-300 hover:text-white"
                >
                  <MessageSquare size={20} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/aman47j"
                  className="flex items-center gap-2 text-gray-300 hover:text-white"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/aman47j"
                  className="flex items-center gap-2 text-gray-300 hover:text-white"
                >
                  <Github size={20} />
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Me */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact me1</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="mailto:jainamanmsd47@gmail.com"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Mail size={20} />
                  jainamanmsd47@gmail.com
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white hover:underline">
                  +91 9490233611
                </a>
              </li>
            </ul>
          </div>

          {/* Let's Work Together */}
          <div>
            <h3 className="text-lg font-bold mb-4">Let's Work Together</h3>
            <p className="text-gray-300 mb-4">
              Interested in collaboration? Let's build something amazing together!
            </p>
            <a
              href="/contact"
              className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Yeh kyu padh rahe ho. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <a href="/privacy" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-gray-400 hover:text-white">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;