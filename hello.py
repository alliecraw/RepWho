from flask import Flask, Response, json
from crpapi import CRP, CRPApiError


CRP.apikey = '8dc515a7055eddeb2cc44ac63bba8f91'
app = Flask(__name__)



@app.route("/")
def hello():

	return "Hello World!"

@app.route("/politicians")
def politicians():

	objects = CRP.getLegislators.get(cid = 'CA')
	allPoliticians = []
	for j in objects:
		specificPolitician = []
		specificPolitician.append(j['@attributes']['firstlast'])
		specificPolitician.append(j['@attributes']['party'])
		specificPolitician.append(j['@attributes']['website'])
		allPoliticians.append(specificPolitician)

	return Response(json.dumps(allPoliticians), mimetype='application/json')

@app.route("/politicians/<id>")
def id(id):

	return id

if __name__ == "__main__":
	app.debug = True
	app.run()


