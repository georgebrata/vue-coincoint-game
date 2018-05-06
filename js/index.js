Vue.component("coin", {
	props: ['name', 'value', 'pic', 'quantity'],
	methods: {
		increase: function increase() {
			this.$emit('increase');
		},
		decrease: function decrease() {
			this.$emit('decrease');
		}
	},
	template: "#coin-template"
});

var vm = new Vue({
	el: "#vue-app",
	data: {
		total: 0,
		coins: [{ name: "Penny", value: 1, quantity: 0, pic: "https://res.cloudinary.com/tylerlanecodes/image/upload/v1524526065/penny.png" }, { name: "Nickel", value: 5, quantity: 0, pic: "https://res.cloudinary.com/tylerlanecodes/image/upload/v1524526065/nickel.png" }, { name: "Dime", value: 10, quantity: 0, pic: "https://res.cloudinary.com/tylerlanecodes/image/upload/v1524526065/dime.png" }, { name: "Quarter", value: 25, quantity: 0, pic: "https://res.cloudinary.com/tylerlanecodes/image/upload/v1524526065/quarter.png" }]
	},
	watch: {
		coins: {
			deep: true,
			handler: function handler() {
				var cents = 0;
				for (var i = 0; i < this.coins.length; i++) {
					cents += this.coins[i].value * this.coins[i].quantity;
				}this.total = cents;
			}
		}
	},
	filters: {
		usd: function usd(total) {
			if (total < 100) return total + '¢';else return '$' + (total / 100).toFixed(2);
		}
	}
});