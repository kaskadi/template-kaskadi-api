**Badges here**

****

**This section can be deleted when done with all the preliminary work**

# :computer: Creating a new API from this template :computer:

**Checklist (delete items when done)**
- create a new repository and choose this repository (`template-kaskadi-api`) as template
- clone the new repository to a local working copy
- set secrets up ([help](#Set-secrets-up))
- install all dependencies via `npm i`
- configure your API in its `serverless.yml` ([here](./serverless.yml)) config file for deployment
- when you feel like your API is ready for deployment, go [here](./.github/workflows/deploy.yml) and change the `command` field to `deploy -v`

**Attention:** if you wish to use kaskadi's CLI tools, make sure to have `kaskadi-cli` installed globally (`npm i -g kaskadi-cli`)

## Set secrets up

Before pushing for the first time, please setup secrets on this repository.

**Steps:**
- go to your [repositorys secrets setting](../../settings/secrets)
- click on _Add a new secret_ for each secret you want to add

**What secrets need to be set:**
- `AWS_KEY_ID`
- `AWS_KEY_SECRET`
- `SLS_DEPLOY_BUCKET`

`AWS_KEY_ID` & `AWS_KEY_SECRET`: those are the credentials of a role which has enough permission to publish a new API.
`SLS_DEPLOY_BUCKET`: this is the bucket where the _Serverless_ build should be uploaded at deployment.

****

# Disclaimer

On first deployment you may encounter an error message related to an issue with your stage.

**This is normal** and should not alarm you. Your API will be properly deployed.

The reason behind is that `serverless` seems to try to look for lambda functions to deploy in the given stage with your API. Since in this case there are no functions, the deployment send back an error message as feedback. But this behavior is not a problem on _Cloud Formation_ level and does not prevent _AWS_ from spinning up your _API Gateway_.

# Add new endpoints

In order to add new endpoints, you can:
1. use `template-kaskadi-lambda` to create a new Lambda from our Lambda template
2. develop your lambda
3. configure its `serverless.yml` so that it can attach itself to this API (see `template-kaskadi-lambda` repository for more details)

**Your documentation here**
