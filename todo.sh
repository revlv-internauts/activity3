#!/bin/bash
#todo's
read -p "Please enter a number: " NUMBER
echo $NUMBER
read -p "Would you like to add a to do task? (1 for yes, 2 for no) : " ANSWER
echo $ANSWER
if [ $ANSWER -eq 1 ]; then
        read -p "Write to do task 1: " TODO1
        echo $TODO1
        read -p "Write to do task 2: " TODO2
        echo $TODO2
        read -p "Write to do task 3: " TODO3
        echo $TODO3
        echo -e "Tasks: \n$TODO1 \n$TODO2 \n$TODO3 "
else
   echo "Thank you have a great day!"
fi

