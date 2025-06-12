import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import milkTeaImage from '../assets/product_milk_tea.jpg';
import fruitTeaImage from '../assets/product_fruit_tea.jpg';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: '全部商品' },
    { id: 'milk-tea', name: '經典奶茶' },
    { id: 'fruit-tea', name: '果香調飲' },
    { id: 'pure-tea', name: '高山茶系列' },
    { id: 'seasonal', name: '季節限定' }
  ];

  const products = [
    {
      id: 1,
      name: '青山珍珠奶茶',
      category: 'milk-tea',
      price: '65',
      image: milkTeaImage,
      description: '選用阿里山高山茶葉，搭配手工熬煮黑糖珍珠，口感層次豐富',
      tags: ['招牌', '熱銷']
    },
    {
      id: 2,
      name: '山林果茶',
      category: 'fruit-tea',
      price: '70',
      image: fruitTeaImage,
      description: '新鮮水果與高山茶的完美結合，清香甘甜，充滿自然風味',
      tags: ['新品', '季節限定']
    },
    {
      id: 3,
      name: '梨山烏龍茶',
      category: 'pure-tea',
      price: '55',
      image: milkTeaImage,
      description: '來自梨山海拔2000公尺茶園，茶香清雅，回甘持久',
      tags: ['精選']
    },
    {
      id: 4,
      name: '焦糖瑪奇朵',
      category: 'milk-tea',
      price: '75',
      image: fruitTeaImage,
      description: '濃郁焦糖與香醇奶茶的絕妙搭配，甜而不膩',
      tags: ['人氣']
    },
    {
      id: 5,
      name: '蜜桃烏龍',
      category: 'fruit-tea',
      price: '68',
      image: milkTeaImage,
      description: '台灣水蜜桃與烏龍茶的夏日清香組合',
      tags: ['夏季限定']
    },
    {
      id: 6,
      name: '大禹嶺高冷茶',
      category: 'pure-tea',
      price: '80',
      image: fruitTeaImage,
      description: '台灣最高海拔茶區，茶質清香甘醇，是茶葉愛好者的首選',
      tags: ['頂級', '限量']
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            茶品系列
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            精選台灣高山茶葉，結合創新調配技術，為您呈現最純正的茶香體驗
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="px-6 py-2"
            >
              {category.name}
            </Button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover-lift overflow-hidden h-full">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary text-primary-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-primary">
                      {product.name}
                    </h3>
                    <span className="text-2xl font-bold text-accent">
                      ${product.price}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <Button className="w-full" size="lg">
                    立即訂購
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-primary mb-4">
            想要了解更多茶品資訊？
          </h3>
          <p className="text-muted-foreground mb-6">
            歡迎到我們的門市親自品嚐，或聯絡我們的茶藝師為您推薦最適合的茶品
          </p>
          <Button size="lg" variant="outline" className="px-8">
            查看完整菜單
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;

