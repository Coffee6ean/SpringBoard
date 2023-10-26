# Installing Libraries -
# Python includes dozens of useful libraries
# There are over 100,000 additional available ones :)

from colorsys import rgb_to_hls
rgb_to_hls(255, 0, 30)  #=> (0.9803921568627451, 127.5, -1.007905138339921)
#------------------
import calendar
cal = calendar.TextCalendar()
cal.prmonth(2025, 4)
#=> 
"""
     April 2025
Mo Tu We Th Fr Sa Su
    1  2  3  4  5  6
 7  8  9 10 11 12 13
14 15 16 17 18 19 20
21 22 23 24 25 26 27
28 29 30
"""

cal.prmonth(1945, 12)
#=>
"""
   December 1945
Mo Tu We Th Fr Sa Su
                1  2
 3  4  5  6  7  8  9
10 11 12 13 14 15 16
17 18 19 20 21 22 23
24 25 26 27 28 29 30
31
"""

calendar.HTMLCalendar().formatmonth(2020,3)
#=>
"""
'<table border="0" cellpadding="0" cellspacing="0" class="month">\n<tr><th colspan="7" class="month">March 2020</th></tr>\n<tr><th class="mon">Mon</th><th class="tue">Tue</th><th class="wed">Wed</th><th class="thu">Thu</th><th class="fri">Fri</th><th class="sat">Sat</th><th class="sun">Sun</th></tr>\n<tr><td class="noday">&nbsp;</td><td class="noday">&nbsp;</td><td class="noday">&nbsp;</td><td class="noday">&nbsp;</td><td class="noday">&nbsp;</td><td class="noday">&nbsp;</td><td class="sun">1</td></tr>\n<tr><td class="mon">2</td><td class="tue">3</td><td class="wed">4</td><td class="thu">5</td><td class="fri">6</td><td class="sat">7</td><td class="sun">8</td></tr>\n<tr><td class="mon">9</td><td class="tue">10</td><td class="wed">11</td><td class="thu">12</td><td class="fri">13</td><td class="sat">14</td><td class="sun">15</td></tr>\n<tr><td class="mon">16</td><td class="tue">17</td><td class="wed">18</td><td class="thu">19</td><td class="fri">20</td><td class="sat">21</td><td class="sun">22</td></tr>\n<tr><td class="mon">23</td><td class="tue">24</td><td class="wed">25</td><td class="thu">26</td><td class="fri">27</td><td class="sat">28</td><td class="sun">29</td></tr>\n<tr><td class="mon">30</td><td class="tue">31</td><td class="noday">&nbsp;</td><td class="noday">&nbsp;</td><td class="noday">&nbsp;</td><td class="noday">&nbsp;</td><td class="noday">&nbsp;</td></tr>\n</table>\n'
"""
#------------------
import webbrowser

url = 'http://docs.python.org/'
webbrowser.open_new_tab(url)

#------------------
# Using Pip:
# To install a new package:
"""
$ pip3 install forex_python
... pip output here...

$ ipython
In [1]: from forex_python.converter import convert
In [2]: convert("USD", "GBP", 10)
7.6543
"""
