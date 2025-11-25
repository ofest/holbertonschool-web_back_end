#!/usr/bin/env python3
"""function that sum up float"""
  
from typing import List
"""
    a function that sums a mixed list of int and floats

    Attributes:
        sum_list(input_list: List[float])): floats

    Returns:
        result(float): the sum of all the values in the list
    """
def sum_list(input_list: List[float]) -> float:
       return sum(input_list)