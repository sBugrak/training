square_matrix = [
    [4],
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
    ]


def diagonal_difference(arr):
    length_of_the_array = arr[0][0]
    left_diagonal = 0
    right_diagonal = 0
    for i in range(length_of_the_array+1):
        # print(i)
        if not (i==0):
            for j in range(length_of_the_array):
                if (i == j+1):
                    left_diagonal += arr[i][j]
                if (i == length_of_the_array - j):
                    right_diagonal += arr[i][j]
    print (left_diagonal, right_diagonal)
    return abs(left_diagonal - right_diagonal)


    # print(abs(left_diagonal-right_diagonal))



print(diagonal_difference(square_matrix))