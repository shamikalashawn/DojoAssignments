from django.shortcuts import render, redirect, HTTPRequest
from .models import League, Team, Player
from . import team_maker

def index(request):
	context = { #Queries to the db to be accessed on the index.html page
		#All Leagues
		"leagues": League.objects.all(),
		#All Teams
		"teams": Team.objects.all(),
		#All Players
		"players": Player.objects.all(),
		#Query 1: all baseball leagues
		# "leagues": League.objects.filter(sport='Baseball'),
		#Query 2: all women's leagues
		# "leagues": League.objects.filter(name__contains='Wom'),
		#Query 3: all leagues where sport is any type of Hockey
		# "leagues": League.objects.filter(sport__contains='Hockey'),
		#Query 4: all leagues where sport is something OTHER THAN Football
		# "leagues": League.objects.exclude(sport='Football'),
		#Query 5: all leagues that call themselves 'conferences'
		# "leagues": League.objects.filter(name__contains='Conference'),
		#Query 6: all leagues in the Atlantic region
		# "leagues": League.objects.filter(name__contains='Atlantic'),
		#Query 7: all teams based in Dallas
		# "teams": Team.objects.filter(location='Dallas'),
		#Query 8: all teams named Raptors
		# "teams": Team.objects.filter(team_name__contains="Raptors"),
		#Query 9: all teams whose location includes "City"
		# "teams": Team.objects.filter(location__contains="City"),
		#Query 10: all teams whose names begin with "T"
		# "teams": Team.objects.filter(team_name__startswith="T"),
		#Query 11: all teams, ordered alphabetically by location
		# "teams": Team.objects.all().order_by('location'),
		#Query 12: all teams, ordered by team name in reverse alphabetical order
		# "teams": Team.objects.all().order_by('-team_name'),
		#Query 13: every player with last name "Cooper"
		# "players": Player.objects.filter(last_name="Cooper"),
		#Query 14: every player with first name "Joshua"
		# "players": Player.objects.filter(first_name="Joshua"),
		# Query 15: every player with last name "Cooper" EXCEPT FOR Joshua
		# "players": Player.objects.filter(last_name="Cooper").exclude(first_name="Joshua"),
		#Query 16: all players with first name "Alexander" OR first name "Wyatt"
		# "players": Player.objects.filter(first_name="Alexander")|Player.objects.filter(first_name="Wyatt")
	}
	return render(request, "leagues/index.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")
