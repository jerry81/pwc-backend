# pwc-backend

techs used

koa

sequelize

mongodb (setup manually on cloud)
todo: replace with docker

# apis

GET /tickets?sortBy={REQUESTOR|TAG|DUEDATE|LASTMOD}&sortDir={ASC|DESC}&requestor={partialmatch}&tag={partial}&...   - gets items with filter and sort (all query params optional) - default entire list sortby modified date desc

GET /tickets/{id} - get single ticket details

POST /ticket - create new ticket 

PATCH /ticket/{id}?status={DRAFT|SUBMITTED|ASSIGNED|PENDING|COMPLETED} - update status of ticket

