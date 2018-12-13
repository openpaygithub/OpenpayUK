# Openpay public website

## Deploy base resources for all environment
- Run `./deploy/Deploy-Base.ps1 <account>`

## Deploy resources for an environment
- `aws s3 sync --acl public-read ./src s3://<bucket>`