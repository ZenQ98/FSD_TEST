# Prueba Técnica Full Stack Developer - Daniel Blázquez Escobar

## Exercice 1
Write a single SQL query which returns:<br>
a. The region Name.<br>
b. The average sales per employee for the region (Sales per region / Num of
employees)<br>
c. The difference between the average sales of the region and the highest average
sales, and the average sales per employee for the region.

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

## Exercice 2
Following the DB structure of the previous question. Initialize a spring boot project which allows
the user to:<br>
a. List employees.<br>
b. Get Sales for a certain employee.<br>
c. Add a new sale.<br>

This information should be exposed over a REST Controller and using H2 memory based DB
to consume it. You can use Spring Boot initializer for creating the main structure of the project.
Include all the comments you may consider explaining your decisions.

Employees List:
![image](https://github.com/ZenQ98/FSD_TEST/assets/143850708/11d13f0d-31c0-4201-a1ed-d1f696f7c8c4)

Get Sales of certain employer:
![image](https://github.com/ZenQ98/FSD_TEST/assets/143850708/5e9da667-81d3-48b6-b062-e700a389b302)

Add a new sale:
![image](https://github.com/ZenQ98/FSD_TEST/assets/143850708/2970c3cd-973c-4609-af8d-c6104245b019)
![image](https://github.com/ZenQ98/FSD_TEST/assets/143850708/c492153a-92dc-46bf-9e00-496122d6d715)
![image](https://github.com/ZenQ98/FSD_TEST/assets/143850708/74526eed-1432-49f0-b357-dd9fd60cc8b2)

## Exercice 3
Create a Web APP using Angular 16 that displays information about Ford models and their trims using
the free API of CarQuery.<br>
Requirements:<br>
- Use Angular 16 to develop the application.<br>
- Implement the following components:<br>
o A list of all the models of the Ford carmaker.<br>
o A list of all trims of the previously selected model.<br>
o A detail page of the selected trim.<br>
- Extra points for:<br>
o Implement a search by name of the model.<br>
o Make it responsive (Use your preferred UI component library to make it easier)<br>

Resources:<br>
• [CarQuery API documentation](https://www.carqueryapi.com/documentation/).<br>

Models:<br>
![image](https://github.com/ZenQ98/FSD_TEST/assets/143850708/18e7d066-7f9c-4a0e-8ea9-86e41194d833)

Trims:<br>
![image](https://github.com/ZenQ98/FSD_TEST/assets/143850708/a975cc66-7c3e-4e4e-8b56-d59e35e5edf7)

Detail<br>
![image](https://github.com/ZenQ98/FSD_TEST/assets/143850708/a561bfe6-b047-4350-b897-dfe645940b1d)

Search/Filter:<br>
![image](https://github.com/ZenQ98/FSD_TEST/assets/143850708/cfaa2c7c-a724-47e4-aace-59c747c00b2d)

Responsive:<br>
![image](https://github.com/ZenQ98/FSD_TEST/assets/143850708/5c6fdf4f-a89d-463d-9005-616b2091427f)


