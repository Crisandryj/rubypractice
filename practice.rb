#practice
array = [3,5,3,4,5,6,7,8]

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

count(array)
