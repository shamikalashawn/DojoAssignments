'''
Build a simple program that makes use of the requests module.

In addition to including a lot of great features in the language itself, there are many modules available for install via pip that are a lot of fun to work with. We talked a little about pip before, so you should have the basic idea that pip exists so that developers can use code other people have written.

One of those code libraries is called requests. It allows you to make HTTP requests from a python file and get back a useful response. This library is a simple way to make requests to and get responses from a server without having to set one up yourself. This might remind you a little of using AJAX to interact with API's like you did in web fundamentals. Give it a try and get creative with the data you try to get back.

You'll have a much easier time if you install a virtual environment. Find the instructions to do so here.

You'll find the documentation for requests here. We highly recommend trying the code samples in the Quickstart Guide.
'''
import requests
from PIL import Image
from io import BytesIO

r = requests.get('https://api.github.com/events')
i = Image.open(BytesIO(r.content))
# r = requests.get('https://github.com/timeline.json')
# # try:
# #     print r.text
# # except UnicodeEncodeError:
# #     print r.text.encode('utf-8')
#
# # print r.headers
# r = requests.post('http://httpbin.org/post', data = {'key':'value'})
#
# payload = {'key1': 'value1', 'key2': 'value2'}
#
# r = requests.get('http://httpbin.org/get', params=payload)
#
# # print r.url
#
# payload = {'key1': 'value1', 'key2': ['value2', 'value3']}
#
# r = requests.get('http://httpbin.org/get', params=payload)
#
# # print r.url
# r = requests.get('https://api.github.com/events')
# r.encoding = 'utf-8'
# print r.content

# print r.json()
