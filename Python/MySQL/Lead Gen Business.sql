SELECT * FROM lead_gen_business.billing;

-- 1. What query would you run to get the total revenue for March of 2012?
SELECT SUM(billing.amount) AS 'revenue', MONTHNAME(charged_datetime) AS 'month', EXTRACT(YEAR FROM billing.charged_datetime) AS 'year'
FROM billing
JOIN clients ON billing.client_id = clients.client_id
WHERE  EXTRACT(MONTH FROM billing.charged_datetime) = 3 and EXTRACT(YEAR FROM billing.charged_datetime) = 2012
GROUP BY 'month';

-- 2. What query would you run to get total revenue collected from the client with an id of 2?
SELECT billing.client_id, SUM(billing.amount) AS 'total_revenue'
FROM billing
WHERE billing.client_id = 2;

-- 3. What query would you run to get all the sites that client=10 owns?
SELECT sites.client_id, sites.domain_name AS 'website'
FROM sites
WHERE sites.client_id = 10;

-- 4. What query would you run to get total # of sites created per month per year for the client with an id of 1? What about for client=20?
SELECT client_id, COUNT(domain_name) AS 'number_of_websites', MONTHNAME(created_datetime) AS 'month_created', EXTRACT(YEAR FROM created_datetime) AS 'year_created'
FROM sites
WHERE sites.client_id = 1
GROUP BY domain_name;

SELECT client_id, COUNT(domain_name) AS 'number_of_websites', MONTHNAME(created_datetime) AS 'month_created', EXTRACT(YEAR FROM created_datetime) AS 'year_created'
FROM sites
WHERE sites.client_id = 20
GROUP BY domain_name;

-- 5. What query would you run to get the total # of leads generated for each of the sites between January 1, 2011 to February 15, 2011?
SELECT sites.site_id, sites.domain_name AS 'website', COUNT(leads.leads_id) AS '#_of_leads', DATE_FORMAT(leads.registered_datetime, '%M %d, %Y') AS 'date_generated'
FROM sites
JOIN leads ON sites.site_id = leads.site_id
WHERE EXTRACT(YEAR FROM leads.registered_datetime) = 2011 AND (MONTH(leads.registered_datetime) = 1 OR (MONTH(leads.registered_datetime) = 2 AND DAY(leads.registered_datetime) BETWEEN 1 AND 16))
GROUP BY sites.site_id;

-- 6. What query would you run to get a list of client names and the total # of leads we've generated for each of our clients between January 1, 2011 to December 31, 2011?
SELECT clients.client_id, CONCAT(clients.first_name, ' ', clients.last_name) AS 'client_name', COUNT(leads.leads_id) AS '#_of_leads', DATE_FORMAT(leads.registered_datetime, '%M %d, %Y') AS 'date_generated'
FROM clients
JOIN sites ON clients.client_id = sites.client_id
JOIN leads ON sites.site_id = leads.site_id
WHERE EXTRACT(YEAR FROM leads.registered_datetime) = 2011
GROUP BY clients.client_id;

-- 7. What query would you run to get a list of client names and the total # of leads we've generated for each client each month between months 1 - 6 of Year 2011?
SELECT CONCAT(clients.first_name, ' ', clients.last_name) AS 'client_name', COUNT(leads.leads_id) AS '#_of_leads', DATE_FORMAT(leads.registered_datetime, '%M') AS 'month_generated'
FROM clients
JOIN sites ON clients.client_id = sites.client_id
JOIN leads ON sites.site_id = leads.site_id
WHERE EXTRACT(YEAR FROM leads.registered_datetime) = 2011 AND (MONTH(leads.registered_datetime)  BETWEEN 1 AND 6)
GROUP BY leads.leads_id;

-- 8. What query would you run to get a list of client names and the total # of leads we've generated for each of our clients' sites between January 1, 2011 to December 31, 2011? Order this query by client id.  
SELECT CONCAT(clients.first_name, ' ', clients.last_name) AS 'client_name', sites.domain_name AS 'website', COUNT(leads.leads_id) AS '#_of_leads', DATE_FORMAT(leads.registered_datetime, '%M %d, %Y') AS 'date_generated'
FROM clients
JOIN sites ON clients.client_id = sites.client_id
JOIN leads ON sites.site_id = leads.site_id
WHERE EXTRACT(YEAR FROM leads.registered_datetime) = 2011
GROUP BY sites.domain_name
ORDER BY clients.client_id;

-- Come up with a second query that shows all the clients, the site name(s), and the total number of leads generated from each site for all time.
SELECT CONCAT(clients.first_name, ' ', clients.last_name) AS 'client_name', sites.domain_name AS 'website', COUNT(leads.leads_id) AS '#_of_leads'
FROM clients
JOIN sites ON clients.client_id = sites.client_id
JOIN leads ON sites.site_id = leads.site_id
GROUP BY sites.domain_name
ORDER BY clients.client_id;

-- 9. Write a single query that retrieves total revenue collected from each client for each month of the year. Order it by client id.
SELECT CONCAT(clients.first_name, ' ', clients.last_name) AS 'client_name', SUM(billing.amount) AS 'total_revenue', MONTHNAME(billing.charged_datetime) AS 'month_charge', YEAR(billing.charged_datetime) AS 'year_charged'
FROM clients
JOIN billing ON clients.client_id = billing.client_id
GROUP BY client_name, MONTH(billing.charged_datetime), YEAR(billing.charged_datetime)
ORDER BY clients.client_id;

-- 10. Write a single query that retrieves all the sites that each client owns. Group the results so that each row shows a new client. It will become clearer when you add a new field called 'sites' that has all the sites that the client owns. (HINT: use GROUP_CONCAT)
SELECT CONCAT(clients.first_name, ' ', clients.last_name) AS 'client_name', GROUP_CONCAT(sites.domain_name, ' / ') AS 'sites'
FROM clients
JOIN sites ON clients.client_id = sites.client_id
GROUP BY clients.client_id;




