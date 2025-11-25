#!/usr/bin/env python3
"""
Module that takes an argument to wait random delay.
"""
import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """
    Docstring for wait_random

    :param max_delay: waits for a random delay between 0
    :type max_delay: int of 10
    :return: the random delay
    """
    random_delay = random.uniform(0, max_delay)
    await asyncio.sleep(random_delay)
    return random_delay
