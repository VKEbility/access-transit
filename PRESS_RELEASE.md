# AccessTransit

**Authored by Team VKEbility** 🚇:

- Eileen Rodriguez
- Kelly Xiong Chen
- Jahmari Maxwell

## 😞 The Problem

Accessibility in New York City's subway system is a critical issue that directly impacts the **independence, dignity, and safety** of countless riders, including people with disabilities, seniors, and parents with strollers. Current solutions to address the frequent breakdowns of MTA elevators and escalators **fail** to provide **accurate, real-time information**, creating **significant obstacles** that leave these riders vulnerable and frustrated. Not only this, riders with language barriers are often excluded from any critical announcements or alert posters, leading to further stress and confusion. When commuting in a city as bustling as New York, the last thing people want is to be confused, lost, or, at worst, **stranded**.

The lack of timely, accurate, and accessible information on essential transit feature status forces riders to confront uncertainty, leading to dangerous situations and a loss of confidence in their ability to use public transportation. Take wheelchair users like Mr. Remigio,[^1] arriving at a station ready to put their already cumbersome commute plan into action only to be met with **non-working elevators**, despite resources **declaring otherwise**. This persistent gap in accessibility undermines the fundamental right to mobility for those who need it most, stripping them of the ability to plan their journeys safely and effectively. Each encounter with unreliable information deepens frustration and distrust, making an already challenging commute even more difficult and disheartening.

**TL;DR**: NYC's subway system faces significant accessibility issues, with frequent elevator and escalator outages, limited ADA-compliant stations, and inadequate support for non-English speakers. These barriers, coupled with a lack of reliable status information, create a **frustrating**, **unsafe**, and often **impossible** environment for people with disabilities, older adults, parents with strollers, and non-English speakers.

## 📝 Summary

Over 30 years since the passage of the Americans with Disabilities Act, accessibility in the NYC transit system continues to pose significant challenges. In a world designed primarily for the able-bodied, individuals with disabilities encounter numerous hurdles that extend beyond their conditions.

But the reality is, as accessibility expert Cindy Li notes, ***"We're all just temporarily abled"***. In a society where one in four people live with a disability,[^2] it's important to recognize that everyone will experience some form of disability at some point in their lives. All it takes is a work accident, a trivial injury, or, if you're lucky, the natural aging process. Despite this, as of October 1st, 2024, **only 28% of NYC subway stations are ADA-compliant**,[^3] making it one of the **least accessible transit systems in the nation**,[^4] as exposed by the 2017 Disability Civil Rights class action lawsuit.

Statistics reveal the scale of the problem: 7.15% of the population, or **547,593 people**, identify as mobility disabled;[^5] 2.3%, or **185,378 people**, as deaf or hearing disabled;[^5] and nearly 20% of the city's entire population—**1.44 million people**—is aging at 65 years and older with this figure expected to jump to **40%** by 2040![^6] Not to mention the 25%—approximately **1.8 million people**—who are not proficient in English.[^7]

To paint a picture, the neighborhoods with the ***highest* concentration of disabled residents** also happen to be those with the ***least* accessible stations**.[^8] With a map finding accessible subway stations most available "where poverty rates are the lowest," not surprisingly, those neighborhoods are also where poverty levels exceed **40%**.[^8] With the adverse effects of this inequality compounding with every added social identity, this persistent gap in accessibility underscores the urgent need for a solution that serves all riders. As a lack of accessible transportation remains a key barrier to employment for persons with disabilities,[^5] **hundreds of thousands of New Yorkers** are effectively **excluded** from using public transit, perpetuating a cycle of **social and economic disadvantage**.

The situation is further exacerbated by frequent breakdowns of MTA accessibility features, with about **34 elevators** and **33 escalators** out of service **daily**[^9] and a **single elevator** experiencing an average of **53** breakdowns **yearly**.[^10] On one of those cold days in 2019, a 22-year-old mother, Malaysia Goodson, tragically **lost her life** after falling down the stairs while struggling to carry her baby stroller at the 7<sup>th</sup> Ave subway station.[^11] All because there was no accessible option available and no easy way to find an alternative. This heartbreaking incident underscores a stark reality: **lack of accessibility is not just inconvenient, it's fatal**.

## 🤔 Our Hypothesis

If individuals with mobility difficulties and language barriers had access to reliable, real-time accessibility data and translation features, they would feel more empowered to commute via NYC's transit system, safely and effectively.

## 📱 Product Overview

