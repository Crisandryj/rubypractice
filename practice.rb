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



def prime(arry)
  collection = []
  sum = 0
  arry.each do |number|
    (1..number).to_a.each do |num|
      sum += (number % num)
    end
    collection.push(number) if sum != 0
    p sum
    sum = 0
  end
  p collection
end

prime(array)
