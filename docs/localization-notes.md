# Localization Notes

- The app uses **i18next** with two resource files:
  - `src/i18n/en/translation.json`
  - `src/i18n/ar/translation.json`
- Language is stored in `uiStore` and toggled via `LanguageSwitcher`; `dir` is updated automatically on change.

## Key Structure
- `app`, `nav`, `footer`, `actions`, `status`, `roles`, `forms`
- Domain sections:
  - `categories` + `categoriesDescriptions`
  - `servicesDictionary` (service names) and `services.details.<serviceId>` (summary/description/highlights)
  - `orders.<orderId>.address|notes`
  - `clients.<clientId>.addresses[]` and `clients.names.<displayName>`
  - `workers.<workerId>.name|area` and `workers.names.<displayName>` for AI suggestions
  - `reviews.<reviewId>.comment`
  - `ai.suggestions.<orderId>.reason`
  - `supportUsers.<id>.notes`

## Adding New Text
1. Add English and Arabic strings under matching sections in both translation files.
2. Reference in code with `t("section.key")`, e.g. `t("services.details.svc-new.highlights")`.
3. Avoid hard-coded UI strings; use IDs (service/order/worker) to fetch localized fields.

## Mock Data Rendering
- Mock data keeps IDs and numeric values; all visible labels come from i18n:
  - Services: names/highlights pulled from `servicesDictionary` + `services.details`.
  - Orders: addresses/notes pulled from `orders.<id>`.
  - Clients/Workers: display names and areas pulled from `clients.names` and `workers.<id>`.
  - Reviews: comments from `reviews.<id>.comment`.

## Example
- Add a page title:
  - In `translation.json`: `"pages": { "newReportTitle": "New report" }` and Arabic equivalent.
  - In JSX: `<h1>{t("pages.newReportTitle")}</h1>`.
