
function Check-ForbiddenPaths {

    param(

        $GitStatus,

        $Rules

    )

    $errors = @()

    foreach ($file in $GitStatus.Files) {

        foreach ($rule in $Rules.forbiddenPaths) {

            if ($file.Path.StartsWith($rule.Replace('/','\'))) {

                $errors += [PSCustomObject]@{

                    Path = $file.Path

                    Rule = $rule

                    Reason = "Forbidden repository area."

                }

            }

        }

    }

    return $errors

}

