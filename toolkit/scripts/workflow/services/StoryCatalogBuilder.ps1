Set-StrictMode -Version Latest

. "$PSScriptRoot\..\models\StoryInfo.ps1"

function Get-StoryCatalog {

    $root = Resolve-AckiRoot

    Get-ChildItem "$root\docs\stories\*.md" |
        Sort-Object Name |
        ForEach-Object {

            $story = Get-Story $_.BaseName

            if($null -ne $story){

                [StoryInfo]@{

                    Id = $story.Id

                    Title = $story.Title

                    Status = $story.Status

                    Description = $story.Description

                }

            }

        }

}
