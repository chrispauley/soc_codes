# soc_codes [![Build Status](https://travis-ci.org/chrispauley/soc_codes.svg?branch=master)](https://travis-ci.org/chrispauley/soc_codes)

This micro library is a wrapper for the 2010 Standard Occupational Codes that are published by the U.S. Bureau of Labor and Statistics. Though derived from the official website, it is not sanctioned by them. You've been warned. If you have questions about the data, email the good people at soc@bls.gov


### Server Side
This package provides the data with wrappers provide a way to list, fetch and sort the data.

### Client Side
Add some browserify magic and your template of choice and build a SOC to your forms.

## About the data
This library includes:

Description | File
------------|------
SOC Codes | soc_codes.json
SOC Definitions | soc_definitions.json
SOC Major groups | soc_code_group_major.json
SOC 13 Intermediate Groups | soc_intermediate_groups.json
SOC 6 Intermediate Groups | soc_intermediate_groups_6.json


The following is copied from the [2010 SOC Coding Structure PDF](http://www.bls.gov/soc/soc_2010_class_and_coding_structure.pdf)
````
Standard Occupational Classification and Coding Structure
The occupations in the SOC are classified at four levels of aggregation to suit the needs of
various data users: major group, minor group, broad occupation, and detailed occupation. Each
lower level of detail identifies a more specific group of occupations. The 23 major groups, listed
below, are divided into 97 minor groups, 461 broad occupations, and 840 detailed occupations.

Major groups are broken into minor groups, which, in turn, are divided into broad occupations.
Broad occupations are then divided into one or more detailed occupations.

Some users may require aggregations other than the SOC system built on these major groups.
Further details on alternate occupational aggregations and approved modifications to the SOC
structure are provided at www.bls.gov/soc.


````
The first two digits represent the major group.
The third digit represents a minor group.
The fourth and fifth digits represent the broad occupation
The sixth digit represents the detailed occupation.

### Install
$ npm install soc_codes

### NodeJS
Install using npm then:
````
// ES5:
var socCodes = require('soc_code);

var item = socCodes.filter("11-1011") {
  return item.name;
}
````
