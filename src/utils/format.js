const MYANMAR_DIGITS = '၀၁၂၃၄၅၆၇၈၉'

export function toMyanmarNumerals(value) {
  return String(value).replace(/\d/g, (digit) => MYANMAR_DIGITS[digit])
}

export function toArabicNumerals(value) {
  return String(value).replace(/[၀-၉]/g, (digit) =>
    String(MYANMAR_DIGITS.indexOf(digit)),
  )
}

export function formatKyat(price) {
  return `${toMyanmarNumerals(Number(price).toLocaleString('en-US'))} ကျပ်`
}

export function formatOrderDate(createdAt) {
  return new Intl.DateTimeFormat('my-MM', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(createdAt))
}
