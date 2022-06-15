/**
 * API用の URL を作成する
 */
const getApiUrl = (path: string): string => {
  return [import.meta.env.VITE_EXTERNAL_ENDPOIN, path].join('')
}

/** API のエンドポイント */
export const Api = {
  /** 自己紹介 */
  PROFILE: getApiUrl('/data/profile.json'),
  /** 専門性 */
  SPECIALTY: getApiUrl('/data/specialty.json'),
  /** スキル */
  SKILLS: getApiUrl('/data/skills.json'),
  /** アウトプット */
  OUTPUTS: getApiUrl('/data/outputs.json'),
  /** コンタクト */
  CONTACTS: getApiUrl('/data/contacts.json'),
}
