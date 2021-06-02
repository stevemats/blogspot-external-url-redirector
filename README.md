## blogspot-external-url-redirector

* Custom Redirects in Blogger do not allow you to redirect to other domains, they only redirects to internal pages of your blog. To solve the issue, use the above script.

* Go to _Blogger >> Template >> Edit HTML_.
Now in the template codes, search for </head> tag and just above it paste the script in core-redirector file(The .js code)

* Remember to change below info to match yours:<br>
_var urls={<br>
‘insta’:’https://www.instagram.com/your-username’,{<br>
‘facebook’:’https://www.facebook.com/your-username’,{<br>
‘twitter’:”https://twitter.com/your-username”,{<br>
‘github’:”https://github.com/your-username”,{<br>
}_

* After customizing the script as per your needs, press the “Save Template” button on the top of your screen.