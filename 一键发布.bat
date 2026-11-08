@echo off
chcp 65001 >nul
title 博客一键发布脚本

echo 正在检查本地更新...
echo.

cd /d "%~dp0"

git status --short
echo.

set /p msg="请输入更新说明（直接按回车默认为“更新文章与内容”）："
if "%msg%"=="" set msg=更新文章与内容

echo.
echo 正在提交并推送到 GitHub...
git add .
git commit -m "%msg%"
git push origin main

echo.
if %errorlevel% equ 0 (
    echo ========================================================
    echo ✅ 推送成功！Cloudflare 会在 1-2 分钟内自动更新上线。
    echo 访问地址：https://www.remielle.ccwu.cc
    echo ========================================================
) else (
    echo.
    echo ========================================================
    echo ❌ 推送失败，请检查网络是否通畅或代理设置。
    echo ========================================================
)

echo.
pause
