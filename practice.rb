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
  arry.each do |number|
    (1..number).to_a.each do |num|
      if number % num != 0
        
      else
        collection.push(number)
      end
    end
  end
    p collection
end

prime(array)
