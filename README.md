/***********************************************

CS572 - MODERN WEB APPLICATION PROGRAMMING

Lecture 6 / Exercise

************************************************/
1. Create an Express application that accepts users subcsriptions for a newsletter app: Upon calling (/newsletter), a form will be displayed asking the user to enter their email address.
2. Upon submitting the form (POST) to (/newsletter), append the data to a file called (subcribers.txt), then redirect the user to a (/thankyou) page that's going to display:
Your email {{EMAIL}} has been added successfully to our subcribers list.
3. Make sure you validate that email is valid and not empty.
4. Make sure you protect your application against Cross-Site Request Forgery attack.
