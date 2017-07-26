# e2e Testing with Nightwatch and Docker

This repo is an example of how you can use Nightwatch and Docker to orchestrate easy-to-maintain, readable, repeatable end to end tests and run them against any environment. Outputs video and screenshot recordings of tests as well as a junit xml report for integration with CI.

Tests are in the ```nightwatch/specs``` folder. The ```example-website``` folder contains the site under test.

# Build
Run ```docker-compose build```. If you are behind a proxy, you need to set ```http_proxy```, ```https_proxy```, and ```no_proxy``` build arguments when building the 'nightwatch' image:

```docker-compose build --build-arg http_proxy=... --build-arg https_proxy=... nightwatch```

# Run
Run ```docker-compose up --force-recreate --abort-on-container-exit```.

# Check the results
The results of the tests will be under the ```target/nightwatch``` folder.
