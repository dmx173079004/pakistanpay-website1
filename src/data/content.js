/**
 * 多国家内容数据文件
 * 每个国家包含首页、关于、服务、联系我们等页面的所有文案
 *
 * ⚠️ 可编辑内容（通过 /admin/ 后台修改）：
 *   - src/data/cms/contact.json   → 联系方式
 *   - src/data/cms/{country}.json → 每个国家的标题/副标题
 */

import cmsContact from './cms/contact.json' with { type: 'json' };
import cmsPk from './cms/pk.json' with { type: 'json' };
import cmsBd from './cms/bd.json' with { type: 'json' };
import cmsIn from './cms/in.json' with { type: 'json' };
import cmsTh from './cms/th.json' with { type: 'json' };
import cmsVn from './cms/vn.json' with { type: 'json' };

const cmsCountries = { pk: cmsPk, bd: cmsBd, in: cmsIn, th: cmsTh, vn: cmsVn };

export const countries = [
  {
    code: 'pk',
    name: '巴基斯坦',
    nameEn: 'Pakistan',
    flag: '🇵🇰',
    currency: 'PKR',
    phoneCode: '+92',
    paymentChannel: 'EasyPaisa/JazzCash',
    theme: {
      brand: '#01411C',
      brandDark: '#003014',
      bgLight: '#f0faf4',
      accent: '#006A4E',
      gradient: 'linear-gradient(135deg, #01411C 0%, #006A4E 50%, #028A54 100%)',
      lightBgDeco: 'rgba(1,65,28,0.08)',
    },
    default: true,
  },
  {
    code: 'bd',
    name: '孟加拉',
    nameEn: 'Bangladesh',
    flag: '🇧🇩',
    currency: 'BDT',
    phoneCode: '+880',
    paymentChannel: 'bKash/Nagad/Rocket',
    theme: {
      brand: '#006A4E',
      brandDark: '#004D38',
      bgLight: '#f0faf5',
      accent: '#F42A41',
      gradient: 'linear-gradient(135deg, #006A4E 0%, #00805C 50%, #F42A41 100%)',
      lightBgDeco: 'rgba(0,106,78,0.08)',
    },
    default: false,
  },
  {
    code: 'in',
    name: '印度',
    nameEn: 'India',
    flag: '🇮🇳',
    currency: 'INR',
    phoneCode: '+91',
    paymentChannel: 'UPI',
    theme: {
      brand: '#FF671F',
      brandDark: '#E55A1A',
      bgLight: '#fff6f0',
      accent: '#046A38',
      gradient: 'linear-gradient(135deg, #FF671F 0%, #FF9933 33%, #FFFFFF 50%, #046A38 100%)',
      lightBgDeco: 'rgba(4,106,56,0.08)',
    },
    default: false,
  },
  {
    code: 'th',
    name: '泰国',
    nameEn: 'Thailand',
    flag: '🇹🇭',
    currency: 'THB',
    phoneCode: '+66',
    paymentChannel: 'QR',
    theme: {
      brand: '#2D2A4A',
      brandDark: '#1F1D35',
      bgLight: '#f0eff6',
      accent: '#A51931',
      gradient: 'linear-gradient(135deg, #2D2A4A 0%, #5A5A8C 33%, #FFFFFF 66%, #A51931 100%)',
      lightBgDeco: 'rgba(45,42,74,0.08)',
    },
    default: false,
  },
  {
    code: 'vn',
    name: '越南',
    nameEn: 'Vietnam',
    flag: '🇻🇳',
    currency: 'VND',
    phoneCode: '+84',
    paymentChannel: 'QR',
    theme: {
      brand: '#DA251D',
      brandDark: '#B81E17',
      bgLight: '#fef0ef',
      accent: '#FCD116',
      gradient: 'linear-gradient(135deg, #DA251D 0%, #E53935 50%, #FCD116 100%)',
      lightBgDeco: 'rgba(218,37,29,0.08)',
    },
    default: false,
  },
];

