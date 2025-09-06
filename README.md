# Password Manager (Local) — React + styled-components

![alt text](image.png)

Store website/app credentials locally with a simple **Master Password UI lock** (visual gate only). No backend, dark-theme friendly, and fully **LocalStorage** powered.

## ⚠️ Security Note

This is a **mini-project** for UI/UX practice. The “Master Password” is **UI-only** (no real encryption). For production, use the **Web Crypto API** (PBKDF2/Argon2 + AES-GCM) and never store secrets in plaintext.

## Features

-   **Master Password lock screen** (UI-only; session-based unlock/lock)
-   Add credentials: **site/app**, **username/email**, **password**, **login URL**, **tags**, **notes**
-   **Reveal/Hide** password, **Copy** username/password/URL, **Generate** random password
-   Inline **edit**, **duplicate**, **delete** with confirm modal
-   **Single-row filter bar** (wraps on small screens): filter by **Tag**, **Sort**, **Search**
-   Responsive layout with transparent cards and subtle borders (dark-theme friendly)
-   Data persists in **LocalStorage** (refresh-safe)

## Local Install

```bash
git clone https://github.com/a2rp/password-manager.git
cd password-manager
npm i
npm run dev
```
