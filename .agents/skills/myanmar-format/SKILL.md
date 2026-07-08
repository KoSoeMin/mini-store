---
name: myanmar-format
description: To be used whenever writing code that displays or saves prices, numbers, and phone numbers.
---

# Myanmar Format

Use this skill when writing or modifying project code that displays or persists prices, numbers, or phone numbers.

## Rules

- Format prices with Burmese numerals, comma separators for thousands, and the suffix `ကျပ်`.
- Render prices like `၃,၅၀၀ ကျပ်`.
- Accept phone numbers typed with either Burmese or Arabic numerals.
- Convert phone numbers to Arabic numerals before saving them.
- Import and use the existing number conversion helpers from `src/utils/format.js`.
- Do not write new number conversion functions.

## Implementation Notes

- Check `src/utils/format.js` before editing formatting behavior.
- Prefer the existing helper names and patterns from `src/utils/format.js` over adding wrappers.
- Keep all user-visible UI text in Burmese, following the project instructions.
