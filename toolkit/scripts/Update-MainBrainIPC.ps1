$path = "D:\ACKIOS\toolkit\desktop\app\src\main\main.ts"

$content = Get-Content $path -Raw

if ($content -notmatch 'BrainIPC') {

    $content = $content -replace `
'import \{ WorkspaceIPC \} from "\./ipc/workspace/WorkspaceIPC\.js";',
'import { WorkspaceIPC } from "./ipc/workspace/WorkspaceIPC.js";
import { BrainIPC } from "./ipc/brain/BrainIPC.js";'

    $content = $content -replace `
'const workspaceIPC = new WorkspaceIPC\(\);',
'const workspaceIPC = new WorkspaceIPC();
const brainIPC = new BrainIPC();'

    $content = $content -replace `
'runtimeIPC\.register\(\);\s*workspaceIPC\.register\(\);',
'runtimeIPC.register();
    workspaceIPC.register();
    brainIPC.register();'

    Set-Content -Path $path -Value $content -Encoding UTF8
}

Write-Host "main.ts updated."
