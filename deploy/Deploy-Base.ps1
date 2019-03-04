param()

$artifactsBucket = $(aws cloudformation list-exports --query "Exports[?Name=='ArtifactsBucket'].Value" --no-paginate --output text)

$cwd = Get-Location

cd $PSScriptRoot

aws cloudformation package `
    --template-file "$PSScriptRoot/base/master.yaml" `
    --s3-bucket $artifactsBucket `
    --s3-prefix OpenpayWebUK `
    --output-template-file "$PSScriptRoot/base/packaged-master.yaml"

aws cloudformation deploy `
    --template-file "$PSScriptRoot/base/packaged-master.yaml" `
    --stack-name OpenpayWebUK-Base `
    --capabilities CAPABILITY_NAMED_IAM `
    --tags project=OpenpayWebUK

cd $cwd