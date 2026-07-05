import '@/app/globals.css';

export const metadata = {
  title: 'OKEXPAY - 跨境出海支付聚合平台',
  description: '专业出海支付聚合平台，为游戏、社交、电商等出海行业提供一站式支付解决方案。',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
      </body>
    </html>
  );
}
