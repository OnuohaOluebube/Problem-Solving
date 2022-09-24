class Solution(object):
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        res = 0
        l,r = 0, len(height) - 1
        while l < r:
            res = max(res, min(height[r], height[l]) * (r - l))
            if height[l] < height[r]:
                l += 1
                
            elif height[r] <= height[l]:
                r -= 1
        return res
                
            
        