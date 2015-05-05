The method only checks against the year of the birthday, not the month and date. As a result, if the birthday happens later in the year, then the reported birthday will be one more than the correct answer.

For example, assume that today is May 1st, 2015, and the birthday in question is October 15, 1980. Because `LocalDateTime.now().getYear()` returns `2015` and `birthday.getYear()` returns `1980`, the age is incorrectly returned as `2015 - 1980 = 35`, in spite of the fact that the person is actually 34 and will only turn 35 in another 5.5 months.

Additional lines of logic, to compare the months, days of month, even hours, minutes, etc. are required to make the code behave as expected.