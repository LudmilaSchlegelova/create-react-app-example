function nasobok(cislo) {
	return x => x * cislo
}

const nasobokDvoma = nasobok(2)
console.log(nasobokDvoma(2))
const nasobokTroma = nasobok(3)
console.log(nasobokTroma(3))
const nasobokDesiatimi = nasobok(10)
console.log(nasobokDesiatimi(3))
