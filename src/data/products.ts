export interface Product {
  id: string
  name: string
  price: number
  affiliateUrl: string
  image: string
  description: string
}

export const products: Product[] = [
  {
    id: '1',
    name: '褪黑素软糖 60粒',
    price: 89,
    affiliateUrl: 'https://example.com/melatonin',
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=400',
    description: '帮助改善睡眠质量，适合失眠人群'
  },
  {
    id: '2',
    name: '蛋白粉 乳清蛋白 2.27kg',
    price: 268,
    affiliateUrl: 'https://example.com/protein',
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400',
    description: '高蛋白低脂肪，适合健身减脂人群'
  },
  {
    id: '3',
    name: '瑜伽垫 加厚防滑 183cm',
    price: 129,
    affiliateUrl: 'https://example.com/yoga-mat',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400',
    description: '柔软舒适，适合冥想和瑜伽练习'
  },
  {
    id: '4',
    name: '氨基葡萄糖 180粒',
    price: 198,
    affiliateUrl: 'https://example.com/glucosamine',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400',
    description: '维护关节健康，适合中老年人'
  },
  {
    id: '5',
    name: 'Omega-3 鱼油 120粒',
    price: 158,
    affiliateUrl: 'https://example.com/fish-oil',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400',
    description: '补充DHA和EPA，支持心脑健康'
  },
  {
    id: '6',
    name: '筋膜枪 静音款',
    price: 299,
    affiliateUrl: 'https://example.com/massage-gun',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    description: '缓解肌肉酸痛，适合运动后使用'
  }
]
