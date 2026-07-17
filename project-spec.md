# Daw Mya Yee Mini-Store

**Version:** v1.0.0-local  
**Status:** Localized prototype

## Product goal

Daw Mya Yee Mini-Store is a Burmese-language grocery ordering prototype for a
single local shop. Customers can browse a fixed catalogue, build a cart, submit
their delivery details, and keep a receipt on the same device.

## Local-first scope

- The application is a static React single-page application.
- It has no backend, authentication, payment gateway, or remote database.
- The catalogue is maintained in `src/data/products.json`.
- Product imagery is fully localized in `public/images/`, so the catalogue is
  available without remote image or cloud-service dependencies.
- Cart data is retained in browser local storage under `daw-mya-yee-cart`.
- Completed orders are appended to browser local storage under
  `daw-mya-yee-orders`.
- A customer can open order history to review invoices previously saved in the
  same browser and origin.

## Localization requirements

- Set the document locale to Myanmar (`my`) and use Burmese customer-facing UI
  text.
- Render monetary values as Myanmar Kyat with Burmese digits, grouped
  thousands, and the suffix `ကျပ်` (for example, `၃,၅၀၀ ကျပ်`).
- Accept delivery phone numbers typed using Myanmar or Arabic digits; store a
  normalized Arabic-digit value.
- Preserve the customer-entered name and delivery address exactly as entered.

## Core customer journeys

1. Browse product cards and add one or more items to the cart.
2. Adjust quantities, remove items, or clear the cart.
3. Enter name, phone number, and delivery address, then submit an order.
4. Review the generated receipt and contact the store through Viber.
5. Open order history and view saved invoices without leaving the page.

## Data shape

```js
{
  id: Number,
  orderNumber: String,
  customer: { name: String, phone: String, address: String },
  items: Array<{
    id: Number,
    name: String,
    price: Number,
    image: '/images/products/rice.jpg',
    quantity: Number
  }>,
  total: Number,
  createdAt: String
}
```

## Constraints

- Local storage belongs only to the current browser profile and can be cleared
  by the customer.
- Order data must be treated as a customer-side convenience, not a reliable
  store fulfilment system.
- Production order management, payment, stock control, and administration
  require a future server-side implementation.
