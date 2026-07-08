---
name: check-feature
description: Checks to run after completing each feature. To be used before committing.
---

# Verifications Post-Feature

Run these checks before committing a completed feature.

1. Run `npm test` and verify that all tests pass.
2. Run `npm run build` and ensure there are no build errors.
3. Search for any residual `console.log` calls and remove them if found.
4. Check whether modified files comply with the `myanmar-format` rules.
5. If everything looks good, suggest a short commit message in Burmese.
