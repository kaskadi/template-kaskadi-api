![](https://img.shields.io/github/package-json/v/kaskadi/template-kaskadi-api)
![](https://img.shields.io/badge/code--style-standard-blue)
![](https://img.shields.io/github/license/kaskadi/template-kaskadi-api?color=blue)

**GitHub Actions workflows status**

[![Deploy status](https://img.shields.io/github/workflow/status/kaskadi/template-kaskadi-api/deploy?label=deployed&logo=Amazon%20AWS)](https://github.com/kaskadi/template-kaskadi-api/actions?query=workflow%3Adeploy)
[![Build status](https://img.shields.io/github/workflow/status/kaskadi/template-kaskadi-api/build?label=build&logo=mocha)](https://github.com/kaskadi/template-kaskadi-api/actions?query=workflow%3Abuild)
[![Docs generation status](https://img.shields.io/github/workflow/status/kaskadi/template-kaskadi-api/generate-docs?label=docs&logo=read-the-docs)](https://github.com/kaskadi/template-kaskadi-api/actions?query=workflow%3Agenerate-docs)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/template-kaskadi-api?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/template-kaskadi-api)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/template-kaskadi-api?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/template-kaskadi-api)
[![](https://img.shields.io/codeclimate/coverage/kaskadi/template-kaskadi-api?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/template-kaskadi-api)

<!-- You can add badges inside of this section if you'd like -->

****

# Repository initialization

When creating a repository from this template an `init` workflow (see [here](./.github/workflows/init.yml)) will run. This workflow uses [`kaskadi-cli`](https://www.npmjs.com/package/kaskadi-cli) in order to properly initialize your repository by:
- updating the names refering to the template in relevant files (for example `package.json`, `package-lock.json`, etc.) and renaming some files if need be
- automatically adding your repository to _Code Climate_
- automatically setting `REPORTER_ID` secret inside of your repository for test coverage upload to _Code Climate_. This may fail because of _Code Climate_ infrastructure latency in setting up your repository. In such case your workflow will emit a warning telling you to set `REPORTER_ID` manually

# Testing

`mocha`, `chai`, `nyc`, `serverless-offline` & `standard` are available as dev dependencies.

A `build` workflow (see [here](./.github/workflows/build.yml)) is running on `pull request` and will execute your test suite before allowing you to merge your PR. It also has a `coverage` job already prepared that you can comment out as soon as your testing is in place and your `REPORTER_ID` is in the repository secrets. This is the ID on _Code Climate_ used for uploading code coverage reports.

Beside running your unit tests, this workflow runs a static code analysis to find any vulnerability in your code. If a vulnerability is found, a notification will appear in the `Security` tab of your repository.

The `build` workflow also runs a `syntax-check` job which checks your `serverless.yml` file syntax.

****

# Documentation

This repository comes with a `generate-docs` workflow that generates documentation automatically for you by reading your main `serverless.yml` configuration file and extracting meta data of all endpoints you defined. See [here](https://github.com/kaskadi/action-generate-docs) and [there](./serverless.yml) for more information.

Before generating the documentation, the workflow will check for syntax error in your `serverless.yml` file.

If you would like to see the workflow configuration, head [here](./.github/workflows/generate-docs.yml).

You can configure the template used to generate the action documentation [here](./docs/template.md).

****

# Deploying

Deploying to AWS is done automatically via a `deploy` workflow (see [here](./.github/workflows/deploy.yml)). This workflow will run on `push`. Before publishing it:
1. performs a static code analysis of the layer to detect any vulnerabilities. If a vulnerability is found, a notification will appear in the `Security` tab of your repository
2. checks the syntax of `serverless.yml` for any errors
3. run any tests you may have set up with `npm test`

**You'll have to switch the command from `--version` to `deploy -v` in the [workflow configuration file](./.github/workflows/deploy.yml) to actually deploy!**

**Warning: you may need to manually deploy the first time via `Serverless` CLI locally.**

****

# Tools

## Add new endpoints

In order to add new endpoints:
1. Go to the root of your API repository
2. Run `npm run add-lambda` (this will prompt you for new lambda data)
3. Your endpoint is now located under `lambdas/<lambda_name>` and you can start developing!

## Upgrade API version

To update your API version, run `npm run upgrade-version <version_option>`. This takes the same argument as `npm version` (see [here](https://docs.npmjs.com/cli/version)). It will update for you the main `package.json` as well as `serverless.json` but also all `package.json` for all endpoints.

****

# Using custom domain for your API

_For all custom domains you will need a certificate for this domain. Please make sure that you have the proper certificate generated, else create one associated with your domain. All this can be done [here](https://console.aws.amazon.com/acm/home?region=us-east-1#/)_

**Case 1: creating a new custom domain for API**

If the custom domain you wish to use hasn't been created yet (list of custom domains [here](https://eu-central-1.console.aws.amazon.com/apigateway/home?region=eu-central-1#/custom-domain-names)).

1. Go [here](https://eu-central-1.console.aws.amazon.com/apigateway/home?region=eu-central-1#/custom-domain-names) and click on _Create Custom Domain Name_
2. Configure your domain as you wish to
3. Once the domain is created and initialized, go to [Route 53](https://console.aws.amazon.com/route53/home?region=eu-central-1)
4. Go into the _Hosted Zone_ for the domain you wish to use and create a new _A Record_.
5. For this record, you should toggle the _Alias_ option, give for _name_ the custom domain name you wish to use and select for _Alias target_ the API you want to map to this domain. You may need to copy paste the base URL to that API to make this work

**Case 2: using an existing custom domain**

1. Go [here](https://eu-central-1.console.aws.amazon.com/apigateway/home?region=eu-central-1#/custom-domain-names)
2. Click on _Edit_ for the custom domain you wish to use
3. Add a base path you wish to map your API to for this domain and then select the API & its stage in the dropdown menus

**Attention:** you can only use an existing custom domain if this domain doesn't have already an empty path as base path.

****

<!-- automatically generated documentation will be placed in here -->
# API endpoints

The origin and root path for this API is: `https://api.template.com/logical-unit`

The following endpoints are defined in this API:
- [/hello](#/hello)

## `/hello` <a name="/hello"></a>

Supported methods:
- [GET](#hello-GET)

### `GET` (target lambda → [hello-world](#hello-world)) <a name="hello-GET"></a>

**Description:**

hello world placeholder endpoint

**Authorization:**

No authorizer found for this method.

**Query string parameters:**

|   Key  | Default | Description |
| :----: | :-----: | :---------- |
| `key1` |         | first key   |
| `key2` |   `35`  | second key  |

**Request body:**

|    Key   | Default | Description       |
| :------: | :-----: | :---------------- |
| `param1` | `hello` | first body param  |
| `param2` |  `true` | second body param |

**Examples:**

<details>
<summary>Example #1</summary>

_Request:_

```HTTP
GET https://api.template.com/logical-unit/hello?key1=hello&key2=test

Headers:
  Content-Type: application/json

Body:
  {
    "param1": "does not make sense in GET",
    "param2": "but this is a test"
  }
```

_Response:_

```HTTP
Status code:
  200

Headers:
  x-kaskadi-data: some data

Body:
  {
    "resParam1": "hello",
    "resParam2": "test"
  }
```
</details>

# API resources

The following lambda functions are used in this API:
- [hello-world](#hello-world)

The following layers are used in this API:
- [template-kaskadi-api-layer](#template-kaskadi-api-layer)

## hello-world <a name="hello-world"></a>

|     Name    | Sources                      | Timeout |                  Handler                  | Layers                                                                      |
| :---------: | :--------------------------- | :-----: | :---------------------------------------: | :-------------------------------------------------------------------------- |
| hello-world | <ul><li>HTTP (GET)</li></ul> | default | [handler](./lambdas/hello-world/index.js) | <ul><li>[template-kaskadi-api-layer](#template-kaskadi-api-layer)</li></ul> |

See [configuration file](./serverless.yml) for more details.

## template-kaskadi-api-layer <a name="template-kaskadi-api-layer"></a>

### Description

Layer for template-kaskadi-api

### Dependencies

- `template-kaskadi-api-utils` (local utility)

See [configuration file](./serverless.yml) for more details.

# Stack tags

You can use any tags (and their respective values) visible below to find ressources related to this stack on AWS. See [here](https://docs.amazonaws.cn/en_us/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) for more details.

| Tag          | Value                |
| :----------- | :------------------- |
| app          | your-app-name        |
| service      | template-kaskadi-api |
| logical-unit | api-logical-unit     |
| type         | s3, sns, etc.        |
<!-- automatically generated documentation will be placed in here -->

<!-- You can customize this template as you'd like! -->