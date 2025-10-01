#!/bin/bash
cd /home/kavia/workspace/code-generation/preoperative-charting-system-for-or-nurses-5971-5980/acs_nr_preop_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

