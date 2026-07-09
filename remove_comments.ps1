$exts = @('.html', '.css', '.js', '.json', '.md', '.txt')
$modified = @()

function Remove-Comments {
    param([string]$text, [string]$ext)
    switch ($ext) {
        '.html' {
            $text = [regex]::Replace($text, '<!--[\s\S]*?-->', '', [System.Text.RegularExpressions.RegexOptions]::Singleline)
            $text = [regex]::Replace($text, '/\*[\s\S]*?\*/', '', [System.Text.RegularExpressions.RegexOptions]::Singleline)
            $text = [regex]::Replace($text, '(?<!:)//.*$', '', [System.Text.RegularExpressions.RegexOptions]::Multiline)
            return $text
        }
        '.css' {
            return [regex]::Replace($text, '/\*[\s\S]*?\*/', '', [System.Text.RegularExpressions.RegexOptions]::Singleline)
        }
        '.js' {
            $text = [regex]::Replace($text, '/\*[\s\S]*?\*/', '', [System.Text.RegularExpressions.RegexOptions]::Singleline)
            $text = [regex]::Replace($text, '(?<!:)//.*$', '', [System.Text.RegularExpressions.RegexOptions]::Multiline)
            return $text
        }
        '.json' {
            $text = [regex]::Replace($text, '/\*[\s\S]*?\*/', '', [System.Text.RegularExpressions.RegexOptions]::Singleline)
            $text = [regex]::Replace($text, '(?<!:)//.*$', '', [System.Text.RegularExpressions.RegexOptions]::Multiline)
            return $text
        }
        '.md' { return [regex]::Replace($text, '<!--[\s\S]*?-->', '', [System.Text.RegularExpressions.RegexOptions]::Singleline) }
        '.txt' { return [regex]::Replace($text, '<!--[\s\S]*?-->', '', [System.Text.RegularExpressions.RegexOptions]::Singleline) }
        default { return $text }
    }
}

Get-ChildItem -Recurse -File | Where-Object { $exts -contains $_.Extension.ToLower() } | ForEach-Object {
    try { $orig = Get-Content -Raw -Encoding UTF8 -Path $_.FullName } catch { return }
    $updated = Remove-Comments $orig $_.Extension.ToLower()
    if ($updated -ne $orig) {
        Set-Content -Encoding UTF8 -Path $_.FullName -Value $updated
        $modified += $_.FullName
    }
}
Write-Output "FILES_MODIFIED:$($modified.Count)"
$modified | ForEach-Object { Write-Output $_ }
