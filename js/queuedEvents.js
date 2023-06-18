class EventCreatePlayers extends Event {
    type = "createPlayers"
    depth = "League"

    calculateEdit(worldState, tl, options) {
        let worldEdit = {
            "timetravel": {
                "timeline": tl
            },
            "players": []
        }
        for (let i = 0; i < options.playerCount; i++) {
            const player = ThingFactory.generateNewPlayer(worldState)
            worldEdit.players.push(player)
        }

        const report = `Contracts signed. ${options.playerCount} players rise from the ground.`
        return [worldEdit, report]
    }
}

class EventTourneyDonate extends Event {
    type = "tourneyDonate"
    depth = "Tourney"

    calculateEdit(worldState, tl) {
        const tourney = activeTourney(worldState)
        const totalSins = tourney.players.reduce((total, pid) => total + getWorldItem(worldState, "players", pid).netWorth, 0)
        const donation = Math.floor(0.2 * totalSins / tourney.players.length)

        const worldEdit = {
            "timetravel": {
                "timeline": tl
            },
            "players": tourney.players.map(pid => {
                return {
                    "id": pid,
                    "netWorth": getWorldItem(worldState, "players", pid).netWorth - donation
                }
            })
        }

        const report = `Hearts swell! Kindness overflowing! Each player atones for ${donation.toLocaleString()} $ins.`
        return [worldEdit, report]
    }
}