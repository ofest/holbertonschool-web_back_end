#!/usr/bin/env python3
"""function that give a length """


from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Returns:  return values with the appropriate types """
    return [(i, len(i)) for i in lst]
