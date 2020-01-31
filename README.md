**OLD DOC BELOW, TO UPDATE**

# CD configuration

In order for the _GitHub Actions_ to run properly, we need to define 2 secrets in the repository:
- `AWS_KEY_ID`
- `AWS_KEY_SECRET`

Those are the credentials of an IAM user which can deploy the necessary resources (can have Admin policy if need be, but can also have only limited rights to only be able to deploy API + related resources)

With those environment variables set, `serverless` can now deploy to AWS using this IAM user.

# Add new lambdas

In order to add new lambdas with this configuration:
1. add a folder for your new lambda containing all the files you need (see [here](test-lambda) for example)
2. develop your lambda and configure a `serverless.yml` file as in [here](test-lambda/serverless.yml). Everytime you update code in your lambda or update its _Serverless_ configuration, this new configuration will be deployed to AWS and attached to the defined API
