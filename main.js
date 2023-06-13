// ------------------------------------------Main Features------------------------------------------
// > Main menu
// > Debug Menu
// > Feed (involvesPlayer function)
// > Different gamemodes
// > Simultaneous Games: 
// > 4 courses > 1 tourney
// > 4 different rankings
// > Top scoring players in each section + top scoring players overall go on to final match

// -----------------------------------Potential future mechanics------------------------------------
// > High Score (Double Double Double Double Double Bogey)
// > Cringe
// > Birds
// > Cult of the Hole
// > Boogey Tournies // High scores win // Boons + Curses
// > (DBB) Double bogey -> Hole in ones
// > (DBC) For all players: Par -> double bogey
// > Shadow games
// > Giant turtle (the course is on a giant turtle)
// > Balls
// > Clubs (both the sticks and the bougie places)
// > Tourny of the Damned (Revive player?)
// > Sainthood
// > Strikes

// ----------------------------------------------Bugs-----------------------------------------------
// Fix rewinding
// Hole scale sometimes breaks? No clue why lmao
//
//==================================================================================================

reports = []

function main() {
    
}

function nextEvent() {
    Greedler.doTimeStep()
    reports = Onceler.mostRecentReports()
}

function logPastEvents() {
    console.log(Onceler.pastEvents)
}

function logFutureEvents() {
    console.log(Greedler.eventQueue)
}

function logWorldState() {
    console.log(Onceler.currentWorldState)
}

// saved for posterity
// GLOLF TO DO LIST
// No. of players - no set amount (start w 12)
// Players: name, gender (random adjectives), cringe (chance of total beefitude), dumbassery (choice of stroke type), yeetness (strength), trigonometry (accuracy),
//          bisexuality (curve skill), asexuality (hole-in-one chance), scrappiness (skill in rough areas), charisma (get it in the hole ;3), autism (magic)
// Strokes: drive (max length min accuracy), approach (medium to long range + more accuracy), chip (med-short range), putt (short range)
// Holes: par, roughness, heterosexuality (straightness), thicc (likelihood to go oob), verdancy (easiness to get on the green),
//          obedience (green tameness), quench (water hazards), thirst (sand bunkers)
// Tourney: 18 courses of stroke play, sudden death on tie