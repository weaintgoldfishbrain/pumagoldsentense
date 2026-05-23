# 沈伯洋動漫市政願景產生器

一個可部署到 GitHub Pages 的 React + TypeScript 靜態網站。使用者輸入台北市政題目後，前端以內建語料與規則式分類產生「正式助選風」願景金句卡。

> 本工具為非官方、非本人發言、產生式政治文案模擬，不代表沈伯洋本人或任何競選團隊。

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages

推送到 `main` 後，GitHub Actions 會自動建置並發布 `dist/` 到 GitHub Pages。
