#!/usr/bin/env python3
"""
Module that execute multiple coroutines at the same time with async
"""
import asyncio
from basic_async_syntax import wait_random 


async def wait_n(n:int, max_delay: int = 10) -> list:
    """
    Docstring for wait_n
    
    :param n: the number of coroutines to spawn
    :type n: int
    :param max_delay: (the maximum delay
    :type max_delay: int
    :return: Return the list of delays
    :rtype: list
    """
    task = [wait_random(max_delay) for _ in range(n)]
    delays = await asyncio.gather(*task)
    return delays 
