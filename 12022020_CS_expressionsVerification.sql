-- https://app.codesignal.com/arcade/db/would-you-like-the-second-meal/TfCxoCqHXShx7Hhzt

CREATE PROCEDURE expressionsVerification()
BEGIN
	/* Write your SQL here. Terminate each statement with a semicolon. */
    SELECT *
    FROM expressions
    WHERE (operation='+' AND c=a+b) OR
        (operation = '-' AND c=a-b) OR
        (operation = '*' AND c=a*b) OR
        (operation = '/' AND c=a/b)
    ORDER BY ID;
END

--This one was tough because I started by trying to interpolate the arithmetic operator
--What I needed was the above solution.