# Prueba Técnica Full Stack Developer - Daniel Blázquez Escobar

## Exercice 1
Write a single SQL query which returns:<br>
a. The region Name.<br>
b. The average sales per employee for the region (Sales per region / Num of
employees)<br>
c. The difference between the average sales of the region and the highest average
sales, and the average sales per employee for the region.
<br><br>
Note: The resulting query should have 4 columns. Employees can have multiple sales; A region
could have no sales.<br>
<br>
Utilizaremos la siguiente sentencia SQL:

```
SELECT 
    R.NAME AS Region_Name,
    COALESCE(SUM(S.AMOUNT) / NULLIF(COUNT(DISTINCT E.ID), 0), 0) AS Avg_Sales_Per_Employee,
    MAX(SUM(S.AMOUNT) / NULLIF(COUNT(DISTINCT E.ID), 0)) OVER () AS Highest_Avg_Sales,
    COALESCE(SUM(S.AMOUNT) / NULLIF(COUNT(DISTINCT E.ID), 0), 0) - 
    MAX(SUM(S.AMOUNT) / NULLIF(COUNT(DISTINCT E.ID), 0)) OVER () AS Sales_Difference
FROM 
    REGIONS R
LEFT JOIN 
    STATES ST ON R.ID = ST.REGION_ID
LEFT JOIN 
    EMPLOYEES E ON ST.ID = E.STATE_ID
LEFT JOIN 
    SALES S ON E.ID = S.EMPLOYEE_ID
GROUP BY 
    R.NAME;
```

![image](https://github.com/ZenQ98/FSD_TEST/assets/143850708/41159081-dece-41b0-8a2a-0a3b6bef8ef7)
