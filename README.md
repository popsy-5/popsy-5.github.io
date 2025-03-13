# POPSY 舞蹈團隊網站

## 項目概述

這是一個使用 React + TypeScript + Material-UI 開發的舞蹈團隊展示網站。網站包含團隊介紹、成員展示、照片集和視頻展示等功能，採用響應式設計，確保在不同設備上都能有良好的顯示效果。

## 技術棧

- **前端框架**: React 18.2.0
- **開發語言**: TypeScript 5.0.2
- **UI 框架**: Material-UI (MUI) v5.14.18
- **路由管理**: React Router v6.19.0
- **構建工具**: Vite 5.0.0
- **樣式解決方案**: Emotion 11.11.1
- **圖標庫**: @mui/icons-material 5.14.18
- **組件庫**: @mui/lab 6.0.0-beta.30

## 項目結構

```
src/
├── components/     # 共用組件
│   └── Navbar.tsx  # 導航欄組件
├── pages/          # 頁面組件
│   ├── Home.tsx    # 首頁
│   ├── Team.tsx    # 團隊介紹
│   ├── Members.tsx # 成員介紹
│   ├── Gallery.tsx # 照片展示
│   └── Videos.tsx  # 視頻展示
├── theme.ts        # MUI 主題配置
├── App.tsx         # 應用程序主組件
└── main.tsx        # 應用程序入口
```

## 功能特點

- 響應式導航欄，支持移動端顯示
- 自定義 Material-UI 主題
- 照片畫廊支持分類和彈窗預覽
- 視頻展示支持分類和相關視頻推薦
- 路由管理實現頁面切換

## 安裝和運行

1. 安裝依賴：
```bash
npm install
```

2. 開發模式運行：
```bash
npm run dev
```

3. 生產環境構建：
```bash
npm run build
```

4. 預覽生產構建：
```bash
npm run preview
```

## 開發指南

### 添加新頁面

1. 在 `src/pages` 目錄下創建新的頁面組件
2. 在 `src/App.tsx` 中添加對應路由
3. 在 `src/components/Navbar.tsx` 的 `pages` 數組中添加導航項

### 主題定制

在 `src/theme.ts` 文件中可以自定義：
- 調色板顏色
- 排版樣式
- 組件默認樣式

## 維護說明

- 代碼採用 ESLint 進行規範檢查
- 使用 TypeScript 確保類型安全
- 組件採用函數式組件和 Hooks
- 遵循 Material-UI 的設計規範

## 瀏覽器支持

- Chrome (推薦)
- Firefox
- Safari
- Edge

## 注意事項

- 開發時請確保 Node.js 版本 >= 14
- 請遵循項目既定的代碼風格和組件結構
- 提交代碼前請運行 lint 檢查