filename = ARGV.first

script = $0

puts "We're goign to erase #{filename}."
puts "if you don't want that, hit CRTL-C."
puts "If you do want that, hit RETURN."

print "? "
STDIN.gets

puts "Opening the file..."
target = File.open(filename, "w")

puts "Truncating the file. Goodbye!"
target.truncate(target.size)
#puts
puts "Now I'm going to ask you for three lines."
#print
print "line1: "; line1 = STDIN.gets.chomp()
