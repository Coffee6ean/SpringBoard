def print_upper_words(words):
    """
    Function to print all string parameters with uppercase 
    """
    for word in words:
        print(word.upper())
    

def print_upper_words_start(words, must_start_with):
    for word in words:
        for letter in must_start_with:
            if word.startswith(letter):
                print(word.upper())
                break    