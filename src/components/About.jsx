import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Leaf, Mountain, Heart, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Mountain className="h-8 w-8 text-primary" />,
      title: "高山茶園",
      description: "來自海拔一千公尺以上的優質茶園，確保每片茶葉的純淨品質"
    },
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: "傳統工藝",
      description: "承襲百年製茶技藝，結合現代創新，呈現最完美的茶香體驗"
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "用心調配",
      description: "每一杯茶都經過精心調配，為您帶來獨特的味覺享受"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "品質保證",
      description: "嚴格的品質控管，從原料選擇到成品出貨，層層把關"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            品牌故事
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            青山茶語源自於對台灣高山茶文化的深度探索。我們相信，真正的好茶不僅僅是味覺的享受，
            更是心靈的歸宿。從海拔一千公尺的茶園到您手中的這杯茶，我們堅持傳統工藝與現代創新的完美結合。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover-lift h-full">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">
              從茶園到杯中的完整旅程
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                每一片茶葉都經過精心挑選，從清晨的露水中採摘，到傳統工藝的細心製作，
                我們確保每個環節都達到最高標準。
              </p>
              <p className="leading-relaxed">
                我們的茶師擁有數十年的經驗，將古老的製茶智慧與現代的品質控管相結合，
                創造出既保有傳統韻味又符合現代口感的優質茶品。
              </p>
              <p className="leading-relaxed">
                青山茶語不只是一個品牌，更是一種生活態度的體現。我們希望透過每一杯茶，
                為忙碌的都市生活帶來一絲寧靜與美好。
              </p>
            </div>
          </div>
          
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/src/assets/hero_background.jpg"
              alt="茶園風光"
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

