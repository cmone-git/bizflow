CM FILINGS ADMIN - REVISED SHELL

1. Upload the complete contents of this folder to admin.cmfilings.com.
2. Create:
   assets/logo.png
   assets/name.png
   using your actual CM FILINGS assets.
3. firebase-config.js is included and is used by index.html.
4. index.html is now the permanent application shell.
5. dashboard.html, clients.html, compliance.html, credentials.html, company.html,
   calender.html, contacts.html, contact.html, data-import.html, invoice.html,
   pay.html and transactions.html load inside the central frame.
6. The permanent bottom navigation is:
   Dashboard / Clients / Compliance / Credentials / Menu.
7. The dashboard KPI values are read live from Firestore:
   - Pending Compliance: compliances where status is not Completed
   - Total Outstanding Dues: unpaid compliance amounts
   - Priority Tasks Due: pending compliance due within 7 days
   - Active Clients: Active + Regular client records
8. Admin authorization is role-based:
   users/{AUTH_UID} -> role = "admin"
   The UID is the Firebase Authentication UID. The email field is informational.
9. Do not put passwords or Firebase Admin SDK credentials in HTML.
