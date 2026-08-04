
function Get-GitStatus {

    $raw = git status --porcelain

    $files = @()

    foreach ($line in $raw) {

        if (![string]::IsNullOrWhiteSpace($line)) {

            $files += [PSCustomObject]@{

                Status = $line.Substring(0,2).Trim()

                Path = $line.Substring(3).Trim()

            }

        }

    }

    return [PSCustomObject]@{

        Raw = $raw

        Files = $files

    }

}

