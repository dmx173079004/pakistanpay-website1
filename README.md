# PAYNOW Website - 跨境出海支付聚合平台

基于 Next.js 14 构建的多国家展示型官网，支持 **巴基斯坦、孟加拉、印度、泰国、越南** 五个国家的独立内容展示。

## 技术栈

- **框架**: Next.js 14 (App Router) + 静态导出 (SSG)
- **样式**: Tailwind CSS 3
- **部署**: Vercel / Cloudflare Pages / 任意静态托管

## 项目结构

```
pakistanpay-website/
├── src/
│   ├── app/
│   │   ├── layout.js            # 根布局
│   │   ├── page.js              # 根页（重定向到默认国家）
│   │   ├── not-found.js         # 404 页面
│   │   ├── globals.css          # 全局样式
│   │   └── [country]/           # 动态国家路由
│   │       ├── layout.js        # 国家布局（含导航栏+页脚）
│   │       ├── page.js          # 首页
│   │       ├── about/page.js    # 关于我们
│   │       ├── services/page.js # 服务
│   │       └── contact/page.js  # 联系我们
│   ├── components/
│   │   ├── Navbar.js            # 导航栏（含国家切换）
│   │   ├── Footer.js            # 页脚
│   │   ├── HeroSection.js       # 首页 Hero 区域
│   │   ├── ScenarioCards.js     # 支付场景卡片
│   │   ├── StatisticsSection.js # 数据统计
│   │   ├── FeaturesSection.js   # 服务特色
│   │   ├── PartnerLogos.js      # 合作伙伴
│   │   ├── CtaSection.js        # 号召行动
│   │   └── ContactForm.js       # 联系表单
│   ├── data/
│   │   └── content.js           # 5个国家所有页面文案
│   └── lib/
│       └── utils.js             # 工具函数
├── public/
├── package.json
├── next.config.mjs
├── tailwind.config.mjs
├── postcss.config.mjs
└── README.md
```

## 快速开始

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器
npm run dev
# 访问 http://localhost:3000

# 3. 构建静态文件
npm run build
# 静态文件输出到 out/ 目录
```

## 国家切换

网站支持 5 个国家，通过顶部导航栏的国家下拉菜单切换：

| 代码 | 国家 | 国旗 |
|------|------|------|
| `pk` | 巴基斯坦 | 🇵🇰 |
| `bd` | 孟加拉 | 🇧🇩 |
| `in` | 印度 | 🇮🇳 |
| `th` | 泰国 | 🇹🇭 |
| `vn` | 越南 | 🇻🇳 |

URL 结构：`/[country]/` — 例如 `/pk/`、`/bd/`

## 自定义内容

所有文案保存在 `src/data/content.js`，每个国家独立的内容函数包括：

- `getHomeContent(code)` — 首页
- `getAboutContent(code)` — 关于我们
- `getServicesContent(code)` — 服务
- `getContactContent(code)` — 联系我们
- `getFooterContent(code)` — 页脚

直接修改对应国家的文案即可更新网站内容。

## 部署

构建后 `out/` 目录可以直接部署到任意静态托管平台：

- **Vercel**: 连接仓库自动部署
- **Cloudflare Pages**: 拖拽 `out/` 文件夹
- **Nginx/Apache**: 将 `out/` 内容部署到 Web 服务器
