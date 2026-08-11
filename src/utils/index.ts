export function cns(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ")
}

const pad = (n: number) => String(n).padStart(2, "0")

/** 秒级时间戳 -> MM-DD HH:mm:ss */
export function formatDate(unix: number) {
  const d = new Date(unix * 1000)
  return `${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
}

/** randomUUID 仅在安全上下文可用，http 页面回退到时间戳 + 随机串 */
export const uid = () =>
  globalThis.crypto?.randomUUID?.() ??
  `${Date.now()}-${Math.random().toString(36).slice(2)}`
