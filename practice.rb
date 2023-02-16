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

prime(array)
