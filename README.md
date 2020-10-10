# Team 19 - Seven Pointers
Team 19's Mobile App for New Hope Community Services under JPMorgan Code for Good 2020.

# Introduction
There are roughly three main explanations for homelessness in Singapore, mainly:
<ol>
  <li>Economic structural conditions (poverty, unemployment).</li> 
  <li>Systemic barriers (inadequate housing, shelters, and other services).</li> 
  <li>Individual circumstances (traumatic life events, physical and mental health issues, addictions, loss of family relationships, family violence).</li> 
</ol>
New Hope Community Services helps the homeless, restoring hope to displaced individuals and families along the way.

# Objectives
To develop a mobile application that includes a secure login system, mobile matching system where social workers have access to listings of potential flatmastes based on profiles provided for each individual. Social workers will also be able to monitor the status of their applications.

# Implementaion
We used React Native to build the mobile app and React to build the web console and Springboot for the backend architecture hosted in AWS EC2.

# Functionalities
<ol>
  <li>Client Page (to view client profile, add client profile).</li> 
  <li>Application Status Page (monitor status of applications, edit existing ones, and track their progress. A timeline to show this, next steps pending, hyperlinks back into the user page back for more info).</li> 
  <li>Web console for NHCS Admins to monitor the process of rehabilitation. Shows the admin of New Hope Community Services data of all the clients and their respective status.</li>
  <li>A very simple login authorization scheme.</li>
</ol>

# Next Steps
<ol>
  <li>Filter people for better matches.</li> 
  <li>Predictive Client matching - recommendation system based on matching preferences e.g. gender, smoking habits, drinking habits, race, city, language - then quantise it into a number ~70% match.</li> 
  <li>Release a clean, stripped down version of the app for counselors, job coaches, HDB officers and other supporting people to mark tasks as complete and provide notes about a client session. Supporting people do not have access to any confidentional client data.</li>
  <li>Calendar to see upcoming events, schedule appointments, deadlines, sessions, pending tasks.</li>
  <li>Group Implementation - group families together and click group to obtain individual members relations. As a way to give a symbolic relation between family members.</li>
</ol>

# Privacy Considerations
<ol>
  <li>Following the Singapore policies for personal data collection and storage(PDPA, etc.)</li>
  <li>Encrypt database.</li>
  <li>Have a data retention policy. E.g. Destory all data relating to the client within 3 months of him moving into a house.</li>
<ol>