/**
 * 获取国家和站点全局名称
 */
function siteName(countryCode) {
  const names = {
    pk: 'OKEXPAY Pakistan',
    bd: 'OKEXPAY Bangladesh',
    in: 'OKEXPAY India',
    th: 'OKEXPAY Thailand',
    vn: 'OKEXPAY Vietnam',
  };
  return names[countryCode] || 'OKEXPAY';
}

function siteSlogan(countryCode) {
  const slogans = {
    pk: '巴基斯坦原生支付渠道，24小时稳定运营',
    bd: '孟加拉支付渠道，24小时稳定运营',
    in: '印度支付渠道，24小时稳定运营',
    th: '泰国支付渠道，24小时稳定运营',
    vn: '越南支付渠道，24小时稳定运营',
  };
  return slogans[countryCode] || '本土原生支付渠道，24小时稳定运营';
}

/**
 * 导航栏
 */
export function getNavbar(countryCode) {
  return {
    logo: siteName(countryCode),
    slogan: siteSlogan(countryCode),
    links: [
      { label: '首页', href: `/${countryCode}/` },
      { label: '关于我们', href: `/${countryCode}/about/` },
      { label: '服务', href: `/${countryCode}/services/` },
      { label: '联系我们', href: `/${countryCode}/contact/` },
    ],
    contactBtn: '联系客服',
    countryLabel: '选择国家',
  };
}

/**
 * 首页内容
 */
export function getHomeContent(countryCode) {
  const c = countries.find((c) => c.code === countryCode);
  const name = siteName(countryCode);

  // 支付场景
  const scenarios = [
    {
      title: '在线游戏',
      description: `${name}专门为游戏玩家提供在线购买道具、皮肤、设备等虚拟物品的${c.name}快捷稳定的支付渠道。`,
      icon: '🎮',
    },
    {
      title: '社交和直播',
      description: `我们为社交产品出海商家提供了不同的${c.name}支付渠道，极大的提升客户体验感和收单率。`,
      icon: '📱',
    },
    {
      title: '电商和购物',
      description: `${name}为${c.name}跨境电商推出的合规收单服务，简化电商进件等繁琐手续。`,
      icon: '🛒',
    },
  ];

  // 核心数据
  const stats = [
    { value: '850+', label: '服务商户' },
    { value: '5+', label: '开通国家/支付网关' },
    { value: '9+', label: '海外本土合作三方' },
    { value: '3s', label: '极速支付体验' },
  ];

  // 服务优势
  const features = [
    {
      title: '稳定&快捷支付体验',
      description:
        `${name}始终秉承客户体验第一的宗旨不断的优化${c.name}支付场景，其目的是为了给客户带来放心稳定的收单能力。`,
      icon: '⚡',
    },
    {
      title: '自动判断收单风险',
      description:
        '我们杜绝黑产、灰产等行业掺于到收单渠道，这将极大的破坏支付收单规则，为此通过自动判断有效的阻止收单存在的风险。',
      icon: '🛡️',
    },
    {
      title: '支付渠道智能轮询',
      description:
        '无须担心通道因各种问题导致无法付款，我们完美的利用智能轮询保证商户的支付渠道畅通无阻。',
      icon: '🔄',
    },
    {
      title: '7×24小时客服服务',
      description:
        '7×24小时快速响应支持，坚持以用户需求为中心，专业的销售顾问为商户提供一对一专享服务。',
      icon: '💬',
    },
    {
      title: '实时结算安全放心',
      description:
        '不用担心资金安全问题，DO实时结算让您更加放心。',
      icon: '💰',
    },
    {
      title: '接入简单去除繁琐',
      description:
        '提供快速简便的API接口，快速接入让生意无须等待。',
      icon: '🔗',
    },
  ];

  const cms = cmsCountries[countryCode] || {};

  return {
    hero: {
      title: cms.heroTitle || `${c.code === 'pk' ? `${c.name}原生支付` : `${c.name}支付`}`,
      subtitle: cms.heroSubtitle || `${siteName(countryCode)} — ${c.flag} ${c.paymentChannel}${c.code === 'pk' ? '原生' : ''}支付`,
      description: 'Stable and fast native payment',
      ctaText: '联系我们',
      ctaLink: `/${countryCode}/contact/`,
    },
    scenariosTitle: `${c.name}支付场景`,
    scenarios,
    stats,
    aboutTitle: `关于 ${name}`,
    aboutDescription: `${name}专业出海支付聚合平台，主要为游戏、社交、富媒体等出海行业提供一站式支付解决方案，目前我们已经与${c.name}本地支付机构进行深度合作，为出海商户带来便捷、快速、安全稳定的支付渠道。`,
    featuresTitle: '为什么选择我们合作？',
    features,
    partnersTitle: '合作伙伴',
    ctaTitle: '与我们一起出海',
    ctaDescription: `${name}具有丰富经验的出海团队，我们专注于跨境海外支付收单服务，并为游戏出海、社交产品出海商户提供稳定、安全放心支付渠道。`,
    ctaButton: '立即联系',
  };
}

