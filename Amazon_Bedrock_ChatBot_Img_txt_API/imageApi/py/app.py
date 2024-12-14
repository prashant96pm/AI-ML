#!/usr/bin/env python3
import os



from py.py_stack import PyStack


app = cdk.App()
PyStack(app, "PyImageApiStack",
   )

app.synth()
