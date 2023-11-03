# Group Members


- **Gustavo**:
  - [list of roles comes here once decided all the steps]

- **Maiko**:
  - [list of roles comes here once decided all the steps]

# The Project

## What is the project about? 

Blogging Platform where users will have different levels of access (admin, editor, or reader). They can log in, register, and write posts, comment, and like other user’s posts, search articles, filter articles by category.

## What is the goal of the project? 

Create a full stack application with user authentication, with multiple access levels and database functionalities.

## What is the Target Audience? 

Wine Lovers interested in learning and teaching more about the fascinating world of wines.

## References

- [Medium.com](https://medium.com)
- [Google Blog](https://blog.google/intl/en-ca/)

# Requirements

- Full-stack application with user authentication.
- Have a database.
- Frontend (Client) and Backend (Server).

# Data

## What is the data you can access or get?

- User input
- Seed in
- API

## What assets do you need and from where to get it?

- Images (e.g. Unsplash)
- Videos (e.g. Pexels)
- Audio (e.g. FreeSound)
- Game assets (e.g. OpenGameArt, itch.io)

# User stories / User scenarios

## User Stories

### As a Reader:

- I want to be able to create a user account, so I can access the platform's features and personalize my experience.
- I want to log in to my account easily and securely to access my saved articles and notifications.
- I want to search for articles by keywords, authors, or categories to find content that interests me.
- I want to be able to like articles to save them to my "Liked" collection for future reference.
- I want to comment on articles to share my thoughts and engage in discussions with other users.
- I want to receive in-platform notifications when my favorite writers post new articles, so I don't miss their updates.
- I want to follow my favorite writers to easily access their content and stay updated on their posts.
- I want to be able to send private messages to other users for more personal interactions and discussions.

### As a Writer:

- I want to register for the website and submit an application to become a writer, providing my credentials and writing samples.
- I want to create, edit, and delete my articles with a user-friendly interface and formatting options.
- I want to see statistics on which of my posts are the most liked and commented on to gauge user engagement.
- I want to follow other writers on the platform to connect with my peers and stay updated on their content.
- I want to like, comment on, and save articles to my personal collection for reference and inspiration.
- I want to manage my draft posts, allowing me to work on articles before publishing them.
- I want to receive notifications when readers like or comment on my articles to engage with my audience.
- I want to message other users for networking and collaboration opportunities.

### As an Admin:

- I want to access the admin dashboard to manage user accounts and content on the platform.
- I want to manage user accounts, including the ability to create, edit, or delete user profiles and adjust their access levels.
- I want to read, create, edit, and delete articles from any user to ensure the platform's content is high-quality and appropriate.
- I want to moderate comments from readers to maintain a positive and respectful community.
- I want to approve or reject new writer applications, reviewing their credentials and writing samples.
- I want to have the same functionalities as Readers and Writers to ensure platform consistency and provide support when needed.

## User Scenarios

### For login:

- As a user, I want an option to stay logged in, so that I don’t have to enter my credentials every time.
- As a user, I want to be able to reset my password if I forget it, so that I can regain access to my account.
- As a user, I want to see an error message if I enter incorrect login details, so that I know when my login attempt has failed.

### For registration:

- As a user, I want to log in via my social media accounts, so that I can quickly access the platform without creating a new account. (??)
- As a new user, I want to choose my own username and password during registration, so that I can personalize my login credentials.
- As a new user, I want to provide my basic information during registration, such as name and date of birth, so that I can personalize my profile.

# MVP (Minimum Viable Product)

## Key features:

- Admin dashboard view
- Writers view
- CRUD users
- User registration and login
- CRUD articles
- Like & Comment articles
- Save articles to a collection
- CRUD article collection
- User profile page
- In-platform notifications system
- Users follow writers
- Writers manage their articles and drafts
- Article creation page

## Tech choices

### Libraries

- Draft.js – For article content writing
- Fontawesome
- Front-end
  - Next.js Front-end Application
  - Sass – Styling
  - Animate.css – For simple UI animations
  - Tailwind.css – For admin and writer UI
- Back-end
  - Node.js – Backend Server
  - Express.js – Server API requests
  - Socket.io – For database connection
  - Prisma – For database schema
  - Oauth – User authentication
  - Twilio – To send email notification
- Database
  - MongoDB

## ERD (Entity-Relationship Diagram)

### Data Structure

**Users**

- id PK
- username
- name
- last_name
- email
- password
- avatar
- role (admin/writer/reader)
- email_verified
- followers (Array of userIDs that follow this user) e.g., [1, 50, 35] etc
- following (Array of userIDs that this user is following)

**Articles**

- id PK
- title
- content
- author (user_id) FK
- date_created
- date_updated
- status (draft/published/unpublished/deleted)
- cover_img
- likes (Array of userIDs that liked this article)

**Comments**

- id PK
- sender (user_id) FK
- date_created
- date_updated
- article_id FK
- message
- likes (Array of userIDs that liked this)
- dislikes (Array of userIDs that disliked this)

**Notifications**

- id PK
- message
- receiver (user_id) FK
- status (read/unread/dismissed)

**Messages**

- id PK
- sender (user_id) FK
- receiver (user_id) FK
- subject
- message
- status (read/unread/trashed)

**Collections (categories of articles)**

- id PK
- title
- articles_id (Array of articlesIDs that liked this article)
- owner FK

**Applications**

- id PK
- user_id FK
- message
- status (pending/approved/rejected)

### Relationships

**One-to-Many Relationships:**

- User-to-Notification: One User can receive Many Notifications.
- User-to-Comment: One User can make

 Many Comments.
- User-to-Collection: One User can have Many Collections.
- User-to-DraftPost: One User can manage Many Draft Posts.
- User-to-AdminDashboard: One User can access Many Admin Dashboards.
- Article-to-User: Many Articles can have One Author.
- Comment-to-Article: Many Comments are associated with One Article.
- Comment-to-User: Many Comments are made by One User.
- Notification-to-User: Many Notifications are related to One User.
- WriterApplication-to-User: Many Applications are submitted by One User.

**Many-to-Many Relationships:**

- User-to-User (Follow Relationship): Many Users can follow Many Users. Create a join table to represent this relationship.
- User-to-Article (Like Relationship): Many Users can like Many Articles. Create a join table to represent this relationship.
- User-to-Article (Save Relationship): Many Users can save Many Articles. Create a join table to represent this relationship.

**Draw the ERD**: [Link](https://dbdiagram.io/d/652f2aabffbf5169f0e63cae)

# Workflows

## Git

- Never code on master
- Never force push master
- Merge conflicts happen. There are ways of minimizing them, but you can never get rid of them completely.
- Use branches and pull requests
- Create a branch -> Work on the branch -> Make a commit -> Push to the remote branch -> Make a pull request -> Checkout to master/main -> Pull -> Checkout to the branch -> Merge master/main -> Fix conflicts -> Commit -> Push -> Merge pull request

## Project File Structure

```
SipSavvy/
  ├── client(or frontend)/     Frontend codes
  │   ├── public/              
  │   │   ├── ...
  │   │   ├── ...
  │   ├── src/  
  │   │   ├── pages/    
  │   │   │   ├── 404.tsx      404 page
  │   │   ├── app/    
  │   │   │   ├── about/       about Routes
  │   │   │   ├── page.tsx
  │   │   ├── login/           login Routes
  │   │   │   ├── page.tsx
  │   │   ├── register/        register Routes
  │   │   │   ├── page.tsx
  │   │   ├── contact/         contact Routes
  │   │   │   ├── page.tsx
  │   │   ├── page.tsx         Entry point
  │   │   ├── layout.tsx
  │   │   ├── globals.scss  
  │   │   ├── components/     
  │   │   │   ├── navbar/
  │   │   │   │   ├── AdminNavbar.tsx      
  │   │   │   │   ├── DefaultNavbar.tsx      
  │   │   │   │   ├── LinksBar.tsx      
  │   │   │   │   ├── UserNavbar.tsx      
  │   │   │   │   ├── WriterNavbar.tsx      
  │   │   │   ├── Navbar.tsx      
  │   │   │   ├── Footer.tsx    
  │   │   │   ├── Logo.tsx        
  │   ├── package.json
  │   ├── node_modules/
  ├── server(or backend)/      Backend code
  │   ├── controllers/         
  │   ├── models/              
  │   ├── routes/                            
  │   ├── server.js            
  │   ├── package.json
  │   ├── database/            Database scripts and configurations
  │   ├── package.json
  │   ├──node_modules/
  ├── node_modules/            
  ├── .gitignore              
  ├── README.md                Project documentation (Using our Google documentation)
  ├── package.json
              
```

# Project management

- Use a project management tool like GitHub Projects.
- Create a board for your project
- Add tasks/issues based on your user stories
- Allocate tasks to team members
- Set deadlines (it is ok to change them later)

# Calendar

- Week 1: Project Kickoff (Tuesday) and Project Planning (Wednesday - Friday)
- Week 2: Planning Presentation (Monday) and Project Development (Tuesday - Friday)
- Week 3: Project Development (Monday - Friday)
- Week 4: Project Development (Monday - Friday)
- Week 5: Project Development (Monday - Friday)
- Week 6: Project Development (Monday - Friday)
- Week 7: Project Development (Monday - Friday)
- Week 8: Project Testing (all scenarios) and Deployment (Monday - Friday)
- Week 9: Preparing Presentation (Monday - Thursday) and Demo Day (Friday)

# Demo Day

## SAVE THE DATE

- It is mandatory to attend in person. Except for students not living in Vancouver.

### Technical: Potential employers

### Dummy-friendly: Friends & Family & Intruders

### Presentation:

- What is the project about?
- What is the problem?
- What is the solution?
- For whom is it?
- What are the features?
- What are the technologies?

### Demonstration

- What was the biggest challenge you faced?
- What are the learnings?
- What are the next steps?
