// function getDaysEvenInMonthUTC(month, year) {
// 	month = month - 1;
// 	var date = new Date(Date.UTC(year, month, 1));
// 	var days = {};
// 	while (date.getUTCMonth() === month) {
// 		if (
// 			new Date(date).toUTCString().split(' ').slice(0, 1).toString() === 'Tue,'
// 		) {
// 			days['Seshanba ' + new Date(date).getMonth()] = false;
// 		} else if (
// 			new Date(date).toUTCString().split(' ').slice(0, 1).toString() === 'Thu,'
// 		) {
// 			days[date.toISOString().split('T').slice(0, 1)] = false;
// 		} else if (
// 			new Date(date).toUTCString().split(' ').slice(0, 1).toString() === 'Sat,'
// 		) {
// 			days[date.toISOString().split('T').slice(0, 1)] = false;
// 		}
// 		date.setUTCDate(date.getUTCDate() + 1);
// 	}
// 	return days;
// }
// console.log(getDaysEvenInMonthUTC(10, 2023));

function getDaysEvenInMonthUTC(day, month, year, end) {
	month = month - 1;
	var date = new Date(Date.UTC(year, month, day));
	var days = [];
	while (date.getUTCMonth() === month) {
		if (
			new Date(date).getDate() === new Date(end).getDate() &&
			new Date(date).getMonth() + 1 === new Date(end).getMonth() + 1 &&
			new Date(date).getFullYear() === new Date(end).getFullYear()
		) {
			break;
		} else {
			if (
				new Date(date).toUTCString().split(' ').slice(0, 1).toString() ===
				'Tue,'
			) {
				days.push({
					day: new Date(date).getDate(),
					month: new Date(date).getMonth() + 1,
					year: new Date(date).getFullYear(),
				});
			} else if (
				new Date(date).toUTCString().split(' ').slice(0, 1).toString() ===
				'Thu,'
			) {
				days.push({
					day: new Date(date).getDate(),
					month: new Date(date).getMonth() + 1,
					year: new Date(date).getFullYear(),
				});
			} else if (
				new Date(date).toUTCString().split(' ').slice(0, 1).toString() ===
				'Sat,'
			) {
				days.push({
					day: new Date(date).getDate(),
					month: new Date(date).getMonth() + 1,
					year: new Date(date).getFullYear(),
				});
			}
		}
		date.setUTCDate(date.getUTCDate() + 1);
	}
	return days;
}

const getFullDaysOdd = function (start, end) {
	const data = [];
	let oldTime = 0;
	for (
		var dt = new Date(start);
		dt <= new Date(end);
		dt.setDate(dt.getDate() + 1)
	) {
		if (dt.getMonth() !== oldTime) {
			const date = getDaysEvenInMonthUTC(
				new Date(dt.getDate()),
				new Date(dt).getMonth() + 1,
				new Date(dt).getFullYear(),
				end
			);
			data.push(...date);
			oldTime = dt.getMonth();
		}
	}
	return data;
};

console.log(getFullDaysOdd('2023-12-10', '2024-2-11'));
