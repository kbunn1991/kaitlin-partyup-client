## Party Up!


**MacDown** is a user-friendly group-finding app for multiplayer online games played on the PS4 network. Through this app, users can build a profile with what games they're playing and any specific tags they'd like to apply to themselves (i.e. competitive play, casual, lgbt+, etc) and search other users and groups in order to find friendly, fun teams to group up with.

**Please Note**: This application is built to be a mobile app and therefore looks best in a mobile viewport (320 - 360). 


## Live Version via Heroku

A link to the live version of the app can be found [here](https://partyup-client.herokuapp.com/). Feel free to log in, have a look around, and test out all of the exciting features!

## Features

Users can create a new account, search for and endorse other users for being good teammates, search for groups via the game title, group name, or tags, create their own groups, delete their groups or leave joined groups, and view the group profile page.

## Show and Tell

```
Login Page 
```
![Login Screenshot](https://cdnw.nickpic.host/xbzdT6.png)

```
Landing page 
```
![Landing Page Screenshot](https://cdnw.nickpic.host/xb7HNz.png)

```
Player Search
```
![Player Search Screenshot](https://cdnw.nickpic.host/xbzTIX.png)

```
Navigation
```
![Navigation Screenshot](https://cdnw.nickpic.host/xbzJ6F.png)

```
User Profile
```
![User Profile Screenshot](https://cdnw.nickpic.host/xbz2n5.png)

```
Edit Profile
```
![Edit Profile Screenshot](https://cdnw.nickpic.host/xb72Zj.png)

```
My Groups Page
```
![My Groups Screenshot](https://cdnw.nickpic.host/xbzD2Q.png)

```
Group Profile Page
```
![Group Profile Screenshot](https://cdnw.nickpic.host/xbzMPn.png)

## Summary and Tech Info: 

**Target Audience:** The target audience for 'Party Up!' are the vast, diverse community of PS4 gamers - especially those interested in online multiplayer games that would like to find a good group.
**MVP Features:** CRUD actions - create a user, edit (PUT) a user, create (POST) a new group, search (GET) for users or groups, endorse (PUT) other players, which ups their endorsement level by 1, and delete a created group. 

##Tech Stack

'Party Up!' was created with MongoDB as the database, Express and Node on the backend with JWT/bcrypt for authentication, and React/Redux on the frontend. 

##Future Plans

I plan on connecting this app to the Discord API so that users can contact one another via Discord. Additionally, I plan to use that same API to create a chatroom for each group; if not through a Discord chat room, then through a chatroom specifically made for this app using mainly React and Socket.io.
