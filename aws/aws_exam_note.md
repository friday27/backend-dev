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

* Use IAM role for EC2 instances, and access keys for on-premise applications

  A company is deploying an on-premise application server that will connect to several AWS services. What is the BEST way to provide the application server with permissions to authenticate to AWS services? -> Create an IAM role with the necessary permissions and assign it to the application server. In this scenario the application server is running on-premises. Therefore, you cannot assign an IAM role (which would be the preferable solution for Amazon EC2 instances). In this case it is therefore better to use access keys.

* build web identity federation in your applications: Cognito, STS

* Identity pools are the containers that Cognito Identity uses to keep your apps' federated identities organized

## Secret Manager

* An application will use AWS Lambda and an Amazon RDS database. The Developer needs to secure the database connection string and enable automatic rotation every 30 days. What is the SIMPLEST way to achieve this requirement? -> Store a secret in AWS Secrets Manager and enable automatic rotation every 30 days

## EC2

* many idle EC2 instances: Auto Scailing Group

* A **task placement strategy** is an algorithm for selecting instances for task placement or tasks for termination. Amazon ECS supports the following task placement strategies:
  * binpack – Place tasks based on the least available amount of CPU or memory. **This minimizes the number of instances in use**
  * random – Place tasks randomly
  * spread – Place tasks evenly based on the specified value

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

* to MINIMIZE the time scan takes to produce the report, you should use a **Parallel Scan API operation**, you also need to use the **Limit parameter** to ensure the scan doesn't consume your table's provisioned throughput and cause the critical parts of your application to be throttled.

## Kinesis

* Kinesis Streams requires manually provision to meet the needed capacity, while Kinesis Firehose scales out automatically

## Lambda

* An **event source mapping** is an AWS Lambda resource that reads from an event source and invokes a Lambda function. You can use event source mappings to process items from a stream or queue in services that don't invoke Lambda functions directly. Lambda provides event source mappings for: Kinesis, DynamoDB, SQS

* What is the SAFEST way to do this with minimal changes to the application code? -> You can point an alias a multiple versions of your function code and then **assign a weighting** (e.g. 20%) to direct certain amounts of traffic to each version. This enables a blue/green style of deployment and means it's easy to roll back to the older version by simply updating the weighting if issues occur with user experience.

## Step Functions

* Step Functions provides a reliable way to **coordinate components** and step through the functions of your application. Step Functions offers a graphical console to visualize the components of your application as a series of steps. It automatically triggers and tracks each step, and retries when there are errors, so your application executes in order and as expected, every time. Step Functions logs the state of each step, so when things go wrong, you can diagnose and debug problems quickly.

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

* Amazon CloudWatch Events delivers a near real-time stream of system events that describe changes in AWS resources
  * Every time an Amazon EC2 instance is launched, certain metadata about the instance should be recorded in an Amazon DynamoDB table. The data is gathered and written to the table by an AWS Lambda function. What is the MOST efficient method of invoking the Lambda function? -> Create a CloudWatch Event with an event pattern looking for EC2 state changes and a target set to use the Lambda function

## Throughput

* 1 RCU for eventually consistent is 2 reads per second of 4 KB
* 1 WCU = 1 KB/s

## Others

* The State machines in AWS Step functions is written with JSON
* Amazon Redshift is a fast, scalable data warehouse
* ECR is fully-managed services that stores container images

## References

* [Digital Cloud: AWS CERTIFIED DEVELOPER ASSOCIATE
FREE PRACTICE QUESTIONS](https://digitalcloud.training/aws-developer-associate-free-practice-exam-questions/)
