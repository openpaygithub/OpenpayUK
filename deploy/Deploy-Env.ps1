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
$files = Get-ChildItem -File -Exclude "index.html" -Recurse

aws s3 sync --acl public-read $dir $hostingBucket

ForEach ($f in $files)
{
    $extn = [IO.Path]::GetExtension($f)

    if ($extn -ne ".html" -And $extn -ne "")
    {
        #Write-Host "Skipping" $f
        continue;
    }
    
    # $newfile = $f.FullName -replace ".html", ""
    # cp $f.FullName $newfile
    $relativePath = Get-Item $f | Resolve-Path -Relative 
    $s3Key = $relativePath -replace "\.\\", "" -replace "\\", "/"
    # Write-Host "Modifying" $f "=>" $s3Key
    aws s3 cp --content-type "text/html" --acl public-read $f.FullName $hostingBucket/$s3Key
}

cd $cwd

