#!/bin/bash

rainbow_colors=("31" "33" "32" "36" "35" "34") # Red, Yellow, Green, Cyan, Purple, Blue
text="Hello Linux"
length=${#text}
speed=0.05

clear

while true; do
    for (( i=0; i<$length; i++ )); do
        for j in {1..5}; do
            color=${rainbow_colors[$i % ${#rainbow_colors[@]}]}
            letter="${text:$i:1}"
            for (( k=0; k<20; k++ )); do
                printf "\e[1;${color}m$letter\e[0m"
                sleep $speed
                printf "\r"
                sleep $speed
            done
            for (( k=20; k>=0; k-- )); do
                printf "\e[1;${color}m$letter\e[0m"
                sleep $speed
                printf "\r"
                sleep $speed
            done
        done
    done
done
