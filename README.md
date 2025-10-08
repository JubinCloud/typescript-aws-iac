# typescript-aws-iac

# TypeScript AWS IaC

This repository contains an **Infrastructure-as-Code (IaC) project using AWS CDK with TypeScript**.  
It demonstrates best practices for structuring CDK projects and includes an example VPC stack.

---

## 🚀 Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- [AWS CLI](https://aws.amazon.com/cli/) configured with credentials
- [AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html) installed globally
  ```bash
  npm install -g aws-cdk
📦 Setup
Install dependencies:

bash
Copy code
npm install
Build TypeScript code:

bash
Copy code
npm run build
Run unit tests:

bash
Copy code
npm run test
🏗️ CDK Commands
Synthesize CloudFormation templates:

bash
Copy code
cdk synth
Deploy stack to AWS:

bash
Copy code
cdk deploy
You may need to confirm IAM changes during deployment.

View differences between local code and deployed stack:

bash
Copy code
cdk diff
📂 Project Structure
arduino
Copy code
typescript-aws-iac/
├── bin/              # Entry point of CDK app
│   └── app.ts
├── lib/              # CDK stacks
│   └── vpc-stack.ts
├── test/             # Unit tests
│   └── vpc-stack.test.ts
├── cdk.json
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md
🛠️ Example Stack
The included VpcStack demonstrates:

Multi-AZ VPC

Public and private subnets

NAT gateway

Outputs VPC ID

You can extend this repo by adding more stacks, e.g., Lambda + API Gateway, S3 buckets, or RDS instances.

📖 References
AWS CDK Documentation

TypeScript CDK Patterns

CDK Best Practices

yaml
Copy code
