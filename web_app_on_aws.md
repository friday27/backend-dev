# Build a Modern Web Application on AWS [link](https://aws.amazon.com/getting-started/hands-on/build-modern-app-fargate-lambda-dynamodb-python/)

## Module 1: Create Static Website

1. Create a Cloud9 env accordingly

2. Create a bucket `aws s3 mb s3://REPLACE_ME_BUCKET_NAME`. You'll need to follow [the rules of bucket naming](https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html#bucketnamingrules).

3. `aws s3 website s3://REPLACE_ME_BUCKET_NAME --index-document index.html` enables the bucket to be used for static website hosting.

4. Update [bucket policy](https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html) to make website files public: `aws s3api put-bucket-policy --bucket friday-bucket --policy path-to-buckey-policy-json-file`

5. Publish the website content to s3: `aws s3 cp path-to-index.html s3://REPLACE_ME_BUCKET_NAME/index.html `, then you can see your webisite through [http://REPLACE_ME_BUCKET_NAME.s3-website-REPLACE_ME_YOUR_REGION.amazonaws.com](http://REPLACE_ME_BUCKET_NAME.s3-website-REPLACE_ME_YOUR_REGION.amazonaws.com)

## Module 2: Host Your Application On A Web Server

AWS Fargate is a deployment option in Amazon Elastic Container Service (ECS) that allows you to deploy containers without having to manage any clusters or servers. For our Mythical Mysfits backend, we will use Python and create a Flask app in a Docker container behind a Network Load Balancer. These will form the microservice backend for the frontend website.

1. Deploy CloudFormation Templates
