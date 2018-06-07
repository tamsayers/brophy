#!/bin/bash

folders=("images", "images/reliefs", "images/vessels", "images/words")

for folder in ${folders[@]}; do
  for file in $folder/*.sm.jpg; do rm "$file"; done

  for file in $folder/*.jpg; do cp -a "$file" "${file%.jpg}.sm.jpg"; done

  sips -Z 650 $folder/*.sm.jpg
done
