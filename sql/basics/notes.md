SQL Basics - 2019-12-4


students are more than 40

SELECT * FROM students WHERE age > 40


students that have registered in the last 180 days

SELECT CURRENT_DATE + INTERVAL '10 day';  --helper query showing syntax

Answer:
SELECT *
FROM students
WHERE registration_date > CURRENT_DATE + INTERVAL '-180 day'

Exercise:  How many people registered between Sept 1-15

Answer 1:

SELECT COUNT(*)
FROM students
WHERE registration_date BETWEEN 'September 1, 2019' AND 'Sept 15, 2019'

Answer 2:



Other Notes from query screen
-----------------------------

-- SELECT CURRENT_DATE + INTERVAL '10 day';

/*
SELECT *
FROM students
WHERE registration_date > CURRENT_DATE + INTERVAL '-180 day'


SELECT COUNT(*)
FROM students
WHERE registration_date BETWEEN 'September 1, 2019' AND 'Sept 15, 2019'

SELECT COUNT(*)
FROM students
WHERE registration_date >= 'Sept 1, 2019'
AND registration_date <= 'September 15, 2019'


SELECT COUNT(*)
FROM students
WHERE registration_date = 'September 15, 2019'
*/

SELECT *
FROM students
WHERE registration_date >= 'Sept 2, 2019'
AND registration_date <= 'Sept 3, 2019'


ids more than 100 and less than 200

SELECT *
FROM students
WHERE id > 100 AND id < 200

Exercise:  age greater than 20 or less than 40
SELECT *
FROM students
WHERE age > 40 OR age < 20

SELECT COUNT(*)
FROM students
WHERE  NOT (age BETWEEN 20 AND 40)

Ex:  All students whos ages are null or less than 20


SELECT *
FROM students
--WHERE first_name LIKE 'Jo%'
WHERE first_name LIKE '%nn%'
OR last_name LIKE '%nn%'

Ex:  Students that registered between 120 day ago and 90 days ago

SELECT  COUNT(*)
FROM students
WHERE registration_date BETWEEN CURRENT_DATE + INTERVAL '-120 day'
AND CURRENT_DATE + INTERVAL '-90 day'

SELECT count(*)
FROM students
WHERE registration_date >= CURRENT_DATE + INTERVAL '-120 day'
AND registration_date <= CURRENT_DATE + INTERVAL '-90 day'


SELECT  first_name, last_name, email, age, registration_date
FROM students
WHERE registration_date BETWEEN CURRENT_DATE + INTERVAL '-120 day'
AND CURRENT_DATE + INTERVAL '-90 day'
ORDER BY age DESC



SELECT *
FROM students
WHERE first_name iLIKE '%nn%'
ORDER BY last_name

EX:  first or last name contains 'll', sorted by age descending and then last last_name
SELECT  first_name, last_name, email, age, registration_date
FROM students
WHERE first_name ILIKE '%ll%' OR last_name ILIKE '%ll%'
ORDER BY age DESC, last_name

LIMIT 10



SELECT  count(*) AS my_answer
FROM students AS st
WHERE first_name ILIKE '%ll%' OR last_name ILIKE '%ll%'
--ORDER BY age DESC, last_name


Ex:  Max, Min, average and total ages of students
SELECT  SUM(age) AS total_age, AVG(age) AS average_age, MAX(age) AS maximum_age, MIN(age) AS minimum_age
FROM students

Ex:  Find the max age of the students whose first name begins with J

SELECT  MAX(age) AS Max_age_of_J
FROM students
WHERE first_name ILIKE 'J%'


Ex:  Get Num of students with same first name in descending
SELECT first_name, COUNT(*) AS Num_of_students
FROM students
GROUP BY first_name
ORDER BY 2 DESC
