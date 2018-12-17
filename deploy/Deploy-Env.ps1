param([string] $env, [string] $dir)

if ($env -eq "Dev")
{
    $hostingBucket = "s3://www.dev.openpay.com.au"
}
elseif ($env -eq "ProdAU")
{
    $hostingBucket = "s3://www.openpay.com.au"
}
else
{
    Write-Host "Invalid env"
    Exit 1
}

$cwd = Get-Location

Set-Location $dir
$files = Get-ChildItem -File -Filter "*.html" -Recurse

aws s3 sync --acl public-read $dir $hostingBucket

ForEach ($f in $files)
{
    $newfile = $f.FullName -replace ".html", ""
    cp $f.FullName $newfile
    $relativePath = Get-Item $newfile | Resolve-Path -Relative 
    $s3Key = $relativePath -replace "\.\\", "" -replace "\\", "/"

    aws s3 cp --content-type "text/html" --acl public-read $newfile $hostingBucket/$s3Key
}

cd $cwd

