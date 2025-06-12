import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: '客服專線',
      content: '0800-123-456',
      description: '週一至週日 09:00-21:00'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: '電子信箱',
      content: 'info@greenmountaintea.com',
      description: '24小時內回覆'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: '總公司地址',
      content: '台北市信義區信義路五段7號',
      description: '歡迎預約參觀'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'LINE官方帳號',
      content: '@greenmountaintea',
      description: '即時客服諮詢'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            聯絡我們
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            有任何問題或建議，歡迎隨時與我們聯繫。我們將竭誠為您服務
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary mb-8">聯絡資訊</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">{info.title}</h4>
                    <p className="text-lg font-medium text-foreground">{info.content}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Business Hours */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <h4 className="text-xl font-semibold text-primary">營業時間</h4>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>週一至週五</span>
                    <span>10:00 - 21:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>週六至週日</span>
                    <span>10:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>國定假日</span>
                    <span>10:30 - 21:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">追蹤我們</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="hover-lift">
                  <span className="sr-only">Facebook</span>
                  📘
                </Button>
                <Button variant="outline" size="icon" className="hover-lift">
                  <span className="sr-only">Instagram</span>
                  📷
                </Button>
                <Button variant="outline" size="icon" className="hover-lift">
                  <span className="sr-only">LINE</span>
                  💬
                </Button>
                <Button variant="outline" size="icon" className="hover-lift">
                  <span className="sr-only">YouTube</span>
                  📺
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">發送訊息</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        姓名 *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="請輸入您的姓名"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        電話
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="請輸入您的電話"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      電子信箱 *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="請輸入您的電子信箱"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      主旨 *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="請輸入訊息主旨"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      訊息內容 *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="請輸入您想要告訴我們的內容..."
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    發送訊息
                  </Button>
                </form>
                
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  我們會在24小時內回覆您的訊息
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">常見問題</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover-lift">
              <CardContent className="p-6">
                <h4 className="font-semibold text-primary mb-2">如何加盟青山茶語？</h4>
                <p className="text-muted-foreground">
                  歡迎有志創業的夥伴加入我們！請透過客服專線或電子信箱聯繫，我們將安排專人為您詳細說明加盟流程。
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardContent className="p-6">
                <h4 className="font-semibold text-primary mb-2">是否提供外送服務？</h4>
                <p className="text-muted-foreground">
                  目前部分門市提供外送服務，詳細配送範圍請洽詢各門市。我們也與主要外送平台合作。
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardContent className="p-6">
                <h4 className="font-semibold text-primary mb-2">會員制度有什麼優惠？</h4>
                <p className="text-muted-foreground">
                  會員享有生日優惠、集點回饋、新品優先體驗等多項專屬權益。歡迎到門市或官方APP註冊會員。
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardContent className="p-6">
                <h4 className="font-semibold text-primary mb-2">可以客製化調配嗎？</h4>
                <p className="text-muted-foreground">
                  當然可以！我們提供甜度、冰塊調整，部分門市還有專業茶藝師提供個人化調配服務。
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

