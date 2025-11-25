#!/usr/bin/env python3
"""function that sum up float and ints """
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Attributes: k: str, v: Union[int, float]): string or float

    Returns: result(float): return a tuple
    """
    return (k, float(v ** 2))
