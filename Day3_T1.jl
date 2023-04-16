function binary_search(arr, y)
    low = 1
    high = length(arr)
    while low <= hight
        mid = (low + high) ÷ 2
        if arr[mid] == y
            return mid
        elseif arr[mid] < y
            low = mid + 1
        else
            high = mid - 1
        end
    end
    return -1
end
