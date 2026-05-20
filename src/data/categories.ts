export interface Category {
  slug: string
  name: string
  icon: string
  description: string
  color: string
}

export const categories: Category[] = [
  {
    slug: 'fat-loss',
    name: '减脂',
    icon: 'Flame',
    description: '科学减脂方法、饮食建议、运动计划',
    color: 'from-orange-500 to-red-500'
  },
  {
    slug: 'sleep',
    name: '睡眠改善',
    icon: 'Moon',
    description: '睡眠卫生、失眠解决方案、睡眠追踪',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    slug: 'meditation',
    name: '冥想',
    icon: 'Brain',
    description: '入门指南、正念练习、减压技巧',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    slug: 'supplements',
    name: '补剂',
    icon: 'Pill',
    description: '产品评测、成分分析、购买指南',
    color: 'from-green-500 to-emerald-500'
  },
  {
    slug: 'elderly',
    name: '中老年健康',
    icon: 'Heart',
    description: '慢病管理、骨骼健康、营养需求',
    color: 'from-pink-500 to-rose-500'
  },
  {
    slug: 'workplace',
    name: '职场减压',
    icon: 'Briefcase',
    description: '工作生活平衡、职业倦怠、放松技巧',
    color: 'from-amber-500 to-yellow-500'
  }
]
