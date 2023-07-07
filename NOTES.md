# 070723
Stopping for the night.

Just did:
  * Dockerfile for Mongo, BE, and FE
  * created docker network `atp-podcasts`

Ready to:
  * create container with docker network `atp-podcasts`
  * ensure that the front end can connect to and display basic data from the backend
    * just pointed both FE and BE to `mongodb://mongodb:27017/`
    * seed some data to the backend
    * connect FE to podpage sites for Gravy and Armchair Explorer