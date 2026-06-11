# Builds a clean static production package from the approved public website.
# Source commit: 7f3a777 — do not modify homepage behavior; copy only live files.

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot
$Out = Join-Path $PSScriptRoot "za-erp-public-live"

if (Test-Path $Out) {
  Remove-Item -Path $Out -Recurse -Force
}
New-Item -ItemType Directory -Path $Out -Force | Out-Null

$files = @(
  "index.html",
  "privacy.html",
  "terms.html",
  "updates.html",
  "favicon.ico",
  "styles.css",
  "styles-polish.css",
  "styles-experience.css",
  "styles-industries.css",
  "styles-i18n.css",
  "styles-legal.css",
  "styles-updates.css",
  "script.js"
)

foreach ($f in $files) {
  Copy-Item -Path (Join-Path $Root $f) -Destination $Out -Force
}

$contentFiles = @(
  "homepage-content.js",
  "homepage-locale-en.js",
  "updates-content.js"
)
New-Item -ItemType Directory -Path (Join-Path $Out "content") -Force | Out-Null
foreach ($f in $contentFiles) {
  Copy-Item -Path (Join-Path (Join-Path $Root "content") $f) -Destination (Join-Path $Out "content") -Force
}

New-Item -ItemType Directory -Path (Join-Path $Out "js") -Force | Out-Null
Copy-Item -Path (Join-Path (Join-Path $Root "js") "*") -Destination (Join-Path $Out "js") -Force

New-Item -ItemType Directory -Path (Join-Path $Out "assets") -Force | Out-Null
Copy-Item -Path (Join-Path (Join-Path $Root "assets") "*") -Destination (Join-Path $Out "assets") -Recurse -Force

Write-Host "Production package ready: $Out"
Get-ChildItem -Path $Out -Recurse -File | Measure-Object | ForEach-Object {
  Write-Host ("Files: {0}" -f $_.Count)
}
