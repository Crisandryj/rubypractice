#this one is like your scripts with argv
def puts_two(*args)
    arg1,arg2 = args
  puts "args1: #{arg1}, arg2: #{arg2}"
end

#ok, that *args is actually pointless, we can just do this
def puts_two_again(arg1, arg2)
  puts "arg1: #{arg1}, arg2: #{arg2}"
end
