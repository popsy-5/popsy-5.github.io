# 出錯時停止
$ErrorActionPreference = "Stop"

# 構建
npm run build

# 進入構建文件夾
Set-Location dist

# 初始化 git 並提交
git init
git add -A
git commit -m "deploy"

# 推送到 gh-pages 分支
git push -f https://github.com/popsy-5/popsy-5.github.io.git main:gh-pages

# 返回上一級目錄
Set-Location ..