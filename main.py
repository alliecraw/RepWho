import os
import time
import webapp2
import json

from google.appengine.api import users
from google.appengine.ext import db
from google.appengine.ext.webapp import template
from array import array #allow us to use arrays



def render_template(handler, templatename, templatevalues):
  path = os.path.join(os.path.dirname(__file__), 'templates/' + templatename)
  html = template.render(path, templatevalues)
  handler.response.out.write(html)



class MainPage(webapp2.RequestHandler):
  def get(self):
    render_template(self, 'index.html',{})
   

app = webapp2.WSGIApplication([
  ('/', MainPage)
], debug=True)


