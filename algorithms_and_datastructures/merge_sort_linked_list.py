from linked_list import Node, linkedList

def divide(alist):
    midpoint = alist.length() // 2
    #traverse list until mid point, creating a new left list and a new right list
    left = linkedList()
    right = linkedList()
    tmp = alist.head
    i = 0
    while(tmp):
        if(i < midpoint):
            left.insertLast(tmp.data)
        else:
            right.insertLast(tmp.data)
        tmp = tmp.next
        i+=1
    return left, right

def merge(left, right):
    merged = linkedList()
    tmp1 = left.head
    tmp2 = right.head
    while(tmp1 and tmp2):
        if(tmp1.data < tmp2.data):
            merged.insertLast(tmp1.data)
            tmp1 = tmp1.next
        else:
            merged.insertLast(tmp2.data)
            tmp2 = tmp2.next
    while(tmp1):
        merged.insertLast(tmp1.data)
        tmp1 = tmp1.next
    while(tmp2):
        merged.insertLast(tmp2.data)
        tmp2 = tmp2.next
    return merged

def mergeSort(alist):
    #base case
    if(alist.length() <= 1):
        return alist
    #divide
    left, right = divide(alist)
    left = mergeSort(left)
    right = mergeSort(right)
    #conquer
    merged = merge(left, right)
    return merged


def test(alist):
    if alist.length() <= 1:
        return True
    tmp = alist.head.next
    newlist = linkedList()
    while(tmp):
        newlist.insertLast(tmp.data)
        tmp = tmp.next
    return alist.head.data <= alist.head.next.data and test(newlist)


listica = linkedList()
listica.insertLast(7)
listica.insertLast(2)
listica.insertLast(20)
listica.insertLast(5)
listica.insertLast(8)
listica.insertLast(1)
listica.insertLast(0)
mergeadita = mergeSort(listica)


print(test(listica))
print(test(mergeadita))
mergeadita.print()