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



def is_valid_ip(ip)
  nums = Array(0..255).join(',').split(',')
  array = []
  arry = ip.split('')
  dotCount = arry.count('.')

    if dotCount == 3
       array = ip.split('.')
       if array.count == 4
       array.each do |n|
      unless nums.include?(n)
        return false
      end
    end
  else
   return false
end

    else
      return false
    end

  return true
end

#create hash with roman numerals
ROMAN = {
'I' => 1,
'V' => 5,
'X' => 10,
'L' => 50,
'C' => 100,
'D' => 500,
'M'  => 1000}

#convert roman number to a regular number
def solution(roman)

array = roman.split('')
numArray = array.map {|letter| ROMAN[letter]}
  start = 0
  sum = 0
  n = 1
  lngth = numArray.count + 1
  while n < lngth
     current = numArray[start]
  #add each letter if the number ahead is greater
    if n >= numArray.count
      sum += current
      return sum
    elsif current >= numArray[n]
      sum += (current + numArray[n])
      start += 2
      n += 2
      else
      #subract greater number - lesser number and add this to total
      sum += (numArray[n] - current)
      start += 2
       n += 2
    end
  end
   return sum
end

def isPrime(num)
  if num <= 1
    return false
    else
    arry = Array(2..num -1)
      if arry.any? {|n| num % n == 0}
        return false
      else
        return true
      end
  end
end
#check if s1 has the letters of s2g
def scramble(s1,s2)
   hash1 = s1.chars.group_by {|l| l}.transform_values {|values| values.count}
   hash2 = s2.chars.group_by {|l| l}.transform_values {|values| values.count}
  if s2.chars.all?{|n| s1.include?(n)}
    if s2.chars.all?{|l| hash1[l] >= hash2[l]}
     return true
   else
     return false
    end
    else
    return false
  end
end

p scramble('acef', 'facce')

array1 = [1,2,3,4]
array2 = [1,2,3]
s1 = 'gomojo'
s2 = 'afkjagdgao'
p 'array'.capitalize
#scan(/\w+/) — create an array of all sequences of 'word' characters
#max_by{ … } — find the word that gives the largest value inside this block
#chars — split the string into characters
#group_by(&:to_s) — create a hash mapping each character to an array of all the occurrences
#values — just get all the arrays of the occurrences
#map(&:size) — convert each array to the number of characters in that array
#max — find the largest characters and use this as the result for max_by to examine
s1.scan(/\w+/).max_by{ |w| w.chars.group_by(&:to_s).values.map(&:size).max }

def generateHashtag(str)
 if str.gsub(/\s+/, "").chars.count <= 0 || str.gsub(/\s+/, "").chars.count >= 140
   return false
   else
   ('#' + str.split.map(&:capitalize).join)
  end
end

def digital_root(n)
  return n if n < 10
  digital_root(n.to_s.chars.map(&:to_i).reduce(&:+))
end

def get_pins(observed)
  hash = { '1' => ['1','2','4'], '2' =>['1','2','3','5'], '3' => ['2','3','6'],
           '4' => ['1','4','5','7'], '6' =>['2','4','5','6','8'], '7' =>['4','7','8'], '8' =>['0','5','7','8','9'] ,
           '9' => ['6','8','9'], '0' => ['0','8']  }

  code = observed.split('')
  combinations = []

  code.each do |n|
     hash[n]
  end
end
#codewats ranking system
class User
  def initialize
    @rank = -8
    @progress = 0
  end

  def rank
    @rank
  end

  def progress
    @progress
  end

  def add(a,b)
    return a + b
  end

   def inc_progress(rank)
    if @rank == rank
      @progress += 3
      self.inc_rank
    elsif rank == @rank -1
      @progress += 1
      self.inc_rank
    elsif rank <= @rank - 2
        @progress
      self.inc_rank
    else rank > @rank
      if rank < 0 && @rank < 0
         d = rank.abs - @rank.abs
      @progress += (10 * d * d)
        self.inc_rank
        end
     end
    end

  def inc_rank
    @rank += 1 if @progress >= 100
    @progress -= 100 if @progress >= 100
  end

end

user = User.new

user.inc_progress(5)

p user.progress