/**
 * 关于我们页面
 */
export function getAboutContent(countryCode) {
  const c = countries.find((c) => c.code === countryCode);
  const name = siteName(countryCode);

  return {
    title: `关于 ${name}`,
    subtitle: `${name}诚信首位`,
    description: [
      `有超过850家不同出海产品客户采用我们产品合作，${name}帮助他们实现出海创业使命。我们严格践行"真诚对待客户"的价值观，因为我们开展的所有业务都以服务客户为目的。正因如此，我们甚至为产品设定了不同的支付场景适应客户。`,
      `客户为我们带来更多优化支付场景的灵感和挑战，同时也帮助我们打造更好的出海支付产品。${name}与${c.name}本土支付商深度合作，为游戏出海等行业带来快捷、放心的支付产品。`,
    ],
    highlights: [
      { icon: '💰', text: 'DO实时出，资金安全放心' },
      { icon: '✅', text: '稳定的支付系统用的安心' },
      { icon: '🔗', text: '接入简单即可快速投入' },
      { icon: '💬', text: '7×24小时客服服务' },
    ],
    stats: [
      { value: '850+', label: '服务商户' },
      { value: '5+', label: '开通国家/支付网关' },
      { value: '9+', label: '海外本土合作三方' },
      { value: '3s', label: '极速支付体验' },
    ],
    teamTitle: '团队',
    teamDescription:
      '以最大的诚信致力于提供最优质的服务，和长期稳健的表现。我们团队的专业技能加上深厚的本地知识，是我们最大的优势。',
  };
}

/**
 * 服务页面
 */
