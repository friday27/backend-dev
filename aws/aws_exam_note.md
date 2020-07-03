# AWS Notes for Exam

* Elastic Beanstalk
* CloudFormation

-----

## Identity

* An IAM policy must contain:
  * Resources
  * Actions
  * Effect

* AWS services (like Lambda) assumes a role and not policy. Then, you can attach policies on that role

* build web identity federation in your applications: Cognito, STS

* Identity pools are the containers that Cognito Identity uses to keep your apps' federated identities organized

## EC2

* many idle EC2 instances: Auto Scailing Group

## EBS

* to encrypt all data at rest on the EBS volumes on EC2 intances, you need to enable KMS ebcryption

## S3

* The S3 bucket storage is unlimited. However, the maximum size of a single object (file) is 5TB

* To have AWS S3 encrypt an object after it is uploaded (PUT), you need to add a header to the HTTP request called "x-amz-server-side-encryption"

* Encryption types
  * SSE-S3:  AWS manages both data key and master key
  * SSE-KMS: AWS manages data key and you manage master key
  * SSE-C:   You manage both data key and master key
  * Client-Side Encryption

## Elastic Beanstalk

* Elastic Beanstalk uses CloudFormation to provision resources

* Using Elastic Beanstalk, one environment includes one and only one application version

## Docker

* commands must you run to push an existing Docker image to ECR:
  1. `$(aws ecr get-login --no-include-email)`
  2. `docker push 000.dkr.ecr.eu-west-1.amazonaws.com/demo:latest`

## API Gateway

* Pattern: https://.execute-api..amazonaws.com//

* API Gateway terminology:
  * Endpoint
  * Resource
  * Stage

## SQS, SNS

* the maximum size of an SQS message: 256KB
* default visibility timeout for a SQS message: 30 seconds

## DynamoDB

* get one or more items from one or more DynamoDB tables: BatchGetItem

* NoSQL technology that can be managed and run locally: DynamoDB

### [Secondary Indexes](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SecondaryIndexes.html)

* Global Secondary Index (GSI) lets you query over the entire table, across all partitions

* The hash key of the Local Secondary Index (LSI) is the same as the hash key of the main table

## Kinesis

* Kinesis Streams requires manually provision to meet the needed capacity, while Kinesis Firehose scales out automatically

## CodeXXX

* CodeCommit is a fully-managed source control service

* deploy a static website to an S3 bucket: CodeBuild + CodePipeline

* CodeBuild gets its build instructions from ./buildspec.yml

* CodeDeploy is only used to deploy to EC2 instances or Lambda functions
* the proper order of events in CodeDeploy: Stop Application, Before Install, After Install, Start Application

## CloudXXX

* Resources is the only required section in every CloudFormation template

* CloudTrail is a web service that records AWS API calls for your AWS account and delivers log files to an Amazon S3 bucket. The recorded information includes:
  * the identity of the user
  * the start time of the AWS API call
  * the source IP address
  * the request parameters
  * the response elements returned by the service

## Throughput

* 1 RCU for eventually consistent is 2 reads per second of 4 KB
* 1 WCU = 1 KB/s

## Others

* The State machines in AWS Step functions is written with JSON
* Amazon Redshift is a fast, scalable data warehouse
* ECR is fully-managed services that stores container images
