import { countries } from '@/data/content';

/**
 * 根据国家代码获取国家信息
 */
export function getCountry(code) {
  return countries.find((c) => c.code === code) || countries[0];
}

/**
 * 验证国家代码是否有效
 */
export function isValidCountry(code) {
  return countries.some((c) => c.code === code);
}

/**
 * 获取所有国家代码
 */
export function getAllCountryCodes() {
  return countries.map((c) => c.code);
}

/**
 * 获取默认国家代码
 */
export function getDefaultCountryCode() {
  const defaultCountry = countries.find((c) => c.default);
  return defaultCountry ? defaultCountry.code : countries[0].code;
}
