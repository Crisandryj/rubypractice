#gets file name
filename = ARGV.first
#same prompt value to prompt variable
prompt = ">"
#opens file in prompt and saves to txt
txt = File.open(filename)
#shows files name
puts "Here's your file: #{filename}"

#reads whats in file
puts txt.read()

#does it again
puts "I'll also ask you to type it again"
print prompt
file_again = STDIN.gets.chomp()

txt_again = File.open(file_again)

puts txt_again.read()
