# Openpay UK public website

## Deploy base resources for all environments
- Run `./deploy/Deploy-Base.ps1 <account>`

## Deploy resources for an environment
- Run `./deploy/Deploy-Env.ps1 <env>`

## Workflow
1. Create local branch from `master` and code feature or fix bug locally
2. Push to remote branch
3. Create merge request to `master` via [GitHub](https://github.com/openpaygithub/OpenpayUK/compare?expand=1) web interface
4. Assign code reviewers
5. When merge request will be approved the website will be deployed to the [Dev](http://www.dev.myopenpay.co.uk/) environment
6. To deploy website to the [Production](https://www.myopenpay.co.uk/) environment ask Indika Udagedara or Jacob Christophersen