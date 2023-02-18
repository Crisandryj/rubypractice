#practice
array = [8, 3, 5, 7, 11,9]

count = 0

def count(array)
  num = 0
array.each do |n|
  if n > 5
    num += 1
  end
 end
 p num
end


# if any number other than 1 and itself leaves a remainder of 0

def prime(arry)
  collection = []
  arry.each do |number|
    (2..number-1).to_a.each do |num|
        if number % num == 0
        collection.push(number)
        break
        end
    end
  end
  collection.each do |n|
    arry.delete(n)
  end
  p arry
end


def factorial(n)
  if n <= 1
return 1
  end
     n * factorial(n - 1)
end

#take first number and compare it all numbers ahead of it
#take the second number compare it to all numbers ahead of it
def repeatNumber(num)
  array = num.to_s.split('')
  count = array.count
  repeats = 0
  finish = count - 1
  collection = []
  array.each do |n|
    current = n
    index = array.find_index(n)
    start = index + 1
    array[start..finish].each do |num|
      if current != num
        return 'not repeat number'
      end
    end
  end
  return 'repeat number'
end


array = [2, 1, 5, 4, 6, 9, 7, 10]

def findMissingNumber(array)
  max = array.max
  arry = Array(1..max)
  missing = []
  arry.each do |n|
      unless array.include?(n)
        p n
      end
    end
end


findMissingNumber(array)
