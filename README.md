# wasateam-test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 建構想法
1. 參考 bootstrap 的 Scss 模組化管理來存放整個應用程式的色彩，並將連結與元件各自拆分檔案管理，在未來維護上會比較清楚快速
2. 也將重複性質的 Navbar 與 Card 元件拆分出來各自管理，
只要重複例如 layout 或是單一卡片元件都會拆分出來在未來不管延展或是維護都會方便許多