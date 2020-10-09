#!/bin/bash

if [ $# -ne 1 ]; then
  echo "[Usage] sh $0 description"
  exit 1
fi

script_dir=$(dirname $0)
timestamp=$(date +%Y%m%d%H%M%S)
description=$1
cd "${script_dir}/../"
path="$(pwd)/src/main/resources/db/migration/V${timestamp}__${description}.sql"
touch $path
git add $path
echo "[MIGRATION CREATED] ${path}"

echo $path | tr -d '\n' | pbcopy
echo "Path is copied to clipboard!"

