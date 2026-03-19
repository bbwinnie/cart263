window.onload = function () {


	let testArray = ["ABS", "giraffe", "Pear"]
	cont[first, secound, thrid] = testArray;

	let stringSortArray = ["ABS", "giraffe", "Giraffe", "apple", "orange", "tortoise", "peanut", "penguin", "hare"]
	console.log(stringSortArray);
	console.log(stringSortArray.sort(compareNoCase))

	function compareNoCase(a, b) {
		const capital_A = a.toUpperCase();
		const capital_B = b.toUpperCase();

		if (capital_A > capital_B) return -1;
		if (capital_A < capital_B) return 1;

	}



	// FOR BUILDING THE EXAMPLES :)
	const allRows = document.querySelectorAll(".flex-row");
	let arrayOfShapes_One = [];
	//INIT ONE:
	for (let i = 0; i < 10; i++) {
		let color = { r: (255 - i * 10), g: 50, b: 100 };
		arrayOfShapes_One.push( //append to the end
			new CustomShape((i + 1) * 55, 50, "shape", "rectangle", color)
		);
	}
	add_elements_to_dom(arrayOfShapes_One, allRows[0]);

	document.querySelector("#mapButtonA").addEventListener("click", function () {
		mapArraysShape(arrayOfShapes_One, allRows[0])
	});

	document.querySelector("#mapButtonB").addEventListener("click", function () {
		mapArraysColor(arrayOfShapes_One, allRows[0])
	});

	//INIT TWO:
	let cshape = "";
	let arrayOfShapes_Two = []
	for (let i = 0; i < 16; i++) {
		let color = { r: 255 - i * 10, g: 50, b: 100 };
		if (i % 3 === 0) cshape = "circle";
		else cshape = "rectangle";
		arrayOfShapes_Two.push(
			new CustomShape((i + 1) * 55, 50, "shape", cshape, color),
		);
	}
	add_elements_to_dom(arrayOfShapes_Two, allRows[1]);
	//filter did not change the y. map will changing the y
	document.querySelector("#filterButtonA")
		.addEventListener("click", function () { filterArraysXPos(arrayOfShapes_Two, allRows[1]) });

	document
		.querySelector("#filterButtonB")
		.addEventListener("click", function () { filterArraysByShape(arrayOfShapes_Two, allRows[1]) });
	//INIT THREE

	let arrayOfShapes_Three = [];
	for (let i = 0; i < 10; i++) {
		let color = { r: 255 - i * 9, g: 255 - i * 20, b: 255 - i * 7 };

		arrayOfShapes_Three.push(
			new CustomShape((i + 1) * 55, 50, "shape", "circle", color),
		);
	}
	add_elements_to_dom(arrayOfShapes_Three, allRows[2]);
	allRows[2].innerHTML += ``

	function forEachCallBackA() {
		document.querySelector("#pSpan").innerHTML = "";
		arrayOfShapes_Three.forEach(addPTags);

		function addPTags(el) {
			document.querySelector("#pSpan").innerHTML += ` x:${el.x} `;
		}
	}

	function forEachCallBackB() {
		document.querySelector("#pSpan").innerHTML = ""
		arrayOfShapes_Three.forEach(addPTags)

		function addPTags(el) {
			document.querySelector("#pSpan").innerHTML += ` y:${el.y} `

		}
	}

	document
		.querySelector("#forEachButtonA")
		.addEventListener("click", forEachCallBackA);

	document
		.querySelector("#forEachButtonB")
		.addEventListener("click", forEachCallBackB);
	//INIT FOUR

}

function mapArraysShape(arrayOfShapes, row) {
	// MAP ONE
	let arrayOfShapesNew = arrayOfShapes.map(changeShape);
	add_elements_to_dom(arrayOfShapesNew, row);

	//this el = each element	
	function changeShape(el) {
		return (
			/* need to make a copy */
			new CustomShape(el.x, el.y + 100, el.shapeClass, "circle", el.color)
		)
	}
}

function mapArraysColor(arrayOfShapes, row) {
	// MAP TWO
	let arrayOfShapesNew = arrayOfShapes.map(changeColor);
	add_elements_to_dom(arrayOfShapesNew, row);


	function changeColor(el) {
		//take red color
		let newColor = { r: el.color.r, g: 125, b: 255 }
		return (
			/* need to make a copy */
			new CustomShape(el.x, el.y + 200, el.shapeClass, el.customShapeClass, newColor)
		)
	}
}

function filterArraysXPos(arrayOfShapes, row) {
	// FILTER ONE
	let filteredArray = arrayOfShapes.filter(greater_posX);


	function greater_posX(el) {
		return (
			(el.x > 200 && el.x < 400)
		)
	}

	//then we can map - to change the y :)
	let arrayOfShapesYChange = filteredArray.map(
		function (el) {
			return (new CustomShape(el.x, el.y + 100, el.shapeClass, el.customShapeClass, el.color))

		});
	console.log(filteredArray)
	//update
	add_elements_to_dom(arrayOfShapesYChange, row);

	// add_elements_to_dom(filteredArray, row);
	console.log(filteredArray)
}

function filterArraysByShape(arrayOfShapes, row) {
	// FILTER ONE
	let filterArraysShape = arrayOfShapes.filter(shape_filter);

	function shape_filter(el) {
		return (
			(el.customShapeClass === 'circle')
		)
	}

	//then we can map - to change the y :)
	let arrayOfShapesNew = filterArraysShape.map(
		function (el) {
			return (new CustomShape(el.x, el.y + 200, el.shapeClass, el.customShapeClass, el.color))

		});
	add_elements_to_dom(arrayOfShapesNew, row);
}


// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map( map就是recreate a new array
// 	function (num) {
// 		return (
// 			num * num
// 		)
// 	}
// );

// filter() is the samething that will creat a new erray, 
// however you need add a filter for the array. the new array will only be those element can pass the filter

//%。=== remainder operator 余数

//reduce is make the array become a one value.

// find will only give you the first one with filter

// some will return Boolean number （ture/ false)

//every all the element past test it will return ture. 

//sort can in place and returns the reference to the same array