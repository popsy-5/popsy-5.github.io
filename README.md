# POPSY 舞蹈團隊網站

## 項目概述

這是一個使用 React + TypeScript + Material-UI 開發的舞蹈團隊展示網站。網站包含團隊介紹、成員展示、照片集和視頻展示等功能，採用響應式設計，確保在不同設備上都能有良好的顯示效果。本網站已針對搜索引擎優化，包含完整的SEO配置，有助於提高在搜索引擎中的可見度。

## 技術棧

- **前端框架**: React 18.2.0
- **開發語言**: TypeScript 5.0.2
- **UI 框架**: Material-UI (MUI) v5.14.18
- **路由管理**: React Router v6.19.0
- **構建工具**: Vite 5.0.0
- **樣式解決方案**: Emotion 11.11.1
- **圖標庫**: @mui/icons-material 5.14.18
- **組件庫**: @mui/lab 6.0.0-beta.30

## 開發環境配置

### 必要條件

- Node.js >= 14.0.0
- npm >= 6.14.0
- Git

### IDE 推薦

- Visual Studio Code
  - ESLint 插件
  - Prettier 插件
  - TypeScript 插件

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

1. 克隆項目：
```bash
git clone https://github.com/popsy-5/popsy-5.github.io.git
cd popsy-5.github.io
```

2. 安裝依賴：
```bash
npm install
```

3. 開發模式運行：
```bash
npm run dev
```

4. 生產環境構建：
```bash
npm run build
```

5. 預覽生產構建：
```bash
npm run preview
```

## 部署說明

### GitHub Pages 部署

1. 確保 `vite.config.ts` 中的 `base` 配置正確：
```typescript
export default defineConfig({
  base: '/popsy-5.github.io/',
  // 其他配置...
})
```

2. 在 GitHub 倉庫設置中啟用 GitHub Pages：
   - 進入倉庫設置 > Pages
   - Source 選擇 GitHub Actions

3. 項目已配置自動部署工作流（`.github/workflows/deploy.yml`）：
   - 當推送到 main 分支時自動觸發部署
   - 構建產物會自動部署到 gh-pages 分支

### SEO 配置

1. **Sitemap 配置**：
   - 項目根目錄已包含 `sitemap.xml` 文件
   - 每次構建時會自動更新網站地圖
   - 確保所有頁面都被正確索引

2. **Robots.txt 配置**：
   - 項目根目錄已包含 `robots.txt` 文件
   - 默認允許所有搜索引擎爬蟲訪問
   - 可根據需要調整爬蟲權限

3. **搜索引擎提交**：
   - **Google Search Console**：
     - 使用 HTML 文件驗證：已包含 `google-site-verification.html`
     - 提交 sitemap.xml 到 Google Search Console
     - 監控索引狀態和搜索表現
   
   - **Bing Webmaster Tools**：
     - 使用相同的 HTML 驗證文件或 meta 標籤驗證
     - 提交 sitemap.xml 到 Bing Webmaster Tools
     - 監控索引狀態和搜索表現

4. **結構化數據**：
   - 項目包含 `public/structured-data.json` 文件
   - 已實現 JSON-LD 格式的結構化數據
   - 包含組織、網站和活動等相關信息
   - 有助於在搜索結果中顯示富媒體結果

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

## 代碼規範

### TypeScript 規範

- 使用 interface 而不是 type 定義對象類型
- 為所有組件和函數添加類型註解
- 避免使用 any 類型

### React 最佳實踐

- 使用函數式組件和 Hooks
- 組件文件使用 .tsx 擴展名
- 遵循組件命名規範（PascalCase）

### 樣式規範

- 使用 MUI 的 styled 組件或 sx 屬性
- 遵循 Material Design 設計規範
- 保持樣式的可維護性和復用性

## 維護說明

- 代碼採用 ESLint 進行規範檢查
- 使用 TypeScript 確保類型安全
- 組件採用函數式組件和 Hooks
- 遵循 Material-UI 的設計規範

## 貢獻指南

1. Fork 項目到自己的倉庫
2. 創建新的功能分支
3. 提交代碼更改
4. 確保代碼通過 lint 檢查
5. 提交 Pull Request

## 瀏覽器支持

- Chrome (推薦)
- Firefox
- Safari
- Edge

## 注意事項

- 開發時請確保 Node.js 版本 >= 14
- 請遵循項目既定的代碼風格和組件結構
- 提交代碼前請運行 lint 檢查
- 確保所有提交都有清晰的描述信息

## SEO 最佳實踐

### 頁面優化

- 每個頁面都應有唯一的 `<title>` 和 meta description
- 使用語義化 HTML 標籤（如 `<header>`, `<nav>`, `<main>`, `<footer>`）
- 確保頁面加載速度快，圖片已優化
- 實現響應式設計，適配各種設備

### 內容優化

- 使用適當的標題層級（h1, h2, h3...）
- 內容應包含相關關鍵詞，但避免關鍵詞堆砌
- 定期更新網站內容，保持新鮮度
- 添加 alt 屬性到所有圖片

### 技術優化

- 確保所有頁面都有規範的 URL
- 實現 HTTPS 安全連接
- 添加 Open Graph 和 Twitter Card 標籤，優化社交媒體分享
- 使用 `<link rel="canonical">` 避免重複內容
- 實現漸進式網頁應用（PWA）功能，提升用戶體驗