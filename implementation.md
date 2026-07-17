# Localized Prototype Refactor Pathway

## Target outcome

Bring the static storefront in line with the v1.0.0-local specification while
preserving its current cart and checkout experience.

## Path 1: document and page localization

1. Set the HTML `lang` attribute to `my`.
2. Replace the generic Vite title with a Burmese Daw Mya Yee Mini-Store title.
3. Remove the unused Vite starter stylesheet so the Tailwind entry stylesheet
   is the only active global styling source.

## Path 2: normalized local order records

1. Keep `daw-mya-yee-orders` as the single source of truth for completed
   orders.
2. Expose a safe `getStoredOrders()` reader that returns an empty array for
   missing or malformed browser storage.
3. Localize number rendering centrally and normalize Myanmar phone digits to
   Arabic digits before an order is persisted.

## Path 3: order-history presentation

1. Add `OrderHistory` under `src/components/`.
2. Load saved orders when the history panel mounts, newest first.
3. Render each saved order as an invoice containing order reference, date,
   customer details, item quantities, unit prices, line totals, and grand
   total.
4. Provide an empty state and an explicit Burmese close control.

## Path 4: application integration

1. Keep the visibility state for order history in `App`.
2. Add a header control that opens the history panel.
3. Mount `OrderHistory` only while it is open and pass a close callback.

## Verification path

1. Confirm there are no `console.log` calls.
2. Run the test script when available, then run the production build.
3. Start Vite to verify that the application loads without React hook warnings.
