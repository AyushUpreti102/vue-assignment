<template>
    <div class="FormList">
        <form class="FormList__Form">
            FirstName<input type="text" v-model="details.FirstName">
            LastName<input type="text" v-model="details.LastName">
            Location<input type="text" v-model="details.Location">
            <button @click.prevent="addDetails">Add</button>
        </form><br />
        <div class="FormList__FormData" v-for="(detail, index) in addedDetails" :key="index">
            <div class="FormList__Buttons Button1">{{detail.FirstName}}</div>
            <div class="FormList__Buttons Button2">{{detail.LastName}}</div>
            <div class="FormList__Buttons Button3">{{detail.Location}}</div>
            <div class="FormList__Buttons">
                <button @click.prevent="del(index)">X</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "FormList",
    data() {
        return {
            message: "",
            details: {
                FirstName: "",
                LastName: "",
                Location: ""
            },
            addedDetails: [],
        };
    },
    methods: {
        addDetails() {
            this.addedDetails.push(JSON.parse(JSON.stringify(this.details)));
        },
        del(index) {
            this.addedDetails.splice(index, 1);
        }
    },
}
</script>
<style scoped>
.FormList {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.FormList__FormData {
    display: flex;
    width: 80%;
}

.FormList__Buttons {
    width: 50%;
    border: 1px solid black;
    padding: 5px;
}

.FormList__Buttons {
    width: 35%;
    display: flex;
    justify-content: center;
    gap: 5px;
}

#bor {
    border: none
}
</style>