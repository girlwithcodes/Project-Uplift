# Project-Uplift
Save your affirmations, celebrate your wins, and count your blessings

## Overview
Project Uplift is a website where users can create boards and text posts of affirmations, celebrations, blessings, and uplifting quotes.  They can share their posts with other users or simply save them on their own boards.

## MVP
Users can create boards and view their own post-boards, create and share post-cards, browse shared posts, save shared posts to their own boards, and edit and delete posts on their own boards.


### Libraries and Dependencies
| **Library**       |  **Description**   |
| :------------------------ | :-- |
| React            | Front End/Render Components |
| React Router              | Link and Route for Components, useParams and useHistory   |
| Axios | API calls to back end   |
| JWT      | User Authentication/Web Tokens |
| bcrypt  | Password hashing and unhashing |

### Client

#### Wireframes
![Desktop Home](./images/p4-dk-hm.png "Desktop Home")
![Mobile Home](./images/p4-mb-hm.png "Mobile Home")
![Desktop Post List Pages](./images/p4-dk-postlist.png "Desktop Post List Pages")
![Mobile Post List Pages](./images/p4-mb-postlist.png "Mobile Post List Pages")
![Desktop Sign Up Page](./images/p4-dk-signup.png "Desktop Sign Up Page")
![Mobile Sign Up Page](./images/p4-mb-signup.png "Mobile Sign Up Page")
![Desktop Sign In Page](./images/p4-dk-signin.png "Desktop Sign In Page")
![Mobile Sign In Page](./images/p4-mb-signin.png "Mobile Sign In Page")
![Desktop User Home Page](./images/p4-dk-userhome.png "Desktop User Home Page")
![Mobile User Home Page](./images/p4-mb-userhome.png "Mobile User Home Page")
![Desktop User Board Page](./images/p4-dk-userboard.png "Desktop User Board Page")
![Mobile User Board Page](./images/p4-mb-userboard.png "Mobile User Board Page")
![Desktop Post Detail - Owner Page](./images/p4-dk-postdetail.png "desktop Post Detail - Owner Page")
![Mobile Post Detail - Owner Page](./images/p4-mb-postdetail.png "Mobile Post Detail - Owner Page")
![Desktop Post Detail - NonOwner Page](./images/p4-dk-postdetail2.png "Desktop Post Detail - NonOwner Page")
![Mobile Post Detail - NonOwner Page](./images/p4-mb-postdetail2.png "Mobile Post Detail - NonOwner Page")
![Desktop Post Edit/Create Page](./images/p4-dk-editcreate.png "Desktop Edit/Create Page")
![Mobile Post Edit/Create Page](./images/p4-mb-editcreate.png "Mobile Edit/Create Page")




#### Component Tree
![Component Hierarchy](./images/p4-component-tree.png "Component Hierarchy")


#### Component File Structure

```bash
src
├── assets
    ├── fonts
   
├── components 
    ├── Main
    ├── Header
    ├── Nav
    ├── PostDetail Card
├── services
    ├── apiConfig
    ├── users
    ├── boards
    ├── posts
├── layout
    ├── Layout
├── screens
    ├── Home
    ├── Affirmations
    ├── Celebrations
    ├── Blessings
    ├── Wisdom
    ├── User Home
    ├── User Board/s
    ├── PostDetail
    ├── PostCreate
    ├── PostEdit
    ├── SignIn
    ├── SignUp


```

#### Time Estimates
| **Task**       |  **Priority**   | **Estimated Time** | **Time Invested** | **Actual Time**|
| :------------------------ | :-- | :-- | :-- | :-- |
| Models | H | 1 hrs | | |
| Routes | H | 2 hr | | |
| Controllers/Backend CRUD | H | 3 hrs | | |
| Seed Data| M | 2 hrs | | |
| Testing and Debugging Backend | H | 3 hrs | | |
| Home Screen Logic | M | 1hr | | |
| Rendering Shared Posts Screens | H | 2 hrs | | |
| Rendering Post Detail Screen | M | 2hrs | | |
| Rendering User Home | H | 1hr | | |
| Rendering User Boards | H | 2hr | | |
| Edit Post Form & Logic | H | 2hr | | |
| Create Post Form & Logic | H | 2hr | | |
| Sign In & Sign Up Forms | H | 2hr | | |
| User Authentication | H | 3 hr| | |
| Front End CRUD services | H | 3hr | | |
| Testing and Debugging Front End CRUD| H | 2hr | | |
| Styling/CSS | H | 6hr | | |

### Server

#### ERD Model
![ERD Model](./images/p4-erd.png "ERD")

## Post-MVP
Allow users to make font and background choices for posts.  Allow users to make boards public/private, and allow other users to browse public boards.