Our app, AccessTransit, is designed to address these critical gaps in current transit accessibility features by leveraging **crowd-sourced data** to provide **reliable, real-time updates** on station accessibility. This allows users to plan their journeys safely and assuredly. Additionally, we offer multilingual sign translations to create a more inclusive commuting experience for *all* New Yorkers.

Until the MTA retrofits its elevators with automatic status reporting methods such as sensors,[^10] AccessTransit will step in, allowing users to contribute to reporting the operational status of MTA's elevators and escalators. The app will be user-friendly and employ an intuitive design featuring automatic translation capabilities.

Users will include "riders" and "heroes"- riders can save frequently visited stations, and plan trips based on stations with functional accessibility options. Riders can also achieve "hero" status by reporting the status of accessibility features.

## 🏙️ Mission Statement

AccessTransit exists to enhance the safety, confidence, and independence of mobility-challenged individuals and non-English speakers in using public transportation. By using real-time, crowd-sourced updates and providing accessible information in multiple languages, AccessTransit addresses an accessibility gap to make commuting easier and more accessible for all users.

## 🫂 Who do we serve?

We intend to serve individuals who are disabled, mobility-challenged, and non-English speakers. Mobility-challenged users will benefit from seeing if a station's elevators/escalators are operational and plan their commute effectively. Non-English speakers will benefit from the app being translated into their desired language, allowing them to navigate the transit system seamlessly.

## 🧳 User Journey Map

**AccessTransit User Journey:**

- User plans a trip to a doctor's appointment using the Official MTA site to check accessibility statuses.
- User arrives at station, dejected to find an out-of-service elevator, contrary to the websites information.
- Feeling stressed, user searches for alternative solutions online.
- User discovered AccessTransit as the top search result by SEO and fees hopeful
- User access the app and is delighted to see accurate operational status for their station and more.
- User seamlessly plans their trip, reassured and calmed by the intuitive interface.

## 👥 User-stories

- User can open the app and see their nearest accessible station.
- User can check the real-time status of accessibility features (elevators/escalators).
- User can update the status of features upon arrival if they encounter issues.
- User can save favorite stations by creating an account.
- User can plan future trips based on saved stations with reliable accessibility.

## 🧗‍♂️ Key Technical Challenge

During the project build, we anticipate several challenges, including effectively managing scope creep and ensuring that we adhere to our 2-3 week build deadline while accurately defining and prioritizing features. Additionally, we will face the technical challenges of implementing certain technologies for the first time. The key features we aim to implement include:

- Language selection on app initialization.
- Accessibility filtering for stations based on features.
- Status updates reporting interface.
- Favorites functionality to save commonly used stations or accessibility features.
- Hero status for volunteer contributions.

## 🏋🏽 Extension Opportunities

To build upon our scoped idea, we envision all these possible features that cater to various user needs:

### Prioritized Accessibility

- **Mobility First, Language Next, Hearing Last**: We are committed to ensuring that all users have access to an aesthetic, easy-to-use, and intuitive UI, removing barriers related to age or technical competence.

### User Customization

- **Language Selection**: Users can choose their preferred language during the app's initialization.
- **Text Size Options**: Users will have the ability to customize text size for enhanced readability.

### Basic Features

- **Operational Status of Stops**: Information on which stops have operational elevators and escalators.
- **Quick Reporting**: Easy one-click reporting of accessibility status.
- **Wheelchair Accessibility Info**: Information on wheelchair-accessible stops and bus capacity.
- **MTA Alerts**: Notifications of any active MTA signs and alerts.

### For Mobility-Affected Users

- **Accessibility Information**: Users can check the accessibility of their home and work stations before and during travel.
- **Real-Time Notifications**: Implement notifications for users during travel hours about changes in operational status.
- **Service Disruption Alerts**: Notifications regarding elevator outages or service disruptions while on the train.
- **Stair Count**: Information on the number of stairs at each station.
- **Exact Location of Accessibility Features**: Detailed information on where elevators and escalators are located within stations.
- **Mapped Views**: A visual representation mapping from the end of the train to the conductor's cart, showing corresponding accessibility points.
- **Escalator Direction**: Information on whether escalators are going up or down.

### For Language-Affected Users

- **Translation Features**: The app will support translations into various languages.
- **Camera Translation**: A camera feature for real-time translation of MTA signs.

### For Hearing-Impaired Users

- **Live Transcription**: Provide real-time transcriptions of subway announcements.

### For Community Heroes

