import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, Mail, Phone, MapPin } from 'lucide-react';
import logoImage from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: '關於我們', href: '#about' },
      { name: '品牌故事', href: '#story' },
      { name: '企業社會責任', href: '#csr' },
      { name: '最新消息', href: '#news' }
    ],
    products: [
      { name: '高山茶系列', href: '#pure-tea' },
      { name: '經典奶茶', href: '#milk-tea' },
      { name: '果香調飲', href: '#fruit-tea' },
      { name: '季節限定', href: '#seasonal' }
    ],
    service: [
      { name: '門市據點', href: '#store' },
      { name: '外送服務', href: '#delivery' },
      { name: '會員制度', href: '#membership' },
      { name: '加盟資訊', href: '#franchise' }
    ],
    support: [
      { name: '聯絡我們', href: '#contact' },
      { name: '常見問題', href: '#faq' },
      { name: '客服中心', href: '#support' },
      { name: '意見回饋', href: '#feedback' }
    ]
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center space-x-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img src={logoImage} alt="青山茶語" className="h-12 w-auto filter brightness-0 invert" />
            </motion.div>
            
            <motion.p
              className="text-primary-foreground/80 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              青山茶語致力於傳承台灣茶文化，以最純正的高山茶葉，
              結合現代創新工藝，為每一位顧客帶來最美好的茶香體驗。
            </motion.p>
            
            <motion.div
              className="flex items-center space-x-2 text-primary-foreground/60"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Heart className="h-4 w-4" />
              <span className="text-sm">用心製茶，真心服務</span>
            </motion.div>
          </div>

          {/* Links Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">關於青山</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">茶品系列</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">服務項目</h4>
            <ul className="space-y-2">
              {footerLinks.service.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">客戶服務</h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-primary-foreground/70 text-sm">
                <Phone className="h-4 w-4" />
                <span>0800-123-456</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/70 text-sm">
                <Mail className="h-4 w-4" />
                <span>info@greenmountaintea.com</span>
              </div>
              <div className="flex items-start space-x-2 text-primary-foreground/70 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>台北市信義區信義路五段7號</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="border-t border-primary-foreground/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-primary-foreground/60 text-sm">
              <span>© {currentYear} 青山茶語 Green Mountain Tea Story</span>
              <span>|</span>
              <a href="#privacy" className="hover:text-primary-foreground transition-colors">
                隱私權政策
              </a>
              <span>|</span>
              <a href="#terms" className="hover:text-primary-foreground transition-colors">
                服務條款
              </a>
            </div>
            
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-primary-foreground/60 text-sm">追蹤我們：</span>
              <div className="flex space-x-3">
                <a
                  href="#facebook"
                  className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <span className="text-sm">📘</span>
                </a>
                <a
                  href="#instagram"
                  className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <span className="text-sm">📷</span>
                </a>
                <a
                  href="#line"
                  className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <span className="text-sm">💬</span>
                </a>
                <a
                  href="#youtube"
                  className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <span className="text-sm">📺</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent opacity-50"></div>
    </footer>
  );
};

export default Footer;

