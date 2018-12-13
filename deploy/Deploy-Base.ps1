param([string] $account)

if ($account -eq "NonProd")
{
    $cfBucket = "openpay-nonprod-cloudformation-ap-southeast-2"
    $hostingBucket = "www.dev.openpay.com.au"
}
elseif ($account -eq "Prod")
{
    $cfBucket = "openpay-prod-cloudformation-ap-southeast-2"
    $hostingBucket = "www.openpay.com.au"
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
    --output-template-file "$PSScriptRoot/base/packaged-master.json"

aws cloudformation deploy `
    --template-file "$PSScriptRoot/base/packaged-master.json" `
    --stack-name OpenpayWeb-Base `
    --capabilities CAPABILITY_NAMED_IAM `
    --tags project=OpenpayWeb `
    --parameter-overrides S3BucketName=$hostingBucket

cd $cwd