- **Impact Awareness**: Users can see how their contributions have directly helped others.
- **Social Engagement**: Users will receive notifications when their contribution count increases, with an end-of-day summary of those they helped.
- **Social Media Promotion**: Encouragement to share contributions on social media using the hashtag `#AccessTransit`, `#AccessTransitApp`, recognizing heroes and spreading awareness of the initiative.
- **Instagram Integration**: A template for easy posting to Instagram and the ability to fetch public photos tagged with `#AccessTransitApp` for display in the app.
- **Recognition Badges**: Aesthetic badges for contributions, with varying levels based on all-time and monthly user contributions.

These future features aim to create a more inclusive and supportive environment for all users, ensuring everyone can navigate public transit with as much confidence and ease as possible.

## Contact

We sincerely appreciate your interest in AccessTransit. For a comprehensive overview of our project, please refer to our [project proposal](https://docs.google.com/document/d/e/2PACX-1vTtKkO-jJTAnwDsEWdgAwoANtadDctt9TSmKTYXEOc3FfOL5CYaxgCOakLExO1xgP7OfSw5SdvxFEIL/pub) and [product specification](https://docs.google.com/document/d/e/2PACX-1vTVktXWTfonkMrDNs0RZ-p8WDVq-HeregZaOeq-kfQjxno33cEiwK5COL5ykhuLpQ-61KNoNOTQgDro/pub) document, which provides detailed insights into our objectives, features, and implementation strategies.

We look forward to any feedback and support as we strive to enhance accessibility in public transportation!

## 📒 Sources

[^1]: A. Elkeurti and A. Ley, "Elevators at Most Subway Stations? 'I'll Believe It When I See It'," *The New York Times*, Aug. 31, 2023. [Online]. [Available](https://www.nytimes.com/2023/08/31/nyregion/nyc-subway-accessible-disabled.html).

[^2]: Centers for Disease Control and Prevention, "Disability Impacts All of Us," CDC, [Online]. [Available](https://www.cdc.gov/ncbddd/disabilityandhealth/infographic-disability-impacts-all.html). [Accessed: Oct. 1, 2024].

[^3]: Zoning for Accessibility, Metropolitan Transportation Authority. [Online]. [Available](https://new.mta.info/accessibility/zoning-for-accessibility). [Accessed: Oct. 2, 2024].

[^4]: Disability Rights Advocates, "Center for Independence of the Disabled New York (CIDNY) v. MTA-NY State Complaint," Supreme Court, Apr. 2017. pp. 2. [Online]. [Available](https://dralegal.org/wp-content/uploads/2017/04/CIDNY-v.-MTA-NY-State-Complaint.pdf). [Accessed: Oct. 1, 2024].

[^5]: S. M. Dooha, "ADA at 25: Many Bridges to Cross," Center for Independence of the Disabled, pp. 12-56. [Online]. [Available](https://www.cidny.org/wp-content/uploads/2017/07/CIDNY-ADA25-Many-_Bridges_to-Cross.pdf).

[^6]: New York City Department of Health and Mental Hygiene, "Health of Older Adults in New York City," Epi Data Brief, no. 112, pp. 3, May 2019. [Online]. [Available](https://www.nyc.gov/assets/doh/downloads/pdf/episrv/2019-older-adult-health.pdf). [Accessed: Oct. 2, 2024].

[^7]: "Increasing Content Accessibility for Multilingual Communities," The Opportunity Project, 2021 Problem Statement. pp. 1. [Online]. [Available](https://opportunity.census.gov/assets/files/2021-problem-statements/post-covid/NYC_%20Increasing%20Content%20Accessibility%20for%20Multilingual%20Communities.pdf).

[^8]: CIDNY, "Subway Accessibility Maps," CIDNY, [Online]. [Available](https://www.cidny.org/subway-accessibility-maps/). [Accessed: Oct. 1, 2024].

[^9]: K. Powers and P. A. Sanchez, "Policy Spotlight - Out of Order: Focusing on MTA Elevators and Escalators," New York City Council, Feb. 2023, pp. 4. [Online]. [Available](https://council.nyc.gov/keith-powers/wp-content/uploads/sites/64/2023/02/Policy-Spotlight-MTA-Equipment.pdf).

[^10]: "Bringing Innovation to Paratransit," NYU Wagner Rudin Center for Transportation Policy & Management, Dec. 2017, pp. 3-24. [Online]. [Available](https://wagner.nyu.edu/files/faculty/publications/Bringing%20Innovation%20to%20Paratransit.pdf).

[^11]: M. Gold and E. G. Fitzsimmons, "A Mother's Fatal Fall on Subway Stairs Rouses New Yorkers to Demand Accessibility," *The New York Times*, Jan. 29, 2019. [Online]. [Available](https://www.nytimes.com/2019/01/29/nyregion/mom-subway-stairs-death-malaysia-goodson.html?login=email&auth=login-email).