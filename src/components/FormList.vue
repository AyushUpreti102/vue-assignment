<template>
    <div class="FormList">
        <form class="FormList__Form">
            FirstName<input type="text" v-model="details.FirstName">
            LastName<input type="text" v-model="details.LastName">
            Location<input type="text" v-model="details.Location">
            <button @click.prevent="addDetails">Add</button>
        </form><br />
        <div class="FormList__FormData" v-for="(detail, index) in addedDetails" :key="index"
            :class="addedDetails[index].isChecked?'isRed':'isBlack'">
            <div class="FormList__Details Detail1">{{detail.FirstName}}</div>
            <div class="FormList__Details Detail2">{{detail.LastName}}</div>
            <div class="FormList__Details Detail3">{{detail.Location}}</div>
            <div class="FormList__Buttons">
                <button @click.prevent="del(index)">X</button>
                <input type="checkbox" @click="select(index)">
            </div>
        </div>
        </div>
</template>
<script>
export default {
    name: "FormList",
    data() {
        return {
            details: {
                FirstName: "",
                LastName: "",
                Location: "",
                isChecked: false,
            },
            addedDetails: [],
        }
    },
    methods: {
        addDetails() {
            if (this.details.FirstName == "" || this.details.LastName == "" || this.details.Location == "") {
                alert("please fill the form");
            }
            else {
                this.addedDetails.push(JSON.parse(JSON.stringify(this.details)));
            }
            this.details.FirstName = "";
            this.details.LastName = "";
            this.details.Location = "";
        },
        del(index) {
            this.addedDetails.splice(index, 1);
        },
        select(index) {
            if (this.addedDetails[index].isChecked === false) {
                this.addedDetails[index].isChecked = true;
            }
            else {
                this.addedDetails[index].isChecked = false;
            }
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

.FormList__Details {
    width: 50%;
    border: 1px solid black;
    padding: 5px;
}

.FormList__Buttons {
    border: 1px solid black;
    width: 20%;
    display: flex;
    justify-content: center;
    gap: 5px;
}

.isRed {
    color: red;
}

.isBlack {
    color: black;
}
</style>