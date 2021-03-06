# AWS Note

## TODOs

* Guru Mock exam review
* Review Udemy pdf
* Labs
* Udemy mock exam

![AWS FAQs](./img/faqs.png)

* Additional Resources
  * [AWS FAQs](https://aws.amazon.com/tw/faqs/)
  * AWS Whitepapers
    * [Practicing CI/CD on AWS](https://d1.awsstatic.com/whitepapers/DevOps/practicing-continuous-integration-continuous-delivery-on-AWS.pdf?did=wp_card&trk=wp_card)
    * [Blue/Green Deployments on AWS](https://d1.awsstatic.com/whitepapers/AWS_Blue_Green_Deployments.pdf?did=wp_card&trk=wp_card)
    * [Serverless Architectures with AWS Lambda](https://d1.awsstatic.com/whitepapers/serverless-architectures-with-aws-lambda.pdf?did=wp_card&trk=wp_card)
    * [Docker on AWS](https://d1.awsstatic.com/whitepapers/docker-on-aws.pdf)
    * [Introduction to DevOps on AWS](https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/welcome.html)
    * [Running Containerized Microservices on AWS](https://d1.awsstatic.com/whitepapers/DevOps/running-containerized-microservices-on-aws.pdf)
    * [Optimizing Enterprise Economics with Serverless Architectures](https://d1.awsstatic.com/whitepapers/optimizing-enterprise-economics-serverless-architectures.pdf)
    * [AWS Security Best Practices](https://d1.awsstatic.com/whitepapers/Security/AWS_Security_Best_Practices.pdf)

  * Videos
    * [Become an IAM Policy Master in 60 Minutes or Less](https://www.youtube.com/watch?v=YQsK4MtsELU&t=2s)
    * [Continuous Integration Best Practices](https://www.youtube.com/watch?v=77HvSGyBVdU&t=2638s)
    * [Moving to DevOps the Amazon Way](https://www.youtube.com/watch?v=Pvb74TlV8SA&t=3075s)
    * [Getting Started with Docker on AWS](https://www.youtube.com/watch?v=mUzsYt3Bj08)
    * [Serverless Architectural Patterns and Best Practices](https://www.youtube.com/watch?v=Xi_WrinvTnM)
    * [VPC Fundamentals and Connectivity Options](https://www.youtube.com/watch?v=jZAvKgqlrjY)

## Basics

* AWS Availability Zones (AZ) - Geographically-isolated (but connected) data centers
* Check [Region Table](https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/?p=ngi&loc=4) if the service you want to use is not supported in your current region.

-----

## IAM, Identity and Access Management (Global Service)

IAM allows you to manage users and their levels of access to AWS console

* IAM is universal. It does not apply to regions
* IAM role: a secure way to grant permissions to entities (users, groups or services) that you trust
* IAM policy: a JSON document which defines one or more permissions

* MFA (Multi Factor Authentication) can be setup (e.g. Google Authenticator app)
* **Least Privilege Principle**: It's best to give users the minimal amount of permissions they need to perform their jobs
* Always create groups then assign your users to that group
* Basic rule: 1 IAM user for 1 person; 1 IAM role for 1 application
* Security group: virtual firewall to allow traffic in and out to your instance

* IAM Federation - Enterprises integrate their own repository of users with IAM using SAML standard (Active Directory)

* IAM Policy Simulator allows you to test the effects of IAM policies before committing them to production

### IAM policy

There are 3 types of IAM policies available:

1. Managed Policies
    * created and administered by AWS
    * for common use cases based on job functions (e.g. AmazonDynamoDBFullAccess)
    * you cannot change the permissions defined in an AWS Managed Policy

2. Customer Managed Policies
    * a standalone policy that you create and administer inside your AWS account only
    * you can copy Managed Policies and update it

3. Inline Policies
    * embedded within the user, group or role
    * strict 1:1 relationship between the entity and the policy (i.e. Inline Policy cannot be attached to multiple entities)

### Amazon Cognito

* Web Identity Federation lets you give your users access to AWS resources after they have authenticated with a web-based identify provider like **Amazon, Facebook or Google**

* The user authenticates first with the Web ID Provider and receives an authentication token, which is exchanged for temporary AWS credentials allowing them to assume an IAM role (A user authenticates with Facebook first. They are then given an ID token by Facebook, which they can then trade for temporary security credentials.)

* Cognito provides Web Identity Federation with the following features:
  * Sign-up and sign-in to your apps
  * Access for guest users
  * Synchronizes user data for multiple devices
  * Recommended for all mobile applications

* **User Pools** are user directories used to manage sign-up and sign-in functionality for mobile and web applications
* **Identity Pools** enable you to create unique identities for your users and authenticate them with identity providers. With and identity, you can obtain temporary, limited-priviledge AWS credentials to access other AWS services

* **Push Synchornization**: In order to provide a **seamless user experience** for your application, Cognito used Push Synchornization to push updates and synchornize user data across multiple devices

-----

## EC2, Elastic Compute Cloud (Reginal Service)

EC2 is a web service that provides resizable compute capacity in the cloud (virtual machine in the cloud)

### EC2 Instance Types

1. On Demand
    * allows you to pay a fixed rate by the hour (or second)
    * Use cases:
      * applications with short term, spiky or unpredictable workloads
      * applications being developed or tested on EC2

2. Reserved
    * capacity reservation (1 or 3 year terms)
    * Use cases:
      * application with steady state or predictable usage (e.g. web servers)
    * Instance Types
      * Reserved Instances
      * Convertable Reserved Instances
      * Scheduled Reserved Instances - launch within the time window

3. Spot
    * **bid** whatever price you want for instance capacity (less reliable)
    * Use cases:
      * applications that have flexible start and end times
      * users with an urgent need for large amount of addtional computing capacity

4. Dedicated Hosts
    * an entire physical server dedicated for your use (BYOL, Bring Your Own License)
    * can be purchased on demand
    * Use cases:
      * useful for regulatory requirements that may not support multi-tenant virtualization or cloud deployments

![EC2 Instance Types](./img/ec2-instance-types.png)

How to remember it? -> Fight Dr McPX

F - FPGA  
I - IOPS  
G - Graphics  
H - High Disk Throughput  
T - Cheap general purpose  
D - Density  
R - RAM  
M - Main choice for general purpose apps  
C - Compute  
P - Graphics  
X - Extreme Memory  

### EC2 Lab

#### SSH into EC2 instance

1. Copy the public IP of your instance
2. `chmod 0400 your_key.pem` (needed to solve **permission error exception**)
3. `ssh -i your_key.pem ec2-user@your_public_ip` (Use `logout` to logout)

#### Turn your Linux server into a web server through Apache

1. SSH into the instance
2. `sudo su` to switch to root account
3. `yum update -y` to update the operating system
4. `yum install httpd -y` to install Apache
5. `service httpd start` or `systemctl start httpd.service` to start server
6. `chkconfig httpd on` or `systemctl enable httpd.service` to make Apache come on automatically after reboot
7. `service httpd status` or `systemctl status httpd.service` to check if Apache server is running
8. `cd /var/www/html/` to check the root dir of web server
9. `nano index.html` and add `<html><body><h1>Hello Cloud Gurus!</h1></body></html>`
10. Now you can access to this newly created index.html from the public IP

-----

## EBS, Elastic Block Store

You can think EC2 is a virtual server in the cloud, and EBS is a **virtual disk**. EBS allows you to create storage volumes and attach them to EC2 instances. EBS volumes are placed in **specific AZ**

### 4 EBS Volume Types

EBS volumes are characterized in size, throughput, IOPS (I/O Ops Per Sec). Here are 4  EBS Volume Types:

1. General Purpose SSB, GP2
    * General purpose SSD volume that balances price and performance for a wide variety of workloads
    * Ratio of **3 IOPS/GB** with up to 10,000 IOPS and the ability to burst up to 3000 IOPS for extended period of time for volumes at 3334 GB andabove (Suitable for applications with less than 1000 IOPS -> best performace and price)

2. Provisioned IOPS SSD, IO1
    * Designed for I/O intensive applications such as large relational or NoSQL databases
    * Use if you need more than 10,000 IOPS
    * Can provision up to 20,000 IOPS per volume

3. Throughput Optimized HDD, ST1
    * Cannot be a boot volume
    * Use cases: big data, data warehouses, log processing, Apache Kafka
    * Max IOPS: 500
    * Max throughput: 500 MB/s

4. Cold HDD, SC1
    * Lowest cost storage for **infrequently** accessed workloads
    * Cannot be a boot volume
    * Use case: file server
    * Max IOPS: 250
    * Max throughput: 250 MB/s

5. Magnetic (Legacy)
    * Lowest cost per gigabyte of all EBS volume types that is bootable
    * Use case: infrequently accessed data + lowest storage cost is important

### EBS Lab

If you create an EBS volume from an encrypted snapshot, the volume will automatically be encrypted, vice versa

#### How to create and attach an EBS Volume to EC2

1. Create an encrypted EBS volume (remember to check the AZ which should be the same as your instance) and attach it to you instance
2. SSH into the instance ans switch to root account `sudo su`
3. Use `lsblk` to show all volumes
4. Use `file -s /dev/xvdf` to check. "/dev/xvdf: data" means no data on the volume, so it's ok to create a file system
5. Create a file system `mkfs -t ext4 /dev/xvdf`
6. Create a folder `mkdir /filesystem` and mount it `mount /dev/xvdf /filesystem/`
7. Use `lsblk` to check if it's mounted
8. Use `umount -d /dev/xvdf`

#### How to encrypt an EBS Volume attached to EC2

1. Detach the volume from instance
2. Create a snapshot of the volume
3. Delete the volume
4. Create a volume from the snapshot (Under EBS/Snapshots)
5. Attach the newly created volume to EC2 instance
6. Mount the volume to dir `mount /dev/xvdf /filesystem`
7. Now you can see your old files `ls /filesystem`

#### Create an encrypted snapshot of the root volume

1. Create a snapshot of the volume
2. Copy the snapshot with encryption
3. Create an image from the new encrypted snapshot
4. Launch an instance from the image

-----

## AMI, Amazon Machine Image

* An image to use to create our instances (e.g. Amazon Linux 2)
* AMIs can be built for Linux or Windows machines
* **AMIs are built for a specific AWS region**

-----

## ELB, Elastic Load Balancers

Load balancers help us balance our load across multiple different servers

### 3 types of load balancer

1. Application Load Balancer
    * best suited for HTTP and HTTPS traffic
    * operating at Layer 7
    * application-aware

2. Network Load Balancer
    * Best suited for TCP traffic where extreme performance is required (handiling millions of requests per second)
    * low latency
    * operating at the connection level (Layer 4)

3. Classic Load Balancer (legacy)
    * Layer 7 (HTTP, HTTPS) and Layer 4 (TCP)
    * X-forwarded
    * Sticky sessions

### Load balancer errors

If your application stops responding, the CLB responsed with a 504 error (gateway timeout error). The issue could be at either web server layer or database layer. CLB will identify where the application is falling and scale it up or out if possible

### X-Forwarded-For header

When the instance wants to get the client IP (the IPv4 address of your end user) but only get private IP of load balancer, it can get the client IP from X-Forwarded-For header

-----

## RDS

### OLTP v.s. OLAP

Online Transaction Processing (OLTP) differs from Online Analytics Processing (OLAP) in terms of the types of queries you will run (e.g. OLTP - insertion, OLAP - calculate the net profit of a product)

### AWS Database Types

* RDS - OLTP (MySQL, PostgreSQL, Oracle, Aurora, MariaDB)
* DynamoDB - NoSQL
* RedShift - OLAP (big data)
* Elasticache - In memory caching (Memcached, Redis)

### Backups, Multi-AZ and Read Replicas

* There're 2 types of backups for AWS:
  1. Automated backups
      * enabled by default
      * recover your database to any point within a retention period (1~35 days)
      * It allows you to do a point in time recovery down to a second
      * The backup is stored in S3 (you get free space = the size of db)
      * Backups are taken within a defined backup window. Storage I/O may be suspended and you may experience elevated latency
  2. Database snapshots
      * done manually
      * DB snapshots are stored after you delete the original RDS instance, unlike automated backups
* Restored version of the database will be a new RDS instance with a new DNS endpoint

* Multi-AZ: Each RDS database has a exact copy (synchornously replicated) in a different AZ **for disaster recovery** only. The failover (of RDS DNS endppint) is automatically

* Read Replica (**for performance/ scailing**)
  * Assume 90% traffic is read traffic
  * Read replicas allow you to have a read-only copy of the production database
  * Using asynchronous replication from the primary RDS instance to the read replica
  * You can have up to 5 read replicas of any database
  * You can have a read replicain in another region
  * You can promote read replicas to databases (the replication will be broken)

### RDS Lab

#### Connect EC2 instance to RDS instance

1. Create a RDS database
2. Launch a new instance with bootstrape script

        #!/bin/bash  
        yum install httpd php php-mysql -y  
        yum update -y  
        chkconfig httpd on  
        service httpd start  
        echo "<?php phpinfo();?>" > /var/www/html/index.php
        cd /var/www/html  
        wget https://s3.amazonaws.com/acloudguru-production/connect.php

3. SSH into the instance and go to /var/www/html
4. Paste the endpoint of your RDS database to $hostname of connect.php
5. Add inbound rule to the RDS security group for instance traffic
    * Type: MySQL/Aurora
    * Port: 3306
    * Source: security group of the instance
6. Browse public_ip/connect.php

-----

## Elasticache

* Elasticache: in-memory cache in the cloud
* In general, Elasticache is for RDS and DAX is for DynamoDB

### 2 types of Elasticache

* Memcached
  * **object caching**
  * keep things as simple as possible
  * running large cache nodes
  * multithreaded/ multiple cores
  * horizontally scale your cache
  * Not Multi-AZ

* Redis
  * **key-value store** and more complicated data structures like set and list
  * sorting and ranking
  * data persistent
  * Multi-AZ
  * supports Master/Slace application
  * pub/sub capailities are needed

### 2 caching strategies available

* Lazy Loading
  * loads the data into cache only when necessary
  * returns null if the result is not in the cache, then fetch it from database for the next query
  * Problem - Stale data (data in cache won't be updated while the data in database is updated)
    * Solution - add TTL (Time To Live) to data
    * Specify the number of seconds until the key expires to avoid keeping stale data in cache

* Write-Through
  * adds or updates data to the cache whenever data is written to the database

-----

## Route53 (Amazon's DNS Service)

Route53 allows you to:

* Register domain names
* [Create record sets by types](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ResourceRecordTypes.html)
* Map your domain names to EC2 instances, load balancers, S3 buckets

-----

## AWS CLI Pagination

* You can control the number of items included in the output when you run a CLI command

* By default, the AWS CLI uses a page size of 1000 (i.e. 2500 objects -> CLI will make 3 API calls and display the entire output in one go)

* To solve "time out" error, you can use `--page-size` option to have the CLI request a smaller number of items from each API call

-----

## S3, Simple Storage Service

[AWS CLI Command Reference](https://docs.aws.amazon.com/cli/latest/index.html)

* Object-based storage (not block-based) Objects consist of the following:
  * key (name)
  * value (data)
  * version ID
  * metadata (data about data, e.g. author, related projects...)
  * subresources (bucker-specific configuration, e.g. bucker policies, access control lists, CORS - Cross Origin Resource Sharing, transfer acceleration)

* Files can be up to 5 TB
  * The largest size file you can transfer using PUT is 5 GB
* Files are stored in buckets (similar to folder)
* Unlimited storage
* S3 is a universal namespace

* Data consistency model for S3
  1. PUTs of new Objects: Read after Write consistency (immediately)
  2. Overwrite PUTs and DELETEs: eventual consistency (take some time)

### S3 Storage Tiers/ Classes

* S3: 99.9% availability, 99.999999999% durability
* S3 - IA (Infrequently Accessed): Lower fee than S3, but you are charged a retrieval fee
* S3 - One Zone IA: single AZ, 99.5% availability, cheapest
* Reduced Redundancy Storage (depreciated): for data that is easily reproduced, such as thumbnails
* Glacier: cheap but used for archival only. Optimised for data that is infrequently accessed and it takes hours to restore from Glacier
* Intelligent Tiering
  * Unknown and unpredictable access patterns
  * 2 tiers - frequent and infrequent (automatically moves your data to most cost-effective tier based on frequency)

![S3 Storage Tiers](./img/s3-storage-tiers.png)

### S3 Security

* All newly created buckets are private by default
* You can set up access control to your buckets using:
  1. Bucket Policies - Applied at a bucket level
  2. Access Control Lists - Applied at an object level

### S3 Encryption

* Encryption In-Transit: SSL/TLS
* Encryption At Rest
  * Server Side Encryption
    * SSE-S3 (AWS manages the keys for you, aka Advanced Encryption Standard (AES) 256)
    * SSE-KMS (like S3 with more functions)
    * SSE-C (customer provided keys)
  * Client Side Encryption (customer encrypted and provided keys)

* We can use a Bucket Policy to prevent unencrypted files from being uploaded by using creating a policy which only allows requests including the **x-amz-server-side-encryption** parameter in the request header

### CORS, Cross Origin Resource Sharing

A way of allowing code in one S3 bucket to access or reference to code that is in another S3 bucket (Let one resource cross origin another resource)

### S3 Performance Optimization

* GET-intensive workloads: Use **CloudFront** CDN service

* Mixed request type workloads: (for exam)
  * In July 2018, Amazon announced a massive increase in S3 performance to 3500 PUTs and 5500 GETs per second, which negated random key names as following:
  * S3 uses the key name of object to determine which partition an object will be stored in. Using sequential key names increases the likehood of having multiple objects stored on the same partition, which can cause I/O issues. By using a **random key name prefix** to key names, you can force S3 to distribute your keys across multiple partitions thus distributing the I/O workload

### S3 Lab

#### Connect to AWS S3 from instance using Access Key ID

1. SSH into an instance
2. `aws configure` and use user's Access Key ID and Secret Access Key
3. Create a bucket `aws s3 mb s3://acloudguru1234-xxxx`
4. Test with `aws s3 ls`
5. `echo "hello" > hello.txt`
6. `aws s3 cp hello.txt s3://acloudguru1234-xxxx`
7. `aws s3 ls s3://acloudguru1234-xxxx`

#### Connect to AWS S3 from instance using IAM role (preferred from a security perspective)

IAM roles allow you not to user Access Key IDs and Secret Access Keys

1. Create an IAM role for S3 full access
2. Instance/Instance Settings/Attach IAM Role
3. SSH into the instance
4. (optional) Remove old configs by `rm ~/.aws/config` and `rm ~/.aws/credentials`
5. Test with `aws s3 ls`

-----

## CloudFront

* CDN (Content Delivery Network): A CDN is a system of distributed servers that deliver webpages and other web content to users based on geographic location of the user, the origin of the webpage, and a content delivery server.

* Edge Location: The location where content is cached and can also be written. Seperate to an AZ Region/AZ

* 2 Types of CloudFront Distributions:
  1. Web Distribution - Typically used for websites
  2. RTMP (Real Time Messaging Protocal) - Used for media streaming

* Amazon CloudFront can be used to deliver your entire website using a global network of edge locations. Requests will be automatically routed to the nearest edge location

* CloudFront edge locations are utilised by S3 Transfer Accelaration to reducy latency for S3 uploads

* Objects are cached for the life of the TTL (Time to Live)

-----

## Lambda

AWS Lambda is an event-driven compute service where you can upload your code and create a Lambda function. AWS Lambda takes care of provisioning and managig servers that you use to run the code

* Supported Languages: Node.js, Java, Python, C#, Go
* Lambda scales out (horizontally) automatically
* Lambda functions are independent (1 event = 1 function)
* Lambda is serverless
* Lambda function can trigger other Lambda functions
* AWS X-ray helps you to debug Lambda
* Lambda can do things globally

### Version control with Lambda

* Each Lambda function version has a unique ARN (Amazin Resource Name). After you publish a version, it is immutable
* AWS Lambda maintains your function code in the $LATEST version
* You can create an alias (e.g. PROD) and map it to the newest (and the most stable) version
* You can also use aliases to split traffic, but you cannot apply it to $LATEST

### Step Functions

Step functions allow you to visualize and test your serverless applications

### Lambda Concurrent Executions Limit

* Safety feature to limit the number concurrent executions across all functions in a given region per account

* Default: 1000 per region (429 - TooManyRequestException)

* Reserved Concurrency can be set for critical functions which guarantees the number of concurrent executions are always available to the function (It would also be the maximum concurrent executions of the function)

### Lambda and VPCs (Virtual Private Cloud)

* Lambda needs the following VPC configuration information so that it can connect to the VPC:
  * private subnet ID (where your resources are located)
  * security group ID

-----

## [API Gateway](https://docs.aws.amazon.com/apigateway/api-reference/)

An API is an Application Programming Interface (e.g. waiter in a restaurant, Expedia)

* Types of APIs (You can use API Gateway as both)
  * REST APIs (Representational State Transfer)
    * Uses JSON
    * Newer and more popular
  * SOAP APId (Simple Object Access Protocal)
    * Uses XML

* What can API Gateway do?
  * **Expose HTTPS endpoints to define a RESTful API**
  * Serverless-ly connect to servers like Lambda & DynamoDB
  * Send each API endpoint to a different target
  * Run efficiently with low cost
  * Scale automatically
  * Track and control usage by API Key
  * Throttle requests to prevent attacks
  * Connect to CloudFront to log all requests for monitoring
  * Cache the most common requests to increase performance
  * Can split traffic using aliases to different versions (but $LATEST not included)

* API Throttling
  * By default, API Gateway limit the steady-state request rate to 10,000 requests per second (rps)
  * The maximum concorrent (in millisecond) requests is 5000 requests across all APIs within an AWS account
  * Over the upperbound (10,000 rps or 5000 concurrent requests) -> Error: 427 too many requests

* Same Origin Policy

  In computing, the same-origin policy is an important concept in the web application security model.  
  Under the policy, a web browser permits scripts contained in a first web page to access data in a second web page, but only if both web pages have the same origin.

  This is done to prevent Cross-Site Script (XSS) attacks.

  It's forced by web browsers and ignored by tools like Postman and curl.

  CORS is one way the server at the other end can relax the Same Origin Policy. So when you see an error "Origin policy cannot be read by the remote resource", you need to enable CORS on API Gateway.

* You can import an API from a Swagger v2.0 definition file into API Gateway
  * POST - create a new API
  * PUT - update an existing API

### Lab

#### Build a Simple Serverless Website with Route 53, API Gateway, Lambda and S3

1. Create a S3 bucket and set it as a static web hosting
2. Go to Route 53 and register a domain ($)
3. Go to Lambda and create a function
    * Runtime: Python
    * Execution Role: Create a new role from AWS policy templates
    * Policy Templates: Simple microservice permissions
4. Download class code and update Lambda function code
5. Add API Gateway as a trigger
    * Create a new API
    * REST API
    * Deployment stage: prod
    * Security: Open
6. Click on the newly created API Gateway
    1. Delete the default method
    2. Create a new GET method
    3. Leave all settings to default and choose your Lambda function
7. Action/ Deploy API (Deployment Stage: prod)
8. Stages/ prod/ GET/ Invoke URL (API Gateway)

      curl "Invoke URL"

9. Add your API Gateway to index.html (line 11)
10. Go to S3, set the bucket to public and upload index.html, error.html
11. Go to Route 53 and set the alias target to S3 website endpoint
12. Check the URL (from Route 53 or S3)

#### Make an Alexa Skill Lab

1. Create a public S3 bucket and set bucket policy to

      {
          "Version": "2012-10-17",
          "Statement": [
              {
                  "Sid": "PublicReadGetObject",
                  "Effect": "Allow",
                  "Principal": "*",
                  "Action": "s3:GetObject",
                  "Resource": "Bucket_ARN/*"
              }
          ]
      }

2. Go to Amazon Polly
    * Paste some text and click Synthesize to S3
    * Wait until the task is completed

3. Go to Lambda
    * Create function with the option "Browse serverless app repository"
    * Select "alexa-skills-kit-nodejs-factskill" and deploy
    * Add/Change the data utterances

4. Go to [developer.amazon.com](developer.amazon.com)
    * Create an Alexa skill
    * Choose "Fact Skill" template
    * Change invocation name
    * Intent/ GetNewFactIntent/ Add a new sample utterance (e.g. a cloud fact)
    * Save model and build model
    * Go to "Test" tab and change env to development
    * Test using "Alexa Simulator" and type your invocation

5. Point the fact to mp3 file in S3 bucket
    * Go to S3 bucket and copy the Object URL of the mp3 file
    * Paste `'<audio src=\"mp3-url\" />'` as the only element in FACTS array of the data variable in Lambda

-----

## X-Ray

AWS X-Ray is a service that collects data about requests that your application serves

* X-Ray supported languages: Java, Go, Node.js, Python, Ruby, .NET

* The X-Ray SDK provides:
  * Interceptors to add to your code to trace incoming HTTP requests
  * Client handlers to instrument AWS SDK clients that your application uses to call other AWS services
  * An HTTP client to use to instrument calls to other internal and external HTTP web services

-----

## DynamoDB

DynamoDB is a low-latency NoSQL database service which supports both document and key-value data models

* Stored on SSD storage (Solid State Disk)
* spread across 3 geographically distint data centers
* Choice of 2 consistency models:
  1. Eventually Consistency Reads (default) (within 1 second)
  2. Strongly Consistency Reads (immediately)
* Documents can be written in JSON, HTML or XML
* You can use a special IAM condition parameter (dynamodb:\<LeadingKey\>) to restrict user access to only their records (access control)

* Keywords
  * Table
  * Item (Row)
  * Attribute (Column)

* 2 types of DynamoDB primary key
  1. Partition Key (unique) - use hash function to determine the partition or physical location which the data is stored
  2. Composite Key (parition key + sort key)

### Indexes

* Indexes enable fast queries on specific data columns
* In DynamoDB, 2 types of indexes are supported to help speed-up your DynamoDB queries:
  1. Local Secondary Index
      * can only be created when you're createing your table (cannot modify it later)
      * has the same partition key as your original table but a different sort key

  2. Global Secondary Index
      * can be created and modified anytime
      * different partition key and sort key

### Scan & Query API call

* A Query operation finds items in a table using only the Primary Key attribute

* Query results are always sorted ascendingly by Sort Key if there is one (You can set ScanIndexForward parameter to false to reverse the order for Query)

* Query is generally more efficient than Scan: Scan dumps the entire table and applies filters on it (removes unwanted data -> extra step), so as the table grows, the Scan operation takes longer

* By default, a Scan operation processes data sequentially in returning 1 MB increment before moving to the next 1 MB of data. It can only scan 1 partition at a time

* When using Query, or Scan, DynamoDB returns all of the item attributes by default. To get just some, rather than all of the attributes, use a **Projection Expression**.

* Improve performance
  * Set a smaller page size
  * Larger number of smaller operations
  * Avoid using Scan when you can use Query
  * Use parallel Scan (but best to avoid it if your table/index has a heavy read/write load)

### DynamoDB Provisioned Throughput

* DynamoDB Provisioned Throughput is measured in capacity units
  * 1 write capacity unit = 1 KB write/s
  * 1 read capacity unit = 1 strong consistent read of 4 KB/s or 2 eventually consistent read of 4 KB/s (default)
  * Calculation: item size / 4 (KB) -> 無條件進位

* DynamoDB On-Demand Capacity
  * Except for Provisioned Throughput, you can use DynamoDB On-Demand Capacity for unpredictable workloads as you don't have to specify your read/write requirements
  * Price model: pay per request

#### ProvisionedThroughputExceededException

* It happens when your request rate is too high for the read/write capacity provisioned on the DynamoDB table
* SDK will automatically retries the requests until successful
* If you are not using the SDK you can:
  * Reduce request frequency
  * Use Exponential Backoff (progressively longer waits between consecutive retries, e.g. 50ms, 100ms, 200ms... for improving flow control)
* Exponential Backoff is a feature of every AWS SDK and applies to many AWS services

### DynamoDB Accelerator (DAX)

* DAX is a fully managed, clustered in-memory cache for DynamoDB (only for read performance)
* Delivers up to a 10x read performance improvement
* Ideal for read-heavy wordloads (e.g. auction, gaming, retail sites during promotion)

* If the item is not available, then DAX performs a **evetually consistent GetItem** operation against DynamoDB

* DAX is not suitable for
  * applications that require strongly consistent reads
  * write intensive applications
  * applications that do not perform many read operations
  * applications that do not require microsecond response time

### DynamoDB Transactions

* ACID Transactions (Atomic, Consistent, Isolated and Durable)
* Read/Write multiple items across multiple tables as an all or nothing operation
* Check for pre-requisite condition before writing to a table

### DynamoDB Streams

* Time-ordered sequence of item-level modifications (insert, update, delete) to your DynamoDB table
* Logs are encrypted at rest and stored for 24 hrs
* Accessed using a dedicated endpoint
* By default the PK is recorded
* Before and after images can be captured
* Lambda can poll DynamoDB Stream and execute code based on the event

![DynamoDB Streams](./img/dynamodb-streams.png)

-----

## KMS, Key Management Service

An AWS service to create and control the encryption keys used to encrypt your data

* Encryption keys are regional
* KMS is multi-tenant

* The Customer Master Key (CMK)
  * can never be exported
  * the key material can be either customer provided or AWS provided

* KMS API Calls
  * `aws kms encrypt`
  * `aws kms decrypt`
  * `aws kms re-encrypt`
  * `aws kms enable-key-rotation`

* Envelope Encrytion
  * CMK (Customer Master Key or Master Key) is used to decrypt the data key (envelope key)
  * Envelope Key is used to decrypt the data/plain text files

    ![Envelope Encrytion](./img/envelope-encrytion.png)
    ![Decryption](./img/decryption.png)

-----

## SQS, Simple Queue Service

Amazon SQS is a distributed queue system that enables web service applications to queue messages that one component in the application generates to be consumed by another component. A queue is a temporary repository for messages that are waiting processing.

* SQS is a **pull-based** system (looking for a job to do)
* Messages can contain up to 256 KB of text in any format
* Messages can be kept in the queue from 1 minute to 14 days (default: 4 days)
* SQS guarantees that your message will be processed at least once

* Managing large messages in S3. To store large SQS messages (256 KB to 2 GB), you'll need:
  * S3 bucket
  * AWS SDK for Java
  * Amazon SQS Extended Client Library for Java

### 2 Types of Queue

1. Standard Queues (default)
    * nearly unlimited transactions
    * output order might be different from input order

2. FIFO Queues
    * limited to 300 transaction per second (TPS)
    * input/output orders are the same

### SQS Visibility Timeout

* The Visibility Timeout is the amount of time that the message is invisible in the SQS queue after a reader picks up the message
* If the message is processed before expired, the message will be deleted from the queue, else it will be visible again and another reader will process it

* Default: 30 seconds
* Increase it if your task > 30 seconds
* Maximum is 12 hours

* The maximum long poll time out: 20 seconds

### SQS Delay Queues

* Postpone delivery of new messages to a queue for a number of seconds
* Messaged sent to the Delay Queue remain invisible to customers for the duration of the deply period
* Default delay is 0 second, maximum is 900

-----

## SNS, Simple Notification Service (Synchronous)

* Push-based delivery
* Supported message format: SMS text message, email, SQS queue, HTTP endpoint
* **Pub-sub (Publish-Substribe) model** whereby users subscribe to topics
* SNS can be used with SQS to **fan out** SQS messages (or a single message) to multiple queues

-----

## SES, Simple Email Service (Asynchronous)

* Suitable for automated emails
* Can also be used to receive emails - incoming mails can be delivered automatically to an S3 bucket
* incoming emails can also be used to trigger Lambda functions and SNS notifications

-----

## Kinesis

* Streaming data - generated continously by thousands of data sources (e.g. purchases from online stores, stock prices, game data, social network data, geospatial data, iOT sensor data)

* Kinesis is a platform to send your streaming data. There are 3 core Kinesis services:

1. Kinesis Streams
    * 24 hours to 7 days retention
    * data are stored in **shards**
    * Read - 5 transactions per second, up to 2 MB per second
    * write - 1000 records per second, up to 1 MB per second
    * The total capacity of the stream is the sum of capacities of its shards
    * As your data rate increases, you increase the number of shards (known as resharding)

2. Kinesis Firehose
    * Data will be analyze automatically (optional), then directly send to S3 or other storages (e.g. Redshift, Elasticsearch cluster)

3. Kinesis Analytics
    * allows you to run SQL queries on Kinesis Streams and Kinesis Firehose then store the result in S3/Redshift/Elasticsearch cluter

* Kinesis Client Library (KCL)
  * runs on the customer instances (e.g. EC2 instances)
  * tracks the number of shards in your stream
  * discovers new shards when you reshard
  * manages the number of record processors relative to the number of shards and consumers

![Kinesis Client Library](./img/kinesis-client-library.png)

-----

## Elastic Beanstalk (EBS)

* Elastic Beanstalk is a service for deploying and scailing web applications onto application server platforms like Apache Tomcat, Nginx, Passenger, Puma and IIS
* Supported languages: Java, PHP, Python, Ruby, Go, Docker, .NET, Node.js
* You can customize your Elastic Beanstalk environment using Elastic Beanstalk configuration files, which are
  * writting in YAML or JSON format
  * must have a .config extension
  * be saved inside a top-level directory called .ebextensions

### EBS Deployment Policies

EBS supports several options for processing deployments:

* All at once
  * Deploys the new version to all instances simultaneously
  * Instances will be out of service during deploying (not ideal for mission-critical production systems)
  * If the update fails, you need to roll back the changes by re-deploying the original version to all instances

* Rolling
  * Deploys the new version in batches
  * Out of service during deploying
  * Not ideal for performance sensitive systems
  * If the update fails, you need to perform an additional rolling update to roll back the changes

* Rolling with additional batch
  * Launches an additional batch of instances
  * Deploys the new version in batches
  * Maintains full capacity during the deployment process
  * If the update fails, you need to perform an additional rolling update to roll back the changes

* Immutable
  * Deploys the new version to a fresh group of instances in their own new auto-scaling group
  * When the new instances pass their health checks, they are moved to your existing auto scaling group, and the old instances are terminated
  * Maintains full capacity during the deployment process
  * The rollback process requires only terminating the new auto-scaling group
  * Preferred option for mission critical production systems

### RDS & EBS

2 different options for launching your RDS instance:

1. Launch with Elastic Beanstalk
    * When you terminate the EBS env, the database will also be terminated
    * Suitable for Dev and Test env only

2. Launch outside Elastic Beanstalk
    * Require security group and connection information
    * Suitable for Prod env, more flexible

-----

## CI/CD

* CI (Continous Integration) - Integrating or merging code changes frequently, at least once per day **(CodeCommit)**

* CD (Continous Delivery/Development) - Automating the build, test and deployment functions
  * Continous Delivery - Manual decision **(CodeCommit, CodeDeploy)**
  * Continous Development - fully automated **(CodePipeline)**

### CodeCommit

CodeCommit is a centralized code repository based on Git

* If you want to get emails for every commit, you can configure Notifications in the console, this will create a CloudWatch Events rule to send a notification to an SNS topic which will trigger an email to be sent to the user

### CodeBuild

* buildspec.yml
  * Define the build commands and settings used by CodeBuild to run your build

### CodeDeploy

2 CodeBuild Deployment Approaches

1. In-Place Deployment
    * the application is stopped on each instance and the new release is installed (Revision). aka a **Rolling Update**
    * The instance will be out of service during the deployment, so the capacity is reduced. You should configure your Elastic Load Balancer to stop sending requests to the instance
    * Roll back: Re-deploy the previous version which can be time consuming
    * Lambda is not supported

2. Blue/Green Deployment (the safest option)
    * new instances are provisioned and the new release is installed on the new instances
    * blue presents the active deployment, green is the new release
    * Roll back: Set the Load Balancer to direct the traffic back to the original environment

![2 CodeBuild Deployment Approaches](./img/codedeploy-diff.png)

* Configuration files (AppSpec)
  * For EC2 and on-premises systems: YAML only
  * For Lambda, YAML and JSON are supported

* Typical folder setup:
  * appspec.yml (must be put in the root dir)
  * Scripts/
  * Config/
  * Source/

* Lifecycle event hooks are run in a specific order known as the Run Order

* CodeDeploy uses tag to find the EC2 instance, so you need to create AppName tag while creating EC2 instance

### CodePipeline

### Elastic Container Service (ECS)

* ECS: runs your containers on clusters of virtual machines. (more control)
* Fargate: (serverless) don't need to worry about the underlying EC2 instances
* ECR: where you can store your container images (Docker or Windows Container)

### CloudFormation

* CloudFormation is a service that allows you to manage, configure and provision your AWS infrastructure as code

* Supports YAML or JSON

* The resulting resources are called a Stack

* Main sections in the CloudFormation template:
  * Parameters - input custom values
  * Conditions (e.g. provision resources based on environment)
  * Resources - (mandatory) the AWS resources to create
  * Mappings - create custom mappings like Region: AMI
  * Tranforms - used to **reference** code located in S3 and also for specifying the use of the Serverless Application Model (SAM) for Lambda deployments
  * Outputs - used to output user defined data relating to the resources you have built and can also used as input to another CloudFormation stack

* CloudFormation Nested Stacks allow re-use of CloudFormation code for common use cases
  * Useful for frequently used configurations (e.g. load balancers, web or application servers)
  * Simply create a CloudFormation template, **store it in S3** and you can reference it in the Resources section of any CloudFormation template using the Stack resource type

* If a part of your CloudFormation deployment fails due to a mis-configuration, by default, CloudFormation will rollback the entire stack

* To prevent CloudFormation from deleting your entire stack on failure, you can:
  1. Use the --disable-rollback flag with the AWS CLI
  2. Set the 'Rollback on failure' radio button to No in the CloudFormation console

### Serverless Application Model (SAM)

* SAM is an extension to CloudFormation used to define serverless applications

-----

## Monitoring

* CloudWatch monitors performance
* CloudTrail monitors API calls in the AWS platform
* AWS Config records the state of your AWS environment and can notify you of changes

### CloudWatch

* You can store your log data in CloudWatch logs for as long as you want

* Default interval: 3 or 5 minutes (detailed monitoring: 1 minute)

* By default, the host level metrics of CloudWatch and EC2 are:
  * CPU
  * Network
  * Disk
  * Status Check

* RAM Utilization is a custom metric
