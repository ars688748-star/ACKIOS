$path = "D:\ACKIOS\toolkit\desktop\app\src\preload\preload.ts"

$content = Get-Content $path -Raw

if ($content -notmatch 'brain:\s*\{') {

$content = $content -replace '\}\);?\s*$',
@"

    ,

    brain: {

        getState: () =>

            ipcRenderer.invoke(

                "brain:state"

            )

    }

});

"@

Set-Content `
-Path $path `
-Value $content `
-Encoding UTF8

}

Write-Host "preload.ts updated."
