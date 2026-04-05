# Web Development Project 6 - Country Dashboard 🌍

Submitted by: **Abel Tapia**

This web app: **A React dashboard that fetches country data from a public API and allows users to explore information using a search bar and filters. Users can view summary statistics and dynamically filter results by country name, capital, and region.**

Time spent: **10 hours** spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard displays over 200 countries
  - Each row includes multiple features such as flag, name, capital, region, and population
- [x] **useEffect React hook and async/await are used**
- [x] **The app dashboard includes at least three summary statistics about the data** 
  - Total number of countries
  - Total number of regions
  - Number of countries with population over 100 million
- [x] **A search bar allows the user to search for an item in the fetched data**
  - The search bar correctly filters items by country name and capital
  - The list dynamically updates as the user types
- [x] **An additional filter allows the user to restrict displayed items by specified categories**
  - The filter uses a different attribute (region)
  - The filter correctly updates the displayed list
  - The dashboard updates dynamically as the filter changes

## Optional Features

The following **optional** features are implemented:

- [x] Multiple filters can be applied simultaneously
- [x] Filters use different input types
  - Text input (search bar) and dropdown filter
- [ ] The user can enter specific bounds for filter values

## Additional Features

The following **additional** features are implemented:

* [x] Styled dashboard layout with responsive design
* [x] Hover effects on cards
* [x] Displays country flags for visual representation

## Video Walkthrough

Here's a walkthrough of implemented user stories:
<img src="country-api-part2.gif" title="Video Walkthrough" width="600" alt="Video Walkthrough" />
GIF created with ScreenToGif  

## Notes

One challenge encountered was ensuring that multiple filters (search and region) worked together correctly without breaking the filtering logic. Another challenge was handling missing data from the API, such as countries without a capital.

## License

    Copyright 2026 Abel Tapia

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.