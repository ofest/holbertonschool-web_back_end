#!/usr/bin/env python3
"""
takes two integer arguments
"""


def index_range(page, page_size):
    """
    function should return a tuple of size two
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)
