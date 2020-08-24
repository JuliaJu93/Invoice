function sorting (parameter) {
    buyers.sort(function (a, b) {
		if (a[parameter] > b[parameter]) {
		  return 1;
		}
		if (a[parameter] < b[parameter]) {
		  return -1;
		}
		return 0;
	});
}