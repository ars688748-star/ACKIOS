Set-StrictMode -Version Latest

function Test-WorkflowBackupFiles {

    $root = Resolve-AckiRoot

    $files = Get-ChildItem `
        -Path $root `
        -Recurse `
        -File `
        -Include "*.bak","*.backup","*.before*" `
        -ErrorAction SilentlyContinue |
        Where-Object {
            $_.FullName -notmatch "\\dist\\"
        }


    $violations = @()


    foreach($file in $files){

        $path = $file.FullName
        $name = $file.Name


        if(
            $path -match "\\docs\\stories\\" -or
            $path -match "\\scripts\\workflow\\" -or
            $path -match "\\scripts\\repository\\" -or
            $path -match "\\scripts\\maintenance\\" -or
            $path -match "\\src\\" -or
            $path -match "\\dist\\" -or
            $path -match "\\.work\\state\\" -or
            $path -match "\\.private\\" -or
            $name -match "\.story\d+\."
        ){
            continue
        }


        $violations += $path

    }


    return $violations

}





