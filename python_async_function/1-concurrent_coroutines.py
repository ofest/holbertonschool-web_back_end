#!/usr/bin/env python3
"""Module containing wait_n"""
import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Run wait_random n times and return the delays in ascending order.
    """
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]

    output = []
    for task in asyncio.as_completed(tasks):
        result = await task
        output.append(result)

    return output
