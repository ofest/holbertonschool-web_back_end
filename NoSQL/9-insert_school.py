#!/usr/bin/env python3
"""
Function that inserts a new document in a MongoDB collection.
"""

def insert_school(mongo_collection, **kwargs):
    """
    Insert a new document into a MongoDB collection.
    """
    result = mongo_collection.insert_one(kwargs)

    return result.inserted_id