export function getServicesContent(countryCode) {
  const c = countries.find((c) => c.code === countryCode);
  const name = siteName(countryCode);

  return {
    title: '专业服务',
    subtitle: '稳定 & 安全',
    description: `${name}运营团队具有多年海外支付运营经验，不仅仅团队经验，系统经过多年的并发考验从未宕机，客服7×24小时随时协助可以解决各种问题，同时我们还具有一定的支付场景优化经验，为您的产品提升到最佳水平。`,
    features: [
      {
        title: '稳定&快捷支付体验',
        description:
          `${name}始终秉承客户体验第一的宗旨不断的优化${c.name}支付场景，其目的是为了给客户带来放心稳定的收单能力。`,
        icon: '⚡',
      },
      {
        title: '自动判断收单风险',
        description:
          '我们杜绝黑产、灰产等行业掺于到收单渠道，这将极大的破坏支付收单规则，为此通过自动判断有效的阻止收单存在的风险。',
        icon: '🛡️',
      },
      {
        title: '支付渠道智能轮询',
        description:
          '无须担心通道因各种问题导致无法付款，我们完美的利用智能轮询保证商户的支付渠道畅通无阻。',
        icon: '🔄',
      },
      {
        title: '7×24小时客服服务',
        description:
          '7×24小时快速响应支持，坚持以用户需求为中心，专业的销售顾问为商户提供一对一专享服务。',
        icon: '💬',
      },
      {
        title: '实时结算安全放心',
        description: '不用担心资金安全问题，DO实时结算让您更加放心。',
        icon: '💰',
      },
      {
        title: '接入简单去除繁琐',
        description: '提供快速简便的API接口，快速接入让生意无须等待。',
        icon: '🔗',
      },
      {
        title: '机器人自动查询',
        description: '根据不同的需求可以在Telegram群内自动查询业务。',
        icon: '🤖',
      },
      {
        title: '监控业务链',
        description: '监控并防止业务链的异常或者中断，有效的解决业务中断和客户投诉。',
        icon: '📊',
      },
      {
        title: '极速支付体验',
        description:
          '我们通过不同的国家传递最快的CDN网络，以便客户能够享受最佳的无缝支付体验。',
        icon: '🚀',
      },
      {
        title: '数据简洁清晰',
        description:
          '为了便于查询各种数据，我们简化很多繁琐的数据报表，使客户清晰的查询和观看数据报表。',
        icon: '📋',
      },
    ],
    ctaTitle: '我们与您一起扬帆出海',
    ctaDescription: `${name}具有丰富经验的出海团队，我们专注于跨境海外支付收单服务，并为游戏出海、社交产品出海商户提供稳定、安全放心支付渠道。`,
    ctaButton: '联系我们',
  };
}

/**
 * 联系我们页面
 */
export function getContactContent(countryCode) {
  const c = countries.find((c) => c.code === countryCode);
  const name = siteName(countryCode);
  const cc = cmsContact;

  return {
    title: '联系我们',
    subtitle: '合作共创美好明天！',
    info: {
      company: name,
      address: `${c.name} · 商务中心`,
      phone: cc.phone,
      email: cc.email,
      telegram: cc.telegram,
      workingHours: cc.workingHours,
    },
    formTitle: '发送消息',
    formFields: {
      name: '您的姓名',
      email: '您的邮箱',
      message: '您的消息',
      submit: '发送消息',
    },
    socialTitle: '社交网络',
    channels: cc.channels,
  };
}

/**
 * 公共信息（页脚使用）
 */
export function getFooterContent(countryCode) {
  const c = countries.find((c) => c.code === countryCode);
  const name = siteName(countryCode);
  const cc = cmsContact;

  return {
    company: name,
    description: `${name}专业出海支付聚合平台，为游戏、社交、电商等出海行业提供一站式支付解决方案。`,
    copyright: `© ${new Date().getFullYear()} ${name} by OKEXPAY Group | All Rights Reserved`,
    contact: {
      phone: cc.phone,
      email: cc.email,
      telegram: cc.telegram,
    },
    links: [
      { label: '首页', href: `/${countryCode}/` },
      { label: '关于我们', href: `/${countryCode}/about/` },
      { label: '服务', href: `/${countryCode}/services/` },
      { label: '联系我们', href: `/${countryCode}/contact/` },
    ],
  };
}

/**
 * 获取所有页面共享的 SEO 元数据
 */
export function getSeoMeta(countryCode, page) {
  const c = countries.find((c) => c.code === countryCode);
  const name = siteName(countryCode);

  const pageTitles = {
    home: `${name} - ${c.name}原生支付渠道`,
    about: `关于我们 - ${name}`,
    services: `服务支持 - ${name}`,
    contact: `联系我们 - ${name}`,
  };

  return {
    title: pageTitles[page] || name,
    description: `${name}为出海商户提供${c.name}本地支付渠道，支持${c.paymentChannel}等多种支付方式，24小时稳定运营。`,
  };
}
