# Portfolio Platform Architecture

## Current scope

This first version is a public React portfolio. Its content is intentionally public and is bundled into the client application. Do not place private details, financial records, tokens, email contents, or private notes in `src/data`, client environment variables, or any public route.

Current public routes: `/profile`, `/projects`, `/about`, and `/contact`. The root route (`/`) redirects to `/profile`.

## Reserved private boundary

`/app/*` is reserved for the future authenticated personal dashboard. It is not implemented in the public portfolio phase. A hidden navigation link or client-side route is not security; private features must not be added until a backend can verify authentication and authorization.

Future dashboard modules may include Profile, Finance, private project management, Settings, and other personal tools.

## Public and private data separation

| Public data | Private data |
| --- | --- |
| Approved developer bio, skills, projects, and contact links | Personal profile fields, financial records, notes, and statistics |
| Explicitly allowlisted public API responses | Authenticated and authorized API responses only |
| May be displayed by public routes | Must never be included in public page bundles or public API responses |

When an API and database are introduced, the server should expose separate public and private route groups. Private routes must authenticate the user and authorize access before querying or returning data. Responses should use deliberately selected fields, never broad database records by default.

## Future dashboard architecture

When the first real private feature is ready, the project can evolve to a React client plus a Node/Express API and database. Shared UI components may be reused, but dashboard routes, API endpoints, services, and data models must preserve the public/private boundary. There is no placeholder authentication in the current project.

## Future Gmail finance integration

Gmail is out of scope for the public portfolio phase. Before implementing it, design and review OAuth consent with the narrowest practical Gmail scopes, user-controlled connection/disconnection and data deletion, filtering limited to user-approved financial emails, extraction of only required transaction fields, minimal retention of raw email content, and protected handling of financial data and OAuth tokens.

The intended processing flow is: Gmail -> approved email processing -> transaction field extraction -> categorization -> structured private transaction storage -> authenticated finance dashboard. Finance data must never be returned by public endpoints.
