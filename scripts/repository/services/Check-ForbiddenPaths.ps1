function Check-ForbiddenPaths {

    param(

        $GitStatus,

        $Rules

    )

    $errors = @()

    foreach ($file in $GitStatus.Files) {

        if ($file.Status -eq "??") {
            continue
        }

        foreach ($rule in $Rules.forbiddenPaths) {

            if ($file.Path.Replace('\','/').StartsWith($rule)) {

                $errors += [PSCustomObject]@{

                    Path   = $file.Path
                    Rule   = $rule
                    Type   = "Path"
                    Reason = "Forbidden repository area."

                }

            }

        }

        foreach ($pattern in $Rules.forbiddenPatterns) {

            if ($file.Path -like $pattern) {

                $errors += [PSCustomObject]@{

                    Path   = $file.Path
                    Rule   = $pattern
                    Type   = "Pattern"
                    Reason = "Forbidden filename pattern."

                }

            }

        }

    }

    return $errors

}

