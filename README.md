# Openpay UK public website

## Deploy base resources for all environments
- Run `./deploy/Deploy-Base.ps1 <account>`

## Deploy resources for an environment
- Run `./deploy/Deploy-Env.ps1 <env>`

## Workflow
1. Create local branch from `master` and code feature or fix bug locally
2. Cover and test your code with visual regression tests
3. Push to remote branch
4. Create merge request to `master` via [GitHub](https://github.com/openpaygithub/OpenpayUK/compare?expand=1) web interface
5. Assign code reviewers
6. When merge request will be approved the website will be deployed to the [Dev](http://www.dev.myopenpay.co.uk/) environment
7. To deploy website to the [Production](https://www.myopenpay.co.uk/) environment ask [Indika Udagedara](mailto:indikau@openpay.com.au) or [Jacob Christophersen](mailto:jacobc@openpay.com.au)

## Testing
1. Install [BackstopJS](https://github.com/garris/BackstopJS)

    Run `npm install -g backstopjs`

2. Update local path to the files

    `backstop_data\scenarios\path.js`

3. Run backstop tests (take new screenshots and compare)

    `backstop test --config=backstop_data/backstopConfig`

4. Add scenarios (if necessary)

    `backstop_data\scenarios`

5. Update reference screenshots

    `backstop reference --config=backstop_data/backstopConfig`

6. Accept new screenshots to become new references

    `backstop approve --config=backstop_data/backstopConfig`