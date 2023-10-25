import timeit
# Set Operations - 
# The operators only work between two sets. The named opeartors will work
# with itertable structures
moods = {"happy", "sad", "grumpy"}

dwarfs = {"happy", "grumpy", "doc"}


moods | dwarfs    # union: {"happy", "sad", "grumpy", "doc"}
moods.union(dwarfs)
#------------------
moods & dwarfs    # intersection: {"happy", "grumpy"}
moods.intersection(dwarfs)
#------------------
moods - dwarfs    # difference: {"sad"}
moods.difference(dwarfs)

dwarfs - moods    # difference: {"doc"}
dwarfs.difference(moods)
#------------------
moods ^ dwarfs    # symmetric difference: {"sad", "doc"}
moods.symmetric_difference(dwarfs)
#------------------
lemon = {'sour', 'yellow', 'fruit', 'bumpy'}
banana = {'fruit', 'smooth', 'sweet', 'yellow'}
orange = {'fruit', 'bumpy', 'orange', 'sweet'}

for adj in banana | orange | set(banana):
    print(adj)

#------------------
def remove_duplicates(original):
    unique = []
    [unique.append(n) for n in original if n not in unique]
    return unique

# Approach 1: Execution time
print(timeit.timeit('list(set([1,2,3,1,7]))', number = 10000))

# Approach 2: Execution time
print(timeit.timeit(
    'remove_duplicates([1,2,3,1,7])', globals = globals(), number = 10000))