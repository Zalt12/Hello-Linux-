#!/bin/bash

colors=("\\e[31m" "\\e[32m" "\\e[33m" "\\e[34m" "\\e[35m" "\\e[36m")  # List of colors
reset_color="\\e[0m"  # Reset color code
while true; do
    color=${colors[$((RANDOM % ${#colors[@]}))]}  # Pick a random color from the list
    echo -en "\r$color Hello, Linux! $reset_color"   # Print the colored message
    sleep 1  # Pause for a moment before changing color
done
