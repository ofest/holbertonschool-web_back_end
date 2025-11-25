#!/usr/bin/env python3
"""function that multiplies """
from typing import Callable


def make_multiplier(multiplier : float) -> Callable[[float], float]:
    """
    Attributes: multiplier : float as argument

    Returns: A function that multiples the float
    """
    def multiply(v: float) -> float:
        return multiplier * v
    return multiply
