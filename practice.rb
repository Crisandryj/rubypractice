#practice
array = [8, 3, 5, 7, 11]

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
  sum = 0
  arry.each do |number|
    (1..number).to_a.each do |num|
      if num != 1 || num != number
        sum += (number % num)
      end
    end
  collection.push(number) if sum != 0
    p sum
    sum = 0
  end
  p collection
end

prime(array)
