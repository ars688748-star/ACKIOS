Set-StrictMode -Version Latest


function Get-AckiosSmoothProgress {

    param(
        [int]$Progress
    )


    $t =
        $Progress / 100


    $smooth =
        $t * $t * (3 - 2 * $t)


    return [int]($smooth * 100)

}
