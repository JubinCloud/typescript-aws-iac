import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

interface VpcStackProps extends cdk.StackProps {}

export class VpcStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: VpcStackProps) {
    super(scope, id, props);

    // Example: simple VPC with public/private subnets
    const vpc = new ec2.Vpc(this, 'DemoVPC', {
      maxAzs: 2,
      natGateways: 1,
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'PublicSubnet',
          subnetType: ec2.SubnetType.PUBLIC
        },
        {
          cidrMask: 24,
          name: 'PrivateSubnet',
          subnetType: ec2.SubnetType.PRIVATE_WITH_NAT
        }
      ]
    });

    new cdk.CfnOutput(this, 'VpcId', { value: vpc.vpcId });
  }
}
