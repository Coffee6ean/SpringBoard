# Redirecting -
# What is an HTTP redirect?
# - An HTTP response
# - The status code is a “redirect code” (often, 302)
# - It contains a URL for browser to re-request
# - Typically, for ancient browsers, contains HTML with a link

"""
$ curl -v http://localhost:5000/redirect-me

< HTTP/1.0 302 FOUND
< Content-Type: text/html; charset=utf-8
< Location: http://localhost:5002/somewhere-else

<h1>Redirecting...</h1>
<p>You should be redirected automatically to target URL:
 <a href="/somewhere-else">/somewhere-else</a>.
 If not click the link.</p>
"""

# Your browser won’t typically show you this page — it makes the re-request
# so fast you don’t even notice it happened!