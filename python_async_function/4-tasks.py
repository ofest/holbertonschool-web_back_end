#!/usr/bin/env python3
"""Module containing task_wait_random"""
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_random(n: int, max_delay: int) -> List[float]:
    """
    Run task_wait_random n times and return the delays in ascending order.
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]

    output = []
    for task in asyncio.as_completed(tasks):
        result = await task
        output.append(result)

    return output
