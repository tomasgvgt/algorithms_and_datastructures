def divide(arr):
    midpoint = len(arr) // 2
    left = arr[:midpoint]
    right = arr[midpoint:]
    return left, right



def merge(left, right):
    arr = []
    i = 0
    j = 0

    while(i < len(left) and j < len(right)):
        if left[i] < right[j]:
            arr.append(left[i])
            i += 1
        else:
            arr.append(right[j])
            j+= 1

    while(i < len(left)):
        arr.append(left[i])
        i += 1
    while(j < len(right)):
        arr.append(right[j])
        j += 1
    return arr




def merge_sort(arr):
    #Base case
    if len(arr) <= 1:
        return arr

    #Divide recursively until hitting base case
    left, right = divide(arr)
    left = merge_sort(left)
    right = merge_sort(right)

    #Conquer (Merge elements)
    arr2 = merge(left, right)

    return arr2
