# BloomOS · GitHub Pages 发布包

## 文件说明

- `index.html` — 主应用。已经移除初次启动时的假打卡、假产检和假体重记录；保留原 LocalStorage key 和 JSON 导入导出机制。
- `styles.css` — 本地预编译 Tailwind 样式，无需浏览器加载 Tailwind Play CDN。
- `icons.js` — 自带轻量线性图标，无需访问国外图标 CDN。
- `manifest.webmanifest`、`sw.js`、`icons/` — iPhone 主屏幕 Web App 和离线应用外壳。
- `CNAME` — `baby.831212.xyz`，用于 GitHub Pages 自定义域名。
- `.nojekyll` — 禁用 GitHub Pages 的 Jekyll 预处理。

## 部署方法

1. GitHub 创建名为 `bloom-os` 的 **Public** 仓库。GitHub Free 的 Pages 适用于公开仓库；**仓库公开不代表记录被云端同步**，但网页及代码、默认预产期为公开信息。切勿将 JSON 备份、产检照片、检查报告上传 GitHub。
2. 进入仓库 → `Add file` → `Upload files` → 上传本发布包**内的所有文件及目录**（不要只上传 ZIP），并提交到 `main` 分支。
3. 仓库 → `Settings` → `Pages` → `Deploy from a branch` → `main`、`/(root)` → `Save`。
4. Pages → `Custom domain` 输入 `baby.831212.xyz`，保存。仓库内已有 CNAME，同一域名即可。
5. DNSPod → 域名 `831212.xyz` → 添加：主机记录 `baby`、类型 `CNAME`、记录值 `haolanchen88-stack.github.io`、线路默认、TTL 默认。**不要**填仓库名，也不要改域名已有其他解析记录。
6. DNS 检查通过、证书颁发完成后，GitHub Pages 勾选 `Enforce HTTPS`。GitHub 文档提醒 HTTPS 证书可能需要较长时间才可用，勿以 15 分钟为保证。
7. 在 iPhone 的 Safari 打开 `https://baby.831212.xyz` → 分享 → 添加到主屏幕，必要时打开 `作为 Web App 打开`。

## 注意

- 首次启动数据为空，不再产生演示性的真实孕期打卡。**如果原版在浏览器已使用过，先从原版本导出 JSON，再在新域名首页导入。**不同域名及 Safari / iOS 主屏幕 App 存储隔离，数据不会自动迁移。
- 所有打卡和产检记录只存在当前设备 LocalStorage；不支持夫妻两手机自动同步。备份 JSON 是敏感信息，请自行加密保管，至少每周导出一次。
- 清理 Safari / App 网站数据、换机或卸载桌面 Web App 都可能丢失本地记录。主屏幕 Web App 不保证数据永不丢失。
- 所有页面样式与图标均在发布包内；首次联网成功后才可建立离线缓存，不能保证每台设备上离线数据永不丢失。
- Service Worker 缓存仅在 HTTPS 域名生效，第一次访问必须联网。发布更新后请递增 `sw.js` 的 `CACHE` 版本与 CSS 的查询版本，以避免旧缓存。
- 本工具的发育参数、饮水、体重建议仅用于一般性信息与记录，并非医生诊断或个体化诊疗建议。

## 预计访问地址

- 默认：`https://haolanchen88-stack.github.io/bloom-os/`（自定义域名成功配置后会跳转或映射）
- 正式：`https://baby.831212.xyz`

> 包是准备就绪的发布物，不等于 GitHub 仓库已经创建或 DNS/HTTPS 已配置完成。
