from django.db.models import Count
from django.shortcuts import render, redirect
from .models import League, Team, Player
from . import team_maker

def index(request):
	context = { #Queries to the db to be accessed on the index.html page
		#All Leagues
		# "leagues": League.objects.all(),
		#All Teams
		# "teams": Team.objects.all(),
		#All Players
		# "players": Player.objects.all(),
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
		# "players": Player.objects.filter(first_name="Alexander")|Player.objects.filter(first_name="Wyatt"),
		#Sports ORM II
		#Query 1: all teams in the Atlantic Soccer Conference
		# "teams": Team.objects.filter(league=League.objects.filter(name="Atlantic Soccer Conference")),
		#Query 2: all (current) players on the Boston Penguins
		# "players": Player.objects.filter(curr_team=Team.objects.get(team_name="Penguins")),
		#Query 3: all (current) players in the International Collegiate Baseball Conference
		# "players": Player.objects.filter(curr_team__league__name="International Collegiate Baseball Conference"),
		#Query 4: all (current) players in the American Conference of Amateur Football with last name "Lopez"
		# "players": Player.objects.filter(last_name="Lopez", curr_team__league__name="American Conference of Amateur Football"),
		#Query 5: all football players
		# "players": Player.objects.filter(curr_team__league__sport='Football'),
		#Query 6: all teams with a (current) player named "Sophia"
		# "teams": Team.objects.filter(curr_players__first_name="Sophia"),
		#Query 7: all leagues with a (current) player named "Sophia"
		# "leagues": League.objects.filter(teams__curr_players__first_name="Sophia"),
		#Query 8: everyone with the last name "Flores" who DOESN'T (currently) play for the Washington Roughriders
		# "players": Player.objects.filter(last_name="Flores").exclude(curr_team__team_name="Roughriders"),
		#Query 9: all teams, past and present, that Samuel Evans has played with
		# "teams": Team.objects.filter(all_players__first_name="Samuel", all_players__last_name="Evans"),
		#Query 10: all players, past and present, with the Manitoba Tiger-Cats
		# "players": Player.objects.filter(all_teams__team_name="Tiger-Cats"),
		#Query 11: all players who were formerly (but aren't currently) with the Wichita Vikings
		# "players": Player.objects.filter(all_teams__team_name="Vikings").exclude(curr_team__team_name="Vikings"),
		#Query 12: every team that Jacob Gray played for before he joined the Oregon Colts
		# "teams": Team.objects.filter(all_players__first_name="Jacob", all_players__last_name="Gray").exclude(curr_players__first_name="Jacob", curr_players__last_name="Gray"),
		#Query 13: everyone named "Joshua" who has ever played in the Atlantic Federation of Amateur Baseball Players
		# "players": Player.objects.filter(first_name="Joshua", all_teams__league__name="Atlantic Federation of Amateur Baseball Players"),
		#Query 14: all teams that have had 12 or more players, past and present. (HINT: Look up the Django annotate function.)
		# "teams": Team.objects.annotate(num_players=Count("all_players")).filter(num_players__gte=12),
		#Query 15: all players, sorted by the number of teams they've played for
		"players": Player.objects.annotate(num_teams=Count("all_teams")).order_by("num_teams"),
	}
	return render(request, "leagues/index.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")
