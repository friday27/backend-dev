# AWS Note

Based on [Udemy: Ultimate AWS Certified Developer Associate 2020](https://www.udemy.com/course/aws-certified-developer-associate-dva-c01)

## TODOs

## Basics

* AWS Availability Zones (AZ) - Geographically-isolated (but connected) data centers
* Check [Region Table](https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/?p=ngi&loc=4) if the service you want to use is not supported in your current region.

## IAM, Identity and Access Management (Global Service)

* IAM is at the center of AWS as your whole AWS security is there: users, groups, roles.
* Permissions are governed by policies, which are written in JSON (JavaScript Object Notation).
* IAM Federation - Enterprises integrate their own repository of users with IAM using SAML standard (Active Directory).
* MFA (Multi Factor Authentication) can be setup (e.g. Google Authenticator app).
* Least Privilege Principle: It's best to give users the minimal amount of permissions they need to perform their jobs.
* 1 IAM user for 1 person; 1 IAM role for 1 application.

## EC2, Elastic Compute Cloud (Reginal Service)

* It mainly consists in the capability of:
  * Renting virtual machines (EC2)
  * Storing data in virtual drives (EBS)
  * Distributing load across machines (ELB)
  * Scaling the services using an auto-scaling group (ASG)

* Launch an instance
  * The operating systme in saved in a disk called **storage**.
  * It's better to add a tag called **Name** as it will show in the UI.
  * Security Group: the firewall around your instance.
  * Key pair allows you to ssh into the instance.

* SSH into EC2 instance
  1. Copy the public IP of your instance
  2. `chmod 0400 EC2Turotial.pem` (needed to solve **permission error exception**)
  3. `ssh -i EC2Tutorial.pem ec2-user@your_public_ip`
  4. User `logout` to logout

* SSH connection could be edited through EC2/Security Groups/Inbound rules

### Security Groups

* Security groups are acting as a "firewall" on EC2 instances.
* The relationship between security groups and instances is N-to-N.
* Security groups are locked down to a region/VPC combination. i.e. If you switch region, you'll need to create a new security group.
* It live outside the EC2 - if traffic is blocked, the EC2 instance won't see it.
* It's good to maintain 1 seperate security group for SSH access.
* By default, all inbound traffic is blocked and all outbound traffic is authorised.

### Private v.s. Public v.s. Elastic IP

* Networking has 2 sorts of IPs
  * IPv4: 1.160.10.240 (the most common format used online)
  * IPv6: 3ffe: 1900:4545:3:200:f8ff:fe21:67cf (newer, for IoT)

![Private v.s. Public IP(IPv4)](./img/ip.png)

* Public IP
  * The machine can be identified on the internet (WWW).
  * Must be unique across the whole web.
  * Can be geo-located easily
* Private IP
  * The machine can only be identified on a private network.
  * Must be unique across the private network.
  * Machines connect to WWW using a NAT device + internet gateway (a proxy)
  * Only a specified range of IPs can be used as private IPs.
* Elastic IP
  * Basically when you restart an ECs instance, it can change its public IP. If you need to have a fixed public IP for your instance, you need an Elastic IP.
  * An Elastic IP is a public IPv4 IP you own as long as you don't delete it.
  * You can attach it to only 1 instance at a time.
  * You can only have 5 Elastic IP in your account (could ask AWS to increase that).
  * Overall, try to avoid using Elastic IP. Use a random public IP and register a DNS name to it. (more scalable), or use a Load Balancer.

### Install Apache on EC2

1. SSH into the instance
2. `sudo su` to switch to root account
3. `yum update -y` forces the machine to update itself
4. `yum install -y https.x86_64`
5. `systemctl start httpd.service`
6. `systemctl enable httpd.service`
7. `curl localhost:80`
8. Add an inbound rule in security groups for HTTP (port 80) to solve **network timeout issue**
9. Use browser to connect http://public_ip:80
10. `echo "Hello World from $(hostname -f)" > /var/www/html/index.html`

### EC2 User Data

* You could boostrap your instances using an EC2 User Data script, which will only run once at the instance first start.
* EC2 user data is used to automate boot tasks (installing updates, installing softwares, downloading common files...etc).
* EC2 user data script runs with the root user.
* Add EC2 user data script at step 3 (Configure Instance) of Launch instance/Advanced Details

    #!/bin/bash
    yum update -y
    yum install -y httpd.x86_64
    systemctl start httpd.service
    systemctl enable httpd.service
    echo "Hello World from $(hostname -f)" > /var/www/html/index.html
