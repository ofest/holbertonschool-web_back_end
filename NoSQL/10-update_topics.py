#!/usr/bin/env python3
"""
Function that updates a field
"""
def update_topics(mongo_collection, name, topics):
    """
    Updates or add topics in a mongo collection
    """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
