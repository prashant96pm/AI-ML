#!/usr/bin/env python3
import os

import aws_cdk as cdk




app = cdk.App()
PyStack(app, "PyImageApiStack",
   )

app.synth()
