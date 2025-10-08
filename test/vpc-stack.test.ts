import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { VpcStack } from '../lib/vpc-stack';

test('VPC Created', () => {
  const app = new cdk.App();
  const stack = new VpcStack(app, 'TestStack');
  const template = Template.fromStack(stack);

  template.resourceCountIs('AWS::EC2::VPC', 1);
});
