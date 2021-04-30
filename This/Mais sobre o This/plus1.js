const tvShowPersonage = {
    firstname: "Jackson",
    lastname: "Teller",
    nickName: "Jack Boy",
    hiMen() {
        const { firstname, lastname, nickName } = this;
        console.log(`${firstname} ${lastname} ou ${nickName}`);
    },
    sayMen: () => {
        const { nickName } = this;
        console.log(`${nickName} say "Jesus Christ"`)
    }
}

tvShowPersonage.hiMen();
tvShowPersonage.sayMen(); // Undefined, pois sendo sayMen um método de tvShowPersonage e sendo também uma arrow-function ele utiliza o this de onde tvShowPersonage foi declarado (global)