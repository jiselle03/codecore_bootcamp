hello!

select title
from projects
WHERE student_id = 2

select student_id, score, course_id
from enrolments
where course_id = 1;

select *
from projects pr
inner join students st ON student_id = pr.id

select st.first_name, st.last_name, pr.title
from students AS st
INNER JOIN projects pr ON pr.student_id = st.id
ORDER BY st.first_name

select st.first_name, st.last_name, c.title, en.score
from courses c
INNER JOIN enrolments en ON en.course_id = c.id
INNER JOIN students st ON st.id = en.student_id
where title ILIKE '%tr%'
ORDER BY st.last_name

--CLASSES WITH Jo
SELECT st.first_name, st.last_name, c.title, en.score
FROM students st
INNER JOIN enrolments en ON en.student_id = st.id
INNER JOIN courses c ON en.course_id = c.id
WHERE st.first_name LIKE 'Jo%'
ORDER BY st.first_name;

--Same but with different order of tables

SELECT st.first_name, st.last_name, c.title, en.score
FROM courses c
INNER JOIN enrolments en ON en.course_id = c.id
INNER JOIN students st ON st.id = en.student_id
WHERE st.first_name LIKE 'Jo%'
ORDER BY st.first_name;


select st.first_name, st.last_name, pr.title
--count(st.*) as student_count,
--	count(pr.*) as project_count,
 --   count(*) as student_projects_count
from students st
LEFT JOIN projects pr ON pr.student_id = st.id
--WHERE pr.title IS NULL

--students with no projects
select count(*) --st.first_name, st.last_name, pr.title
--count(st.*) as student_count,
--	count(pr.*) as project_count,
 --   count(*) as student_projects_count
from students st
LEFT JOIN projects pr ON pr.student_id = st.id
WHERE pr.title IS NULL


--group by ages
select age, count(*) AS Result, ARRAY_AGG(first_name)
FROM students st
--WHERE age IS NULL
GROUP BY age
ORDER BY 2 DESC


SELECT AVG(e.score) AS average_score,
	c.title AS course_title,
    COUNT(e.*) AS NumOfStudents
FROM courses c
LEFT JOIN enrolments e ON e.course_id = c.id
GROUP BY c.title
ORDER BY average_score DESC

--
SELECT c.title, MAX(s.registration_date)
FROM courses c
LEFT JOIN enrolments e ON e.course_id = c.id
LEFT JOIN students s ON s.id = e.student_id
GROUP BY c.title
ORDER BY MAX(s.registration_date)



--
SELECT *
FROM
(

  SELECT COUNT(e.*) AS en_students, c.title
  FROM enrolments e
  INNER JOIN courses c ON c.id = e.course_id
  GROUP BY c.title
  ORDER BY 1 DESC

 ) x
 WHERE x.en_students > 4


--


SELECT *
FROM
(
  SELECT
      AVG(e.score) AS AverageScore,
  	  COUNT(e.*) AS EnrolmentCount,
      c.title AS course_title,
      c.id AS course_id
  FROM courses c
  LEFT JOIN enrolments e ON e.course_id = c.id
  GROUP BY c.title, c.id
) x
WHERE x.AverageScore < 60

--OR with a join on subquery
