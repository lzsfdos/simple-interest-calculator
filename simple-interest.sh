#!/bin/bash

echo "Simple Interest Calculator"

read -p "Enter Principal Amount: " principal
read -p "Enter Rate of Interest (%): " rate
read -p "Enter Time (years): " time

interest=$(awk "BEGIN {print ($principal * $rate * $time) / 100}")
total=$(awk "BEGIN {print $principal + $interest}")

echo "Simple Interest: $interest"
echo "Total Amount: $total"
