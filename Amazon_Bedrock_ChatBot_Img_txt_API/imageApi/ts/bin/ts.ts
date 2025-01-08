#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { TsStack } from '../lib/ts-stack';


new TsStack(app, 'TsImageStack', {

});