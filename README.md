# pwc-backend

techs used

express

sequelize

mongodb (setup manually on cloud)
todo: replace with docker

# apis

GET /tickets?sortBy={REQUESTOR|TAG|DUEDATE|LASTMOD}&sortDir={ASC|DESC}&requestor={partialmatch}&tag={partial}&...   - gets items with filter and sort (all query params optional) - default entire list sortby modified date desc
note: server side filter and sort cancelled - doing it on frontend since dataset small

GET /tickets - get all tickets 

GET /tickets/{id} - get single ticket details - also not necessary for now - and can be done frontend in memory

POST /ticket - create new ticket 

PATCH /ticket/{id}?status={DRAFT|SUBMITTED|ASSIGNED|PENDING|COMPLETED} - update status of ticket

