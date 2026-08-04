function Test-AckiosRuntime {

    if ($PSVersionTable.PSVersion.Major -lt 7) {

        throw @"

ACKIOS requires PowerShell 7 or later.

Current version:
$($PSVersionTable.PSVersion)

Start ACKIOS using:

pwsh

"@

    }

    return $true
}
