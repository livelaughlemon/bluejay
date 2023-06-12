<script>
export default {
    data: () => ({
        display: false,
        town: {
            name: "Loading...",
            mayor: "Steve",
            residentcount: 0,
            board: "Set your board with /t board"
        }
    }),

    props: {
        name: String,
    },

    mounted() {
        this.getTownInfo()
        this.interval = setInterval(() => this.getTownInfo(), 20000);
    },

    methods: {
        async getTownInfo() {
            const townyapi = `https://play.orchidmc.me:25570/town/` + this.name
            var response = await (await fetch(townyapi)).json()
            if (response.response === "200") {
                this.display = true
                // set stuff
                this.town.name = response.name.formatted
                this.town.mayor = response.mayor
                this.town.residentcount = response.residents.split(',').length // this is insane because i messed up when making the api
                this.town.board = response.board
            } else {
                this.display = false
                this.status = response.players.online + " player(s) online"
            }
        }
    }
}
</script>

<template>
    <div class="pageItemContentItem" v-if="display">
        <div class="pageItemContentItemUpper">
            <div class="pageItemContentItemTitle">
                <p style="text-transform: capitalize;">{{ town.name }}</p>
            </div>
        </div>
        <p class="pageItemContentItemBody">
            Mayor {{ town.mayor }} &bull; {{ town.residentcount }} residents
            <br>
            {{ town.board }}
        </p>
    </div>
</template>