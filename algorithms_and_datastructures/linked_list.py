#!/usr/bin/env python3

#class node
class Node:
    '''
    Node of a singly linked list
    '''
    data = None
    next = None
    len = 0
    def __init__(self, data):
        self.data = data
    def __repr__(self):
        return '<Node data: %s>' %self.data

#linked list node
class linkedList:
    '''
    Singly linked list
    '''
    len = 0

    def __init__(self):
        self.head = None
        self.tail = None

    def size(self):
        count = 0
        tmp = self.head
        while tmp:
            tmp = tmp.next
            count += 1
        return count

    def length(self):
        return self.len


    def insertFirst(self, value):
        node = Node(value)
        tmp = self.head
        self.head = node
        node.next = tmp
        if self.tail == None:
            self.tail = self.head
            while self.tail.next:
                self.tail = self.tail.next
        self.len += 1

    
    def insertLast(self, value):
        node = Node(value)
        if self.tail:
            self.tail.next = node
        if self.head == None:
            self.head = node
        self.tail = node
        self.len += 1

    def insertIndex(self, value, idx):
        node = Node(value)
        if idx == 0:
            self.insertFirst(value)
        elif idx == self.length():
            self.insertLast(value)
        else:
            tmp = self.head
            for i in range(idx - 1):
                tmp = tmp.next
            node.next = tmp.next
            tmp.next = node
            self.len += 1

    def searchValue(self, value):
        tmp = self.head
        i = 0
        while tmp:
            if tmp.data == value:
                return i
            i += 1
            tmp = tmp.next
        return None
    
    def removeFirst(self):
        if self.head == None:
            return
        self.head = self.head.next
        self.len -= 1
        if self.len == 0:
            self.tail = None


    def removeLast(self): 
        if self.head == None or self.head.next == None:
            self.removeFirst();
            return
        tmp = self.head
        while tmp.next.next:
            tmp = tmp.next
        self.tail = tmp
        tmp.next = None
        self.len -= 1

    def removeIndex(self, idx):
        if idx == 0 or self.head == None or self.head.next == None:
            self.removeFirst()
        elif idx == self.len - 1:
            self.removeLast()
        else:
            tmp = self.head
            for i in range(idx - 1):
                tmp = tmp.next
            tmp.next = tmp.next.next
            self.len -= 1
    
    def print(self):
        tmp = self.head
        while(tmp):
            print(tmp.data)
            tmp = tmp.next


## NOTES TO IMPROVE:
    #More efficient implementation of setting tale in insertFist

l = linkedList()
l.insertFirst(10)
l.insertLast(20)
# l.insertIndex(15, 1)
