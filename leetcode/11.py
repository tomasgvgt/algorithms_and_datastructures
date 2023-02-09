def maxContainer(height):
    maxArea = 0
    i = 0
    j = len(height) - 1
    while(i < j):
        if height[i] < height[j]:
            smallestLine = height[i]
            area = smallestLine * (j - i)
            i += 1
        else:
            smallestLine = height[j]
            area = smallestLine * (j - i)
            j -= 1
        if area > maxArea:
            maxArea = area
    return maxArea


print(maxContainer([0.0]))
