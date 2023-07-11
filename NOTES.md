# 071023

## New Priority List w/ waterfall effect
**ak from techteam**
1. Functioning FE with data from PodPage (or simplecastapi)
   1. podpage or simplecast
      1. Does podpage even issue an api?
         1. seems very one-stop closed loop to me
2. Mongo DB integration w BE locally
3. BE integration w FE locally
4. 



# 070823
Stopping for the night.

Just did:
  * Dockerfile for Mongo, BE, and FE
  * created docker network `atp-podcasts`
  * set up FE display of mongodb
  * seeded data to MongoDB with props of APTPodcast model

Ready to:
  * ~~seed some data to the backend~~
    * ~~call for BE data in FE or display nothing~~
    * ~~point both FE and BE to `http://mongodb://mongodb:27017/ || mongodb://mongodb:27017/`~~
  * ensure that the front end can connect to and display basic data from the backend
    * do this locally first
  * create container with docker network `atp-podcasts`
    * connect FE to podpage sites for Gravy and Armchair Explorer

