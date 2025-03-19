# 設置錯誤時停止執行
$ErrorActionPreference = "Stop"

# 確保在正確的目錄中
Set-Location $PSScriptRoot

# 執行構建
npm run build

# 檢查構建是否成功
if ($LASTEXITCODE -ne 0) {
    Write-Error "構建失敗"
    exit 1
}

# 創建臨時目錄
$tempDir = "temp_deploy"
if (Test-Path $tempDir) {
    Remove-Item -Recurse -Force $tempDir
}
New-Item -ItemType Directory -Path $tempDir

# 複製構建文件到臨時目錄
Copy-Item -Path "dist\*" -Destination $tempDir -Recurse

# 初始化 git 倉庫
Set-Location $tempDir
git init
git checkout -b gh-pages

# 添加所有文件
git add -A

# 提交更改
git config --local user.email "github-actions[bot]@users.noreply.github.com"
git config --local user.name "github-actions[bot]"
git commit -m "Deploy to GitHub Pages" --allow-empty

# 推送到遠程倉庫
git remote add origin https://github.com/popsy-5/popsy-5.github.io.git
git push -f origin gh-pages

# 清理
Set-Location ..
Remove-Item -Recurse -Force $tempDir

Write-Host "部署完成"