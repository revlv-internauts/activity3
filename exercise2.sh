#!/bin/bash
#exercise_2
echo "1) Add"
echo "2) Subtract"
echo "3) Divide"
echo "4) Multiply"
read -p "Choose an Operation: " input
echo $input

case $input in
	
	1)
	   read -p "Enter the First Number: " fnum
	   read -p "Enter the Second Number: " snum
	   add_result=$((fnum + snum))
 	   echo "Result: $add_result"
	   ;;
	2)
	   read -p "Enter the First Number: " fnum1
	   read -p "Enter the Second Number: " snum1
	   sub_result=$((fnum1 - snum1))
	   echo "Result: $sub_result"
	   ;;
	3) 
 	   read -p "Enter the First Number: " fnum2
	   read -p "Enter the Second Number: " snum2
	   div_result=$((fnum2 / snum2))
	   echo "Result: $div_result"
	   ;;
	4)
	   read -p "Enter the First Number: " fnum3
	   read -p "Enter the Second Number: " snum3
	   mul_result=$((fnum3 * snum3))
	   echo "Result: $mul_result"
	   ;;
esac 	
