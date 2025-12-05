#!/usr/bin/env python3
"""
Function that search for documents with specific topics
"""
def schools_by_topic(mongo_collection, topic):
    """
    Returns a list of schools that have a specific topic.
cuments that contain the topic.
    """
    cursor = mongo_collection.find({"topics": topic})

    result = []
    for value in cursor:
        result.append(value)

    return result
