import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import storeImage from '../assets/store_interior.jpg';

const Store = () => {
  const stores = [
    {
      id: 1,
      name: '青山茶語 信義旗艦店',
      address: '台北市信義區信義路五段7號1樓',
      phone: '(02) 2345-6789',
      hours: '週一至週日 10:00-22:00',
      features: ['品茶體驗', '茶藝教學', '外帶服務'],
      image: storeImage
    },
    {
      id: 2,
      name: '青山茶語 東區概念店',
      address: '台北市大安區忠孝東路四段181號',
      phone: '(02) 2765-4321',
      hours: '週一至週日 11:00-21:30',
      features: ['限定商品', '客製調配', '會員專區'],
      image: storeImage
    },
    {
      id: 3,
      name: '青山茶語 台中文心店',
      address: '台中市西屯區文心路二段560號',
      phone: '(04) 2234-5678',
      hours: '週一至週日 10:30-21:30',
      features: ['停車便利', '親子友善', '團體預約'],
      image: storeImage
    }
  ];

  return (
    <section id="store" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            門市據點
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            歡迎蒞臨我們的門市，體驗最純正的茶香文化與專業的品茶服務
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {stores.map((store, index) => (
            <motion.div
              key={store.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="hover-lift overflow-hidden h-full">
                <div className="relative">
                  <img
                    src={store.image}
                    alt={store.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{store.name}</h3>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{store.address}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{store.phone}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{store.hours}</span>
                    </div>
                    
                    <div className="pt-2">
                      <h4 className="font-semibold text-primary mb-2">門市特色</h4>
                      <div className="flex flex-wrap gap-2">
                        {store.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4 flex gap-2">
                      <Button className="flex-1" size="sm">
                        <Navigation className="h-4 w-4 mr-2" />
                        導航
                      </Button>
                      <Button variant="outline" className="flex-1" size="sm">
                        <Phone className="h-4 w-4 mr-2" />
                        致電
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Map Section */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            門市分布地圖
          </h3>
          
          <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center mb-6">
            <div className="text-center text-muted-foreground">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
              <p className="text-lg">互動式地圖</p>
              <p className="text-sm">點擊查看詳細位置資訊</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              更多門市陸續展店中，敬請期待！
            </p>
            <Button variant="outline" size="lg">
              查看完整門市列表
            </Button>
          </div>
        </motion.div>

        {/* Store Features */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold text-primary mb-2">營業時間彈性</h4>
            <p className="text-muted-foreground">
              配合您的生活節奏，提供長時間的營業服務
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold text-primary mb-2">交通便利</h4>
            <p className="text-muted-foreground">
              鄰近捷運站與主要商圈，輕鬆抵達享受茶香
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Navigation className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold text-primary mb-2">專業服務</h4>
            <p className="text-muted-foreground">
              專業茶藝師現場服務，提供最佳的品茶建議
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Store;

