param([string] $account)

if ($account -eq "NonProd")
{
    $cfBucket = "openpay-nonprod-cloudformation-ap-southeast-2"
}
elseif ($account -eq "Prod")
{
    $cfBucket = "openpay-prod-cloudformation-ap-southeast-2"
}
else
{
    Write-Host "Invalid account"
    Exit 1
}

$cwd = Get-Location

cd $PSScriptRoot

aws cloudformation package `
    --template-file "$PSScriptRoot/base/master.yaml" `
    --s3-bucket $cfBucket `
    --s3-prefix OpenpayWeb `
    --output-template-file "$PSScriptRoot/base/packaged-master.yaml"

aws cloudformation deploy `
    --template-file "$PSScriptRoot/base/packaged-master.yaml" `
    --stack-name OpenpayWeb-Base `
    --capabilities CAPABILITY_NAMED_IAM `
    --tags project=OpenpayWeb

cd $cwd