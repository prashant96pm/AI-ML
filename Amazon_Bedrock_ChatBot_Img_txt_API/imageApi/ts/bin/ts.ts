#!/usr/bin/env node
import 'source-map-support/register';

import { TsStack } from '../lib/ts-stack';

const app = new cdk.App();
new TsStack(app, 'TsImageStack', {

});