$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:5500/")
$listener.Start()
Write-Output "🎓 CampusBazaar Student Marketplace running at http://localhost:5500/"
Write-Output "Press Ctrl+C to stop the local server."

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $path = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrWhiteSpace($path)) {
            $path = "index.html"
        }

        # Fast handle for favicon
        if ($path -eq "favicon.ico") {
            $response.StatusCode = 204
            $response.KeepAlive = $false
            $response.Close()
            continue
        }

        $fullPath = Join-Path $PSScriptRoot $path

        if (-not (Test-Path -Path $fullPath -PathType Leaf)) {
            $response.StatusCode = 404
            $response.KeepAlive = $false
            $response.Close()
            continue
        }

        $bytes = [System.IO.File]::ReadAllBytes($fullPath)
        $ext = [System.IO.Path]::GetExtension($fullPath).ToLower()

        switch ($ext) {
            ".html" { $response.ContentType = "text/html; charset=utf-8" }
            ".css"  { $response.ContentType = "text/css; charset=utf-8" }
            ".js"   { $response.ContentType = "application/javascript; charset=utf-8" }
            ".json" { $response.ContentType = "application/json; charset=utf-8" }
            ".png"  { $response.ContentType = "image/png" }
            ".jpg"  { $response.ContentType = "image/jpeg" }
            ".jpeg" { $response.ContentType = "image/jpeg" }
            ".webp" { $response.ContentType = "image/webp" }
            ".svg"  { $response.ContentType = "image/svg+xml" }
            Default { $response.ContentType = "application/octet-stream" }
        }

        $response.Headers.Add("Cache-Control", "no-cache")
        $response.KeepAlive = $false
        $response.ContentLength64 = $bytes.Length
        $response.OutputStream.Write($bytes, 0, $bytes.Length)
        $response.Close()
    }
    catch {
        # Continue loop on error
    }
